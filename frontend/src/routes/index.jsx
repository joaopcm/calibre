import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={props => (<h1 {...props}>Hello world</h1>)} />
    </Switch>
  );
};