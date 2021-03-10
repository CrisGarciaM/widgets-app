import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  { title: 'What is react', content: 'React is a Javascript framework' },
  {
    title: 'Why is React',
    content: 'React is a favourite JS library among FrontEnd engineers',
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components',
  },
];

const options = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'A shade of Blue', value: 'blue' },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Translate />
      <Accordion items={items} />
      <Search />
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
