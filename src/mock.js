const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { createReadStream } = require("fs");

const mocks = {
  Upload: () => createReadStream(),
  User: () => ({
    username: "brutus",
    password: "azertyui",
  }),
  Item: () => ({
    category: () => ({ name: "Vêtement" }),
    type: () => ({ name: "Jupe" }),
    color: () => ({ name: "Rouge" }),
    pattern: true,
    pantLength: () => ({ length: "32" }),
    size: () => ({ length: "M" }),
    material: () => ({ name: "Coton" }),
  }),
};


const server = new ApolloServer({
  typeDefs,
  mocks: mocks,
  uploads: false,
});


server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
});

