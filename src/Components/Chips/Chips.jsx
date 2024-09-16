import React from 'react';
import styles from './Chips.module.css'
function Chips({ category, categoriesList, setCategories }) {

    const removeCategory = (value) => {
        const updatedCategories = categoriesList.filter((item) => item !== value);
        setCategories(updatedCategories);
    };

    return (
        <div className={styles.list}>
        <div className={styles.container}>
            {category}
            <button onClick={() => removeCategory(category)} style={{ marginLeft: '10px',background:"#148A08",border:"none"}}>
                x
            </button>
        </div>
        </div>
    );
}

export default Chips;
