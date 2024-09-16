import React, { useState } from 'react';

function BlockCard(props) {
    const [isSelected, setIsSelected] = useState(false);

    const addValueToCategory = (value) => {
        // Check if the category is already selected
        const existingValue = props.categoriesList.filter(
            (category) => category === value
        );

        if (!existingValue.length) {
            // Add the category if it's not already in the list
            props.setCategories([...props.categoriesList, value]);
            setIsSelected(true);
        } else {
            // Remove the category if it's already selected
            const updatedCategories = props.categoriesList.filter(item => item !== value);
            props.setCategories(updatedCategories);
            setIsSelected(false);
        }
    };

    return (
        <div
            onClick={() => addValueToCategory(props.genreDetails.id)}
            style={{
                background: props.genreDetails.color,
                color: 'white',
                padding: '6px',
                borderRadius: '12px',
                cursor: 'pointer',
                border: `${isSelected ? "4px solid green" : "4px solid white"}`
            }}
            key={props.key}
        >
            <p style={{ marginBottom: '4px', fontSize: '18px' }}>
                {props.genreDetails.id}
            </p>
            {props.genreDetails.image}
        </div>
    );
}

export default BlockCard;
