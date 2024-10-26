import React from 'react';
import '../App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import TransactionHistory from './TransactionHistory';

function Converter() {
  return (
    <div className="converter">
      <Header />
      <Dashboard />
      {/* Aquí va la lógica y estructura de tu componente */}
      <TransactionHistory />
    </div>
  );
}

export default Converter;
