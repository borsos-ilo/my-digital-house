// components/NavBar/NavBar.js
import { useQuery, gql } from '@apollo/client';
import CategoryButton from './CategoryButton';
import React, { useState, useEffect } from 'react';
import { GET_CATEGORIES, CategoriesData, CategoriesError } from '@/lib/queries/GetCategories';

type NavBarProps = {
    onCategorySelect: (id: string) => void;
    className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ onCategorySelect }) => {
    

    const { loading, error, data } = useQuery<CategoriesData, CategoriesError>(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <nav>
            {data && data.categories.nodes
            .filter(category => category.name!=="Uncategorized")
            .map((category, index) => (
                <CategoryButton key={category.id} position={index} onClick={() => onCategorySelect(category.id)} >
                    {category.name}
                </CategoryButton>
            ))}
        </nav>
    );
};

export default NavBar;
