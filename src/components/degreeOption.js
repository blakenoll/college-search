import React from 'react';

function DegreeOptions({options}) {
  return (options.map((o) => (
   <option value={o}>{o}</option>
  )))
  
}

export default DegreeOptions

