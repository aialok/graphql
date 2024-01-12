let UserList = [
  {
    id: 1,
    name: "John",
    username: "john123",
    age: 25,
    nationality: "USA",
    friends: [
      {
        id: 2,
        name: "Emily",
        username: "emily456",
        age: 30,
        nationality: "Canada",
      },
      {
        id: 3,
        name: "David",
        username: "david789",
        age: 28,
        nationality: "UK",
      },
    ],
  },
  {
    id: 2,
    name: "Emily",
    username: "emily456",
    age: 30,
    nationality: "Canada",
    friends: [
      {
        id: 1,
        name: "John",
        username: "john123",
        age: 25,
        nationality: "USA",
      },
      {
        id: 3,
        name: "David",
        username: "david789",
        age: 28,
        nationality: "UK",
      },
    ],
  },
  {
    id: 3,
    name: "David",
    username: "david789",
    age: 28,
    nationality: "UK",
    friends: [
      {
        id: 1,
        name: "John",
        username: "john123",
        age: 25,
        nationality: "USA",
      },
      {
        id: 2,
        name: "Emily",
        username: "emily456",
        age: 30,
        nationality: "Canada",
      },
    ],
  },
  


];

const MovieList = [
  {
    id: 1,
    title: "The Matrix",
    releaseDate: "March 31, 1999",
    rating: 8.7,
  },
  {
    id: 2,
    title: "The Matrix Reloaded",
    releaseDate: "May 7, 2003",
    rating: 7.2,
  },
  {
    id: 3,
    title: "The Matrix Revolutions",
    releaseDate: "October 27, 2003",
    rating: 6.8,
  },
  {
    id: 4,
    title: "The Matrix 4",
    releaseDate: "December 22, 2021",
    rating: 9.0,
  },
  {
    id: 5,
    title: "John Wick",
    releaseDate: "October 24, 2014",
    rating: 7.4,
  },
  {
    id: 6,
    title: "John Wick: Chapter 2",
    releaseDate: "February 10, 2017",
    rating: 7.5,
  },
  {
    id: 7,
    title: "John Wick: Chapter 3 – Parabellum",
    releaseDate: "May 9, 2019",
    rating: 7.4,
  },
  {
    id: 8,
    title: "John Wick: Chapter 4",
    releaseDate: "May 27, 2022",
    rating: 9.0,
  },
  {
    id: 9,
    title: "Bill & Ted's Excellent Adventure",
    releaseDate: "February 17, 1989",
    rating: 6.9,
  },
  {
    id: 10,
    title: "Bill & Ted's Bogus Journey",
    releaseDate: "July 19, 1991",
    rating: 6.2,
  },
  {
    id: 11,
    title: "Bill & Ted Face the Music",
    releaseDate: "August 28, 2020",
    rating: 6.1,
  },
  {
    id: 12,
    title: "Speed",
    releaseDate: "June 10, 1994",
    rating: 7.2,
  },
  {
    id: 13,
    title: "Point Break",
    releaseDate: "July 12, 1991",
    rating: 7.3,
  },
  {
    id: 14,
    title: "The Devil's Advocate",
    releaseDate: "October 17, 1997",
    rating: 7.5,
  },
  {
    id: 15,
    title: "Constantine",
    releaseDate: "February 18, 2005",
    rating: 7.0,
  },
  {
    id: 16,
    title: "47 Ronin",
    releaseDate: "December 25, 2013",
    rating: 6.3,
  },
];

module.exports = { UserList, MovieList };
