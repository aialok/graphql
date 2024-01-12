const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int
    nationality: Nationality
    friends: [User!]
    favouriteMovies: [Movie!]
  }

  type Movie {
    id: ID!
    title: String!
    releaseDate: String!
    rating: Float!
  }

  type Query {
    getAllUsers: [User!]!
    getUser(id: ID): User
    movies: [Movie!]!
    movie(name: String!): Movie
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int
    nationality: Nationality = India
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  input DeleteUserInput {
    id: ID!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(input: DeleteUserInput!): String
  }

  enum Nationality {
    USA
    Canada
    UK
    Australia
    Germany
    France
    Spain
    Italy
    Brazil
    India
    Japan
  }
`;

module.exports = { typeDefs };
