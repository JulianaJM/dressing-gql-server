const { RESTDataSource } = require("apollo-datasource-rest");

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://dressingsecurity.herokuapp.com";
  }

  userReducer(user) {
    return {
      id: user.id,
      username: user.username,
      profile: user.roles,
      token: user.Authorization,
    };
  }

  async getAllUsers() {
    const response = await this.get("users");
    return Array.isArray(response)
      ? response.map((user) => this.userReducer(user))
      : [];
  }

  async login(username, password) {
    const response = await this.post(
      "login",
      { username, password } // request body
    );
    return this.userReducer(response);
  }

  async register(username, password, confirmedPassword) {
    const response = await this.post("register", {
      username,
      password,
      confirmedPassword,
    });
    return this.userReducer(response);
  }
}

module.exports = UserAPI;
