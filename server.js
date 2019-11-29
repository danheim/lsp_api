// node modules
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const chalk = require('chalk');
const port = process.env.PORT || 4000;

// apollo
const { ApolloServer } = require('apollo-server-express');
const path = '/api/graphql';

// app
const app = express();

app.use(cookieParser());
app.use(logger('dev'));
app.get('*', (req, res) => res.send({
  message: 'LS Project API welcomes you :)'
}));

const corsOptions = {
  origin: 'https://ls-p.me',
  credentials: true
};

// sequelize
const models = require('./models');
const { getUser } = require('./modules/helpers');

models.sequelize.sync()
  .then(() => models.sequelize.authenticate()
    .then(() => {
      console.log(' 🚀🚀🚀 🚀🚀🚀 🚀🚀🚀\n', chalk.green('🚀 Database looks fine'));

      const resolvers = require('./modules/resolvers');
      const typeDefs = require('./modules/typedefs');
      const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: async({ req, res }) => {
          const user = await getUser(models, req, res);
          return { models, user, res, req };
        }
      });

      server.applyMiddleware({ app, path, cors: corsOptions });
      app.listen(port);

      console.log(
        chalk.green(` 🚀 Server started at http://localhost:${port}${server.graphqlPath}\n`),
        '🚀🚀🚀 🚀🚀🚀 🚀🚀🚀',
      );

    })
    .catch((error) => console.log(error)));
