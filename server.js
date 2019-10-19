// node modules
const express = require('express');
const port = 4000;
const logger = require('morgan');
const { ApolloServer } = require('apollo-server-express');
const chalk = require('chalk');
const path = '/api/graphql';

// app
const app = express();

// app.use(logger('dev'));
app.get('*', (req, res) => res.send('LSP API welcomes you'));

// sequelize
const models = require('./models');
const { getUser } = require('./modules/helpers');

models.sequelize.authenticate();
models.sequelize.sync()
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

    server.applyMiddleware({ app, path });
    app.listen(port);

    console.log(
      chalk.green(` 🚀 Server started at http://localhost:${port}${server.graphqlPath}\n`),
      '🚀🚀🚀 🚀🚀🚀 🚀🚀🚀',
    );
  })
  .catch((error) => console.log(error));
