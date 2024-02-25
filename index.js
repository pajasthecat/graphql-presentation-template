import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./src/resolvers.js";
import { typeDefs } from "./src/typeDefs.js";

const server = new ApolloServer({ resolvers, typeDefs });

await startStandaloneServer(server, { port: 4000 });
