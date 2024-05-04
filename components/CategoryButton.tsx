// components/NavBar/CategoryButton.tsx
import React, { ReactNode, useState, useEffect } from 'react';

// we define type: It accepts anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
type CategoryButtonProps = {
    // if CategoryButton was taking more props, we'd need to add all of them here and define their type
    children: ReactNode;
    onClick: () => void;
    className?: string;
    position: number;
    isCategorySelected: boolean;
};


// The component is defined as a functional component with the props typed according to CategoryButtonProps. 
// By using React.FC<CategoryButtonProps>, you are using the generic FC (Functional Component) type from React, 
// which *automatically includes children* even though we're explicitly defining it here for clarity and to show 
// how you might expand this type with more props in the future.
const CategoryButton: React.FC<CategoryButtonProps> = ({ children, onClick,  position, isCategorySelected }) => {
    const colors: string[] = ['text-red-500', 'text-amber-500', 'text-green-500', 'text-cyan-500', 'text-indigo-500', 'text-pink-500', 'text-zinc-500'];
    const decorationColors: string[] = ['decoration-red-200', 'decoration-amber-200', 'decoration-green-200', 'decoration-cyan-200', 'decoration-indigo-200', 'decoration-pink-200', 'decoration-zinc-200'];
    const [color, setColor] = useState<number>(position)
    const selectedClass = isCategorySelected ? "bg-gray-100/50" : "";
    useEffect(() => {
        console.log('useEffect start')
        //setInterval is a standard JS function provided by Web API
        // first parameter of the setInterval function is what we want to do every X miliseconds
        // second is how much time we want to wait between doing the thing
        const intervalId = setInterval(() => {
            setColor(currentColor => (currentColor + 1) % colors.length);
            // whatever the name passed to setColor be (e.g. 'hello'), it would always mean component's current state
            // Therefore I don't need to declare an additional variable, it's just... how it's called?
            // alternative that also works:
            // setColor(currentColor => (currentColor + 1) % colors.length);
        }, 1000); // Change color every second

        return () =>{  
            console.log('useEffect clean-up')
            clearInterval(intervalId)
        }; // Clean up the interval on component unmount
    // dependency array is empty, which means that this effect 
    }, []);
    return (
        <button onClick={onClick} 
        className={`p-2 hover:underline text-lg rounded-full  ${colors[color]} ${decorationColors[color]} ${selectedClass} font-mulish font-medium`}>
            {children}
        </button>
    );

};

export default CategoryButton;
