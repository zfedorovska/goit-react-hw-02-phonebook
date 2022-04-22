import React from "react";
import { nanoid } from 'nanoid'
import s from './PhoneBook.module.css';
import PropTypes from 'prop-types';

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

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Filter;