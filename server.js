const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`
  }
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers
});
server.start(() => console.log("Server is running on localhost:4000"));
