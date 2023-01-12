import React, { useState } from 'react';
import './form.css'

function FormExample() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = event => {
    if (userData.name && userData.email && userData.message) {
    console.log(userData);
    resetForm();
    } else {
    console.log('error');
    }
    event.preventDefault();
  }

  const resetForm = () => {
    setUserData({
      name: '',
      email: '',
      message: '',
    });
  }

  return (
    <div className='form'>
      <h1>Forms with objects</h1>
      <p>This is me playing around with forms and storing user-entered data. This form will not allow you to enter blanks as that would cause a memory leak (not good).</p>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={userData.name} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} value={userData.email} />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" onChange={handleChange} value={userData.message} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default FormExample;