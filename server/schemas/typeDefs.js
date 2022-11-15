const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    # trip: [String]!
    trip: [Trip]!
  }

  type Trip {
    _id: ID
    adults: Int
    origin: String
    destination: String
    departureDate: String
    returnDate: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    trips: [Trip]
    userTrips(userId: ID!): [Trip]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addTrip(
      adults: Int
      origin: String
      destination: String
      departureDate: String
      returnDate: String
      _id: ID!
    ): Profile
    removeProfile: Profile
    removeTrip(trip: String!): Profile
  }
`;

module.exports = typeDefs;
