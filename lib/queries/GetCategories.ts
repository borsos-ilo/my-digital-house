import { gql } from '@apollo/client';


export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      nodes {
        id
        name
        slug
        description
      }
    }
  }
`;

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
}

export interface CategoriesData {
    categories: {
        nodes: Category[];
    }
}

export interface CategoriesError {
    message: string;
}