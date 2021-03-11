import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
// import Route from './components/Route';
import Header from './components/Header';
import './styles/app.css';

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
  { label: 'The Color Orange', value: 'orange' },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container segment main-app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Accordion items={items} />
        </Route>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            label="Select a color"
            options={options}
            onSelectedChange={setSelected}
            selected={selected}
          />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
