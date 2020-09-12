import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import App from './App';

Amplify.configure(aws_exports);

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);

