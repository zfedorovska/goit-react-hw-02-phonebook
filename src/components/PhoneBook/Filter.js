import React from "react";
import { nanoid } from 'nanoid'
import s from './PhoneBook.module.css';

let filterId = nanoid(); 
const Filter = ({ value, onChange }) => (
    
    <div className={s.filter}>
        <label className={s.label} htmlFor={filterId}>Filter by name</label>
        <input
            type="text"
            id={filterId}
            className={s.input}
            value={value}
            onChange={onChange} />
    </div>
);

export default Filter;