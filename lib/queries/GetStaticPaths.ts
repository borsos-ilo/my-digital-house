// graphql/postQueries.ts
import { gql } from '@apollo/client';

// GraphQL query
// Fetch slugs from your CMS or data source
export const GET_STATIC_PATHS = gql`
        query GetAllSlugs {
          posts {
            nodes {
              slug
            }
          }
        }
      `

// TypeScript interfaces


export interface Post {
    slug: string;
};

export interface PathData {
    posts: {
        nodes: Post[];
    };
};









