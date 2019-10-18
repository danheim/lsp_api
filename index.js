// node modules
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const http = require('http');
const app = express();


app.use(express.json());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.set('port', 8000);
const server = http.createServer(app);
server.listen(8000);
console.log('Running a GraphQL API server at localhost:8000/graphql');

module.exports = app;
