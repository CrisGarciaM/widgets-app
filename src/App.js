import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

const App = () => {
  return (
    <div>
      <Accordion items={items} />
      <Search />
    </div>
  );
};

export default App;
