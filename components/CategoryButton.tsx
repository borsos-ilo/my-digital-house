// components/NavBar/CategoryButton.tsx
import React, { ReactNode } from 'react';

// we define type: It accepts anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
type CategoryButtonProps = {
    // if CategoryButton was taking more props, we'd need to add all of them here and define their type
    children: ReactNode;
};


// The component is defined as a functional component with the props typed according to CategoryButtonProps. 
// By using React.FC<CategoryButtonProps>, you are using the generic FC (Functional Component) type from React, 
// which *automatically includes children* even though we're explicitly defining it here for clarity and to show 
// how you might expand this type with more props in the future.
const CategoryButton: React.FC<CategoryButtonProps> = ({ children }) => {
    return (
        <button>
            {children}
        </button>
    );
};

export default CategoryButton;
