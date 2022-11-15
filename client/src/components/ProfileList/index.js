import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { Link } from "react-router-dom";

import { QUERY_PROFILES } from "../../utils/queries";

const ProfileList = ({ profiles, title }) => {
  // profiles = useQuery(QUERY_PROFILES);
  // if (!profiles.length) {
  //   return <h3>No Profiles Yet</h3>;
  // }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {profile.name} <br />
                  <span className="text-white" style={{ fontSize: "1rem" }}>
                    has {profile.trips ? profile.trips.length : 0} trip(s)
                    planned.
                    {profile.trips && profile.trips.length === 1 ? "" : "s"}
                  </span>
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${profile._id}`}
                >
                  View your trips.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
