import React from "react";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import TripList from "../components/TripList";
import TripForm from "../components/TripForm";

import {
  QUERY_SINGLE_PROFILE,
  QUERY_ME,
  QUERY_USERTRIPS,
} from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  // const { loading: loading2, data: data2 } = useQuery(QUERY_USERTRIPS, {
  //   variables: { profileId: profileId },
  // });
  // console.log(data);

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};
  console.log(profile);
  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <>
        <h4>
          You need to be logged in to see your profile page. Use the navigation
          links above to sign up or log in!
        </h4>
        {/* <TripForm />
        <TripList /> */}
      </>
    );
  }

  return (
    <div>
      <h4>working</h4>
    </div>
  );
};

export default Profile;
