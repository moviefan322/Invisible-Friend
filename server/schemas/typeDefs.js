const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Friend {
    _id: ID
    name: String
    language: String
    age: Int
    mood: String
    user: User
  }

  type Expert {
    _id: ID
    name: String
    language: String
    expertise: String
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(_id: ID!): User
    friends: [Friend]
    friend(_id: ID!): Friend
    experts: [Expert]
    expert(_id: ID!): Expert
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    addFriend(name: String!, language: String!, age: Int!, mood: String!, user: String!): Friend
    updateFriend(_id: ID!, name: String!, language: String!, age: Int!, mood: String!, user: String!): Friend
    deleteFriend(_id: ID!): Friend
    addExpert(name: String!, language: String!, expertise: String!, user: String!): Expert
    updateExpert(_id: ID!, name: String!, language: String!, expertise: String!, user: String!): Expert
    deleteExpert(_id: ID!): Expert
  }
`;

module.exports = typeDefs;