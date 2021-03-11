import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
// import Route from './components/Route';
import Header from './components/Header';
import options from './utils/options';
import items from './utils/items';
import './styles/app.css';

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
