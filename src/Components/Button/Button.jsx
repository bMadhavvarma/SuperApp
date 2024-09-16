import React from 'react';
import styles from './Button.module.css';

function Button() {
  return (
    <div>
      <button type="submit" className={styles.but}>SIGN UP</button>  {/* Submit the form */}
    </div>
  );
}

export default Button;
