import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.firstName) {
      newErrors.firstName = 'Please enter your first name.';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Please enter your last name.';
    }
    if (!formData.email) {
      newErrors.email = 'Please enter your email.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.password) {
      newErrors.password = 'Please enter your password.';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long, include uppercase letters, numbers, and special characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      navigate('/Login');
    }
  };

  return (
    <div>
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">Sign up</h1>
          <p className="text-sm">Sign up to create your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-field">
              <label className="form-label">First Name</label>
              <input
                name="firstName"
                placeholder="Type here"
                type="text"
                className="input max-w-full"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
            </div>
            <div className="form-field">
              <label className="form-label">Last Name</label>
              <input
                name="lastName"
                placeholder="Type here"
                type="text"
                className="input max-w-full"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
            </div>
            <div className="form-field">
              <label className="form-label">Email address</label>
              <input
                name="email"
                placeholder="Type here"
                type="email"
                className="input max-w-full"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            <div className="form-field">
              <label className="form-label">Password</label>
              <div className="form-control">
                <input
                  name="password"
                  placeholder="Type here"
                  type="password"
                  className="input max-w-full"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <span className="text-red-500">{errors.password}</span>}
              </div>
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button type="submit" className="btn btn-primary w-full">Sign up</button>
              </div>
            </div>
            <div className="form-field">
              <div className="form-control justify-center">
                <Link className="link link-underline-hover link-primary text-sm" to='/Login'>
                  Account already exists? Click here.
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
