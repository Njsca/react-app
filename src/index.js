import { findAllByTestId } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import App from "./components/app";

const root = ReactDOM.createRoot(document.getElementById('root'));

if (root) {
  root.render(<App/>);
}
