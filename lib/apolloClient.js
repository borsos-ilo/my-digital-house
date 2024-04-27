// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
    link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_WORDPRESS_URL, // Change to your WordPress GraphQL URL
    }),
    cache: new InMemoryCache()
});

export default client;
