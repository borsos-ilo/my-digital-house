// components/NavBar/CategoryLink.js
import Link from 'next/link';
import styles from './CategoryLink.module.css'; // CSS module for styling

const CategoryLink = ({ href, children }) => {
    return (
        <Link href={href} className={styles.categoryLink}>
            {children}
        </Link>
    );
};

export default CategoryLink;
