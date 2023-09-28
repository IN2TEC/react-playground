import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

//import Editor, { Value } from '@react-page/editor';
//import '@react-page/editor/lib/index.css';

// The rich text area plugin (Slate)
//import slate from '@react-page/plugins-slate';
//import '@react-page/plugins-slate/lib/index.css';

// The image display plugin
//import image from '@react-page/plugins-image';
//import '@react-page/plugins-image/lib/index.css';

// Define which plugins we want to use.
// const cellPlugins = [slate(), image];

function App() {
  const [value, setValue] = useState(null);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
