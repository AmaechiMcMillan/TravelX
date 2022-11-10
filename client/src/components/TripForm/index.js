import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_TRIP } from "../../utils/mutations";

import Auth from "../../utils/auth";

const TripForm = ({ profileId }) => {
  const [trip, setTrip] = useState("");

  const [addTrip, { error }] = useMutation(ADD_TRIP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addTrip({
        variables: { profileId, trip },
      });

      setTrip("");
    } catch (err) {
      console.error(err);
    }
  };

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

export default TripForm;
