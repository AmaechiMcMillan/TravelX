import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation AddTrip(
    $adults: Int!
    $origin: String!
    $destination: String!
    $departureDate: String!
    $returnDate: String!
  ) {
    addTrip(
      adults: $adults
      origin: $origin
      destination: $destination
      departureDate: $departureDate
      returnDate: $returnDate
    ) {
      _id
      email
      name
      trip
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_TRIP = gql`
  mutation removeTrip($trip: String!) {
    removeTrip(trip: $trip) {
      _id
      name
      trip
    }
  }
`;
