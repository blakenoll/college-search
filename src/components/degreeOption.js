import React from 'react';

function Options({options}) {
  return (options.map((o, i) => (
   <option value={i + 1} key={i}>{o}</option>
  )))
  
}

export default Options

