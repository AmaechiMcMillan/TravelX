import React from "react";
import { useQuery } from "@apollo/client";

import ProfileList from "../components/ProfileList";

import { QUERY_PROFILES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList profiles={profiles} title="Here is your trip..." />
          )}
        </div>
        <section class="section">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading.
          </h2>
        </section>
      </div>
    </main>
  );
};

export default Home;
