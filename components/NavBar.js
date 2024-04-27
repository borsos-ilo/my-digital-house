// components/NavBar/NavBar.js
import { useQuery, gql } from '@apollo/client';
import CategoryLink from './CategoryLink';
import Link from 'next/link';

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

const NavBar = ({ onCategorySelect }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleCategoryClick = (categoryId) => {
    onCategorySelect(categoryId);
};

  return (
    <nav>
            {data.categories.nodes.map((category) => (
                <button onClick={handleCategoryClick}>
                    <CategoryLink key={category.id} href={`/category/${category.slug}`} >
                    {category.name}
                </CategoryLink>
                </button>
            ))}
        </nav>
  );
};

export default NavBar;
