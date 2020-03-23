// Core
import React from 'react';
// Types
import { InputOnChange } from 'ComponentTypes';
// Styles
import './Input.css';


export interface Props {
  value: string;
  name?: string,
  onChange: InputOnChange;
}

const Input: React.FC<Props> = ({ value = '', name = '', onChange }) => (
  <input type="text" value={value} onChange={onChange} className="Input" name={name}/>
);

export default Input;
