// graphql/postQueries.ts
import { gql } from '@apollo/client';


// GraphQL query
export const GET_POSTS = gql`
query GetPosts {
    posts {
        nodes {
            id
            title
            content
            excerpt
            slug
            categories {
                nodes {
                    id
                    name
                }
            }
        }
    }
}
`;

// TypeScript interfaces
export interface Category {
    id: string;
    name: string;
};

export interface Post {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    slug: string;
    categories: {
        nodes: Category[];
    };
};

export interface PostData {
    posts: {
        nodes: Post[];
    };
};









