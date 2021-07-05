import React from 'react';
import Accordion from './components/Accordion';
import { accordionData, dropdownData } from './utils/dummyData';

const App = () => {
  return (
    <div>
      <h1>Ajay Koli - Task - 05-07-2021</h1>
      <div className="accordion">
        {accordionData.map((accordion, index) => (
          <Accordion title={accordion.title} data={dropdownData[index]} />
        ))}
      </div>
    </div>
  );
};

export default App;