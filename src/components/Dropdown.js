import React from 'react';

const Dropdown = (props) => {
  const data = props.data;
  const getOptions = () => {
    const options = (data.options || []).map(o => (
      <option key={o} value={o}> {o}</option>
    ));
    options.unshift(
      <option key="default-key" value=""> -- Select Option --</option>
    );    
    return options;
  }

  return (
    <div className="dropdown-wrapper">
        <select name={data.name} className="dropdown" onChange={(e) => props.handleChange(e.target.value, data.name)}>
          {getOptions()}
        </select>
    </div>
  );
};

export default Dropdown;