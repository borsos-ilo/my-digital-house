// components/NavBar/CategoryButton.tsx
import React, { ReactNode, useState, useEffect } from 'react';

// we define type: It accepts anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
type CategoryButtonProps = {
    // if CategoryButton was taking more props, we'd need to add all of them here and define their type
    children: ReactNode;
    onClick: () => void;
    className?: string;
    position: number;
};


// The component is defined as a functional component with the props typed according to CategoryButtonProps. 
// By using React.FC<CategoryButtonProps>, you are using the generic FC (Functional Component) type from React, 
// which *automatically includes children* even though we're explicitly defining it here for clarity and to show 
// how you might expand this type with more props in the future.
const CategoryButton: React.FC<CategoryButtonProps> = ({ children, onClick, className, position }) => {
    const colors: string[] = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500', 'text-cyan-500', 'text-grey-500'];
    const [color, setColor] = useState<number>(position)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setColor(currentColor => (currentColor + 1) % colors.length);
        }, 3000); // Change color every 5 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);
    return (
        <button onClick={onClick} className={`p-4 hover:underline ${colors[color]} decoration-cyan-300 font-sofia`}>
            {children}
        </button>
    );
};

export default CategoryButton;
