const { AuthenticationError } = require("apollo-server-express");
const { Profile, Trip } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    userTrips: async (parent, args, context) => {
      if (context.user) {
        return Trip.find({ userId: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    trips: async () => {
      return Trip.find();
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Add a third argument to the resolver to access data in our `context`
    addTrip: async (parent, args, context) => {
      console.log(context.user);
      console.log(args);
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        let newTrip = {
          adults: args.adults,
          origin: args.origin,
          destination: args.destination,
          departureDate: args.departureDate,
          returnDate: args.returnDate,
          userId: context.user._id,
        };
        const savedTrip = await Trip.create(newTrip);

        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              trip: savedTrip,
            },
          },
          {
            new: true,
            // runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError("You need to be logged in!");
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Make it so a logged in user can only remove a trip from their own profile
    removeTrip: async (parent, { trip }, context) => {
      if (context.user) {
        return Trip.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { trips: trip } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
