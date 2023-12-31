import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
// import schema from './schema.graphql'

const app = express();

app.use(cors());
app.use(bodyParser.json());

const apolloServerStart = async () => {
  const server = new ApolloServer({
    typeDefs: `
      type Book {
        title: String
        author: Author
      }
      
      type Author {
        name: String
        books: [Book]
      }

      type Query {
        getToDo: [Book]
      }
    `,

    resolvers: {
      Query: {
        getToDo: () => [
          { title: "The Diary of young girl", author: { name: "Anne Frank", books: [] } },
        ],
      },
    },
  });

  await server.start();
  app.use("/graphql", expressMiddleware(server));

  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
};

apolloServerStart();
