import React from "react";
import { useMutation } from "@apollo/client";

import { REMOVE_TRIP } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";

const TripsList = ({ trips, isLoggedInUser = false }) => {
  const [removeTrip, { error }] = useMutation(REMOVE_TRIP, {
    update(cache, { data: { removeTrip } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeTrip },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveTrip = async (trip) => {
    try {
      const { data } = await removeTrip({
        variables: { trip },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!trips.length) {
    return <h3>No Trips Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {trips &&
          trips.map((trip) => (
            <div key={trip} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{trip}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveTrip(trip)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default TripsList;
