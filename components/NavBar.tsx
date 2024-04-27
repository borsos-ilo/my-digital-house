// components/NavBar/NavBar.js
import { useQuery, gql } from '@apollo/client';
import CategoryButton from './CategoryButton';
import Link from 'next/link';
import React, {useState, ReactNode, useContext} from 'react';




const GET_CATEGORIES = gql`
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

interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
}

interface CategoriesData {
    categories: {
        nodes: Category[];
    }
}

interface CategoriesError {
    message: string;
}

const NavBar: React.FC = () => {
    const { loading, error, data } = useQuery<CategoriesData, CategoriesError>(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <nav>
            {data && data.categories.nodes.map((category) => (
                <CategoryButton key={category.id}>
                    {category.name}
                </CategoryButton>
            ))}
        </nav>
    );
};

export default NavBar;
