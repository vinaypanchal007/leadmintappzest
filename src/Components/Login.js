import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

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

    if (!formData.email) {
      newErrors.email = 'Please enter your email.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.password) {
      newErrors.password = 'Please enter your password.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login form submitted:', formData);
      navigate('/');
    }
  };

  return (
    <div>
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">Login</h1>
          <p className="text-sm">Login to access your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
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
            <div className="form-field">
              <div className="form-control justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="checkbox" />
                  <label>Remember me</label>
                </div>
                <label className="form-label">
                  <Link to="/forgot-password" className="link link-underline-hover link-primary text-sm">Forgot your password?</Link>
                </label>
              </div>
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button type="submit" className="btn btn-primary w-full">Login</button>
              </div>
            </div>
            <div className="form-field">
              <div className="form-control justify-center">
                <Link to='/Register' className="link link-underline-hover link-primary text-sm">Don't have an account yet? Sign up.</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
