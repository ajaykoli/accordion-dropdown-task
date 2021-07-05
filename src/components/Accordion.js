import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDropdownValueRequest } from '../reducers/dropdown.reducer';
import Dropdown from './Dropdown';

const Accordion = (props) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const title = props.title;
  const dropdownData = props.data;

  const handleDropdownChange = (value, field) => {
    dispatch(setDropdownValueRequest({[field]: value}));
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
        <Dropdown data={dropdownData} handleChange={(value, field) => handleDropdownChange(value, field)} />
      </div>}
    </div>
  );
};

export default Accordion;