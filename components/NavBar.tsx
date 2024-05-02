// components/NavBar/NavBar.js
import { useQuery, gql } from '@apollo/client';
import CategoryButton from './CategoryButton';
import React from 'react';
import { GET_CATEGORIES, CategoriesData, CategoriesError } from '@/lib/queries/GetCategories';

type NavBarProps = {
    onCategorySelect: (id: string) => void;
    className?: string;
    selectedCategory: string | null;
}

const NavBar: React.FC<NavBarProps> = ({ onCategorySelect, selectedCategory }) => {
    const { loading, error, data } = useQuery<CategoriesData, CategoriesError>(GET_CATEGORIES);
    console.log("in NavBar: " + selectedCategory)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <nav className='grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 min-h-16 my-5'>
            {data && data.categories.nodes
            .filter(category => category.name!=="Uncategorized")
            .map((category, index) => (
                <CategoryButton 
                key={category.id} 
                position={index} 
                onClick={() => onCategorySelect(category.id)}
                isCategorySelected={selectedCategory===category.id} >
                    {category.name}
                </CategoryButton>
            ))}
        </nav>
    );
};

export default NavBar;
