import React from "react";
import { Link } from "react-router-dom";

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
        <TripForm />
        <TripList />
      </>
    );
  }

  return (
    <div>
      <h4>Plan more trips below.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Plan some trips..."
              value={trip}
              className="form-input w-100"
              onChange={(event) => setTrip(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Plan Trip
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to plan trips. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Profile;
