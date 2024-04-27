// components/NavBar/CategoryLink.js
import Link from 'next/link';
import styles from './styles/CategoryButton.module.css'; // CSS module for styling


// This component returns Next.js' Link component accepting certain props and using certain styles.
// I guess I didn't have to create a separate component for it, but it's just for improving the organisation of my code.
const CategoryButton = ({ children, onClick }) => {
    // ooh, it actually takes children as prop. Hmmm. Children is apparently whatever is in the body of the component when called
    // just notifying, that SOMETHING can be in the body of this component
    // note const and CapitalLetters for the component name
    // href is accepted as prop, so in NavBar its value will be passed
    return (
        <button className={styles.categoryLink} onClick={onClick}>
            {children}
        </button>
    );
};

// component must be exported
export default CategoryButton;
