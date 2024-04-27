// components/NavBar/NavBar.js
import { useQuery, gql } from '@apollo/client';
import CategoryButton from './CategoryButton';
import Link from 'next/link';
import React, {useState} from 'react';

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

const NavBar = ({onPostCategorySelect}) => {

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // loading, error and data are elements of the useQuery that we're "unrolling" above
  // all of them are objects and they come with their properties
  // for error, it's for example error.message
  // for data, it's the properties of a query - so for example data.categories, because I requested categories in query


  return (
    <nav>
            {data.categories.nodes.map((category) => (
                // <button>
                    <CategoryButton key={category.id} onClick={() => onPostCategorySelect(category.id)}>
                    {category.name}
                    
                </CategoryButton>
                // {category.name} is {children} of the CategoryLink component
                // if I don't include {children} in CategoryLink definition
                // then whatever is here (in this case, {category.name} won't be rendered)
                // it will be hard to spot though, because it won't return an error!
            ))}
        </nav>
  );
};

export default NavBar;
