// node modules
const express = require('express');
const app = express();
const port = 3000;
const logger = require('morgan');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const root = require('./routes/graphql');
// uses
app.use(logger('dev'));
app.use(express.json());

// graphql
const schema = buildSchema(`
  type Query {
    hello (
      name: String
    ): String
  }
`);


app.use('/api/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// sequelize
const models = require('./models');
models.sequelize
  .sync()
  .then(() => console.log('Database looks fine'))
  .catch((error) => console.log(error));

// routes
require('./routes')(app);
app.get('*', (req, res) => res.send('LSP API welcomes you'));

// server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
