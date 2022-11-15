import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      trip {
        _id
        adults
        origin
        destination
        departureDate
        returnDate
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      trip {
        _id
        adults
        origin
        destination
        departureDate
        returnDate
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      trip {
        _id
        adults
        origin
        destination
        departureDate
        returnDate
      }
    }
  }
`;

export const QUERY_USERTRIPS = gql`
  query UserTrips($userId: ID!) {
    userTrips(userId: $userId) {
      _id
      adults
      origin
      destination
      departureDate
      returnDate
    }
  }
`;
