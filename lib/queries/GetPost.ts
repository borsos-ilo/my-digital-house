import { gql } from '@apollo/client';

export const GET_POST = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      slug
      title
      content
    }
  }
`;

export interface Post {
    title: string;
    content: string;
};

export interface PostData {
    postBySlug: Post;
};
