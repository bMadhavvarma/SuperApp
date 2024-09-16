import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import styles from './Register.module.css';
import coverimage from '../../../src/assets/image 13.png';
import Button from '../Button/Button';

function Register() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    isAgreed: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    isAgreed: ""
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    let validationErrors = {};

    if (!form.name.trim()) {
      validationErrors.name = 'Name field is required';
    }

    if (!form.username.trim()) {
      validationErrors.username = 'Username field is required';
    }

    if (!form.email.trim()) {
      validationErrors.email = 'Email field is required';
    }

    if (!form.mobile.trim()) {
      validationErrors.mobile = 'Mobile field is required';
    }

    if (!form.isAgreed) {
      validationErrors.isAgreed = 'You must agree to share your data';
    }

    setErrors(validationErrors);

    // If no validation errors, proceed with navigation
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', form);
      localStorage.setItem('registerFormData', JSON.stringify(form));
      navigate('/genre'); // Navigate to Genre page
    }
  }

  return (
    <div className={styles.container}>
      <img src={coverimage} className={styles.image} alt="cover" />
      <div className={styles.BottomDiv}>
        <h1 className={styles.bottomtext}>Discover new things on Superapp</h1>
      </div>
      <div className={styles.superapp}>
        <h1 className={styles.heading}>Super app</h1>
        <p>Create your new account</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputElements}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
            {errors.username && <p className={styles.error}>{errors.username}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}

            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={form.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <p className={styles.error}>{errors.mobile}</p>}

            <div className={styles.checkboxline}>
              <input
                type="checkbox"
                name="isAgreed"
                className={styles.checkbox}
                checked={form.isAgreed}
                onChange={handleChange}
              />
              <p>Share my registration data with Superapp</p>
            </div>
            {errors.isAgreed && <p className={styles.error}>{errors.isAgreed}</p>}

            <Button />  {/* Button triggers form submission */}
            <p className={styles.terms}>
              By clicking on Sign up, you agree to Superapp{' '}
              <span>Terms and Conditions of Use</span>
            </p>
            <p className={styles.terms}>
              To learn more about how Superapp collects, uses, shares, and
              protects your personal data, please read the Superapp{' '}
              <span>Privacy Policy</span>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
