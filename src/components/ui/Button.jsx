import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, to, variant = 'primary', size = 'default', className = '', onClick, type = 'button' }) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
