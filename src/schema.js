const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    profile: [Role]!
    token: String
  }

  type Role {
    id: ID!
    roleName: String!
  }

  type ItemCategory {
    id: ID!
    name: String!
  }

  type ItemType {
    id: ID!
    name: String!
  }

  type ItemColor {
    id: ID!
    name: String!
  }

  type ItemSize {
    id: ID!
    length: String!
  }

  type ItemMaterial {
    id: ID!
    name: String!
  }

  type Item {
    id: ID!
    category: ItemCategory!
    type: ItemType!
    color: ItemColor!
    pattern: Boolean
    pantLength: ItemSize
    size: ItemSize
    material: [ItemMaterial]
  }

  input ItemInput {
    category: String
    type: String
    color: String
    pattern: Boolean
    pantLength: Int
    size: String
    material: [String]
  }

  type Query {
    items: [Item]!
    item(id: ID!): Item
    users: [User]
    me: User
  }

  type Mutation {
    addItem(item: ItemInput): ItemUpdateResponse!
    login(username: String, password: String): User
    register(
      username: String
      password: String
      confirmedPassword: String
    ): User
  }

  type ItemUpdateResponse {
    success: Boolean!
    message: String
    items: [Item]
  }
`;

module.exports = typeDefs;
