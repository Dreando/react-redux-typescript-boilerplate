import React from 'react';
import {Provider} from "react-redux";
import './App.scss';
import {store} from "./store";
import PostsList from "./components/PostsList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PostsList />
    </Provider>
  );
};

export default App;
