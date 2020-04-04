import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Home from './pages/Home';

const store = configureStore();

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/"><Home/></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
