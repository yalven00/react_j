import React from 'react';
import Checkbox from './components/checkbox';

export default function App() {
  return (
    <div>
      <Checkbox title="circle" id="circle" classes="checkbox" />
      <Checkbox title="square" id="square" classes="checkbox" />
      <Checkbox title="red" id="red" classes="checkbox checkbox-red" />
      <Checkbox title="green" id="green" classes="checkbox checkbox-green" />
      <Checkbox title="blue" id="blue" classes="checkbox checkbox-blue" />
      <Checkbox title="yellow" id="yellow" classes="checkbox checkbox-yellow" />
    </div>
  );