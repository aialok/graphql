const { UserList, MovieList } = require("../fake-data.js");

const resolvers = {
  Query: {
    getAllUsers() {
      return UserList;
    },
    getUser(parent, { id }) {
      const user = UserList.filter((user) => {
        return user.id == id;
      });
      console.log(user);
      return user[0];
    },
    movies: () => MovieList,
    movie(parent, { name }) {
      const movie = MovieList.filter((movie) => {
        return movie.title == name;
      });
      return movie[0];
    },
  },

  User: {
    favouriteMovies: () => {
      const randomIndex = Math.floor(Math.random() * MovieList.length);
      return [MovieList[randomIndex]];
    },
  },

  Mutation: {
    createUser(parent, args) {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

    updateUsername(parent, args) {
      const { id, newUsername } = args.input;

      let updatedUser;

      UserList.forEach((user) => {
        if (user.id == id) {
          user.username = newUsername;
          updatedUser = user;
        }
      });

      return updatedUser;
    },

    deleteUser(parent, args) {
      const id = args.input.id;
      let updatedUserList = UserList.filter((user) => user.id != id);
      UserList.length = 0;
      UserList.push(...updatedUserList);

      return "Success";
    },
  },
};

module.exports = { resolvers };
