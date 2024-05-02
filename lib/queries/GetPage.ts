import { gql } from '@apollo/client';

export const GET_PAGE = gql`
  query GetPageByUri($uri: String!) {
    pageBy(uri: $uri) {
      content
      uri
      title
    }
  }
`;

export interface Page {
    content: string;
    uri: string;
    title: string;
};

export interface PageData {
    pageBy: Page;
};
