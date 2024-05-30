import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Schema
const typeDefs = `#graphql
    schema {
        query: Query
    }

# Schema defination represents what are the fields a client can request.
    type Query {
        greeting: String
    }
`;
  
// A resolver is a function or a implementation that resolves a value for a type or field within a schema.
 const resolvers = {
    Query: {
        greeting: () => 'Hello GraphQL!',
    }
 }

 const server = new ApolloServer({ typeDefs, resolvers});
 const { url } = await startStandaloneServer(server,{listen:{port: 9000} });
 console.log(`Server running at ${url}`);