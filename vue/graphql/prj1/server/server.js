import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// like define a class, but in graphql
// 
const typeDefs = `#graphql
    type Query { 
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: ()=>'Hello world', // resolver function
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

const info = await startStandaloneServer(server, { listen: { port: 9000 }});

console.log(`Server running at: ${info.url}`);