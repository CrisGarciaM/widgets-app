import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import '../styles/translate.css';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div className="traslate-container">
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <h3 className="ui header">Output</h3>
      <div>
        <Convert language={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
