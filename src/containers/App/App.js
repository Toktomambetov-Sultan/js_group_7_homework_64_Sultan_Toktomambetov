import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Page from '../Page/Page';
import Layout from '../../components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route to="/" exact render={() => <Redirect to="/pages/home" />} />
        <Route to="/pages/:page" component={Page} />
        <Route to="/edit" exact />
      </Switch>
    </Layout>
  );
}

export default App;
