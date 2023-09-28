import './App.css';

import React, { useState } from 'react';

import Editor, { Value } from '@react-page/editor';
import '@react-page/editor/lib/index.css';

// The rich text area plugin (Slate)
import slate from '@react-page/plugins-slate';
import '@react-page/plugins-slate/lib/index.css';

// The image display plugin
import image from '@react-page/plugins-image';
import '@react-page/plugins-image/lib/index.css';

function App() {
  const [value, setValue] = useState(null);

  // Define which plugins we want to use.
  const cellPlugins = [slate(), image];

  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
        <p>This is a test page to test the REACT pagre builder</p>
      </div>

      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </>
  );
}

export default App;
