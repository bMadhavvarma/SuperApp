import React, { useState, useEffect } from 'react';
import styles from './TextArea.module.css'; // Ensure this path is correct

function TextArea() {
    // Initialize text state with value from localStorage, or default to an empty string if no value exists
    const [text, setText] = useState(() => {
        return JSON.parse(window.localStorage.getItem("text")) || "";
    });

    // Save text to localStorage whenever the text state changes
    useEffect(() => {
        window.localStorage.setItem("text", JSON.stringify(text));
    }, [text]);

    const handleChange = (e) => {
        setText(e.target.value); // Update text state with the current value of textarea
    };

    return (
        <div className={styles.textAreaContainer}>
            <p style={{ color: "black", fontSize: "2rem", fontWeight: "600" }}>All Notes</p>
            <textarea 
                value={text} 
                onChange={handleChange}
                placeholder="Write your notes here..."
            />
        </div>
    );
}

export default TextArea;
