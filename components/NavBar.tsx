// components/NavBar/NavBar.js
import { useQuery, gql } from '@apollo/client';
import CategoryButton from './CategoryButton';
import React from 'react';
import { GET_CATEGORIES, CategoriesData, CategoriesError } from '@/lib/queries/GetCategories';

interface NavBarProps {
    onCategorySelect: (id: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onCategorySelect }) => {
    const { loading, error, data } = useQuery<CategoriesData, CategoriesError>(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <nav>
            {data && data.categories.nodes.map((category) => (
                <CategoryButton key={category.id} onClick={() => onCategorySelect(category.id)} >
                    {category.name}
                </CategoryButton>
            ))}
        </nav>
    );
};

export default NavBar;
