import React, { Suspense } from 'react'
import { HashRouter } from "react-router-dom";
import Routes from 'ROOT/router'
import './App.css';

export default () => (
  <Suspense fallback={<div>Loading... </div>}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Suspense>
)
