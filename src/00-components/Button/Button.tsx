// Core
import React from 'react';
import { ButtonType, ButtonRef } from 'ComponentTypes';
// Styles
import './Button.css';


interface Props {
  type: ButtonType;
  children: React.ReactNode;
}

const Button = React.forwardRef<ButtonRef, Props>(({ type = 'button', children }, ref) => (
  <button type={type} className="Button" ref={ref}>
    <span>{children}</span>
  </button>
));

export default Button;
