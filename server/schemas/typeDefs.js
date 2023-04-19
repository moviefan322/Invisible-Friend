const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    friends: [Friend]
    experts: [Expert]
  }

  type Message {
    role: String!
    content: String!
  }

  type Friend {
    _id: ID!
    name: String!
    language: String!
    age: Int!
    mood: String!
    user: User!
    history: [Message!]
  }

  type Expert {
    _id: ID!
    name: String!
    language: String!
    expertise: String!
    user: User!
    history: [Message!]
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Prompt {
    _id: ID!
    body: String!
  }

  type Query {
    me: User
    users: [User]
    user(_id: ID!): User
    friends: [Friend]
    friend(_id: ID!): Friend
    experts: [Expert]
    expert(_id: ID!): Expert
    prompt(input: String!): String
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    updateUser(_id: ID!, name: String!, email: String!, password: String!): User
    deleteUser(_id: ID!): User
    addFriend(
      name: String!
      language: String!
      age: Int!
      mood: String!
      user: String!
      history: [Message!]
    ): Friend
    updateFriend(
      _id: ID!
      name: String!
      language: String!
      age: Int!
      mood: String!
      user: String!
      history: [Message!]
    ): Friend
    updateFriendHistory(_id: ID!, message: MessageInput!): Friend
    updateExpertHistory(_id: ID!, message: MessageInput!): Expert
    deleteFriend(_id: ID!): Friend
    addExpert(
      name: String!
      language: String!
      expertise: String!
      user: String!
      history: [Message!]
    ): Expert
    updateExpert(
      _id: ID!
      name: String!
      language: String!
      expertise: String!
      user: String!
      history: [Message!]
    ): Expert
    deleteExpert(_id: ID!): Expert
  }
`;

module.exports = typeDefs;
