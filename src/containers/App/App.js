import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Page from '../Page/Page';
import Layout from '../../components/Layout/Layout';
import Edit from '../Edit/Edit';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/pages/home" />} />
          <Route path="/pages/:page" exact component={Page} />
          <Route path="/edit" exact component={Edit} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
