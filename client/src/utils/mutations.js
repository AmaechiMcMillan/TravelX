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
  mutation addTrip($profileId: ID!, $trip: String!) {
    addTrip(profileId: $profileId, trip: $trip) {
      _id
      name
      trips
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
      trips
    }
  }
`;
