import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Button, Row, Col } from '@douyinfe/semi-ui';
import { IconLanguage } from '@douyinfe/semi-icons';
import Home from './pages/Home';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
