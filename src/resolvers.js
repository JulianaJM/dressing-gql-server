module.exports = {
  Query: {
    users: (_, __, { dataSources }) => dataSources.userAPI.getAllUsers(),
  },

  Mutation: {
    login: async (_, { username, password }, { dataSources }) => {
      const user = await dataSources.userAPI.login(username, password);
      return user;
    },
    register: async (
      _,
      { username, password, confirmedPassword },
      { dataSources }
    ) => {
      const user = await dataSources.userAPI.register(
        username,
        password,
        confirmedPassword
      );
      return user;
    },
  },
};
