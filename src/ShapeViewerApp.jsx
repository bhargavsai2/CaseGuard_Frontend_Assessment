import React, { useState, useCallback } from 'react';
import { ShapeFileParser } from './shapeFileParser';
import { ShapeRenderer } from './component/ShapeRenderer';
import './ShapeViewerApp.css';

function ShapeViewerApp() {
  const [shapes, setShapes] = useState([]);
  const [fileName, setFileName] = useState('');

  const handleFileOpen = useCallback((event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target.result;
          const parsedShapes = ShapeFileParser.parseShapeFile(content);
          //console.log(parsedShapes);
          setShapes(parsedShapes);
          setFileName(file.name);
        } catch (error) {
          console.error('Error parsing shape file', error);
          alert('Error parsing shape file. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  }, []);

  const updateShape = (index, updatedShape) => {
    const newShapes = [...shapes];
    newShapes[index] = { ...newShapes[index], ...updatedShape };
    setShapes(newShapes);
  };

  return (
    <>
      <div className="top-toolbar">
        <span>Shape Viewer</span>
        <button onClick={() => document.getElementById('fileInput').click()}>
          {fileName ? `${fileName}` : 'Open Shape File'}
        </button>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileOpen}
        />
      </div>
      <div className="app-body">
        <div className="left-menu">
        <input
          type="file"
          accept=".shapefile"
          onChange={handleFileOpen}
          style={{ display: 'none' }}
          id="fileInput"
        />
      <button onClick={() => document.getElementById('fileInput').click()}>
        Open Shape File
      </button>

      {shapes.length>0 && (
        <>
      <h3>Settings</h3>
          {shapes.map((shape, index) => (
            <div key={index} className="shape-item">
              <p>Type: {shape.type}</p>
              <button onClick={() => updateShape(index, { rotationAngle: (shape.rotationAngle || 0) + 15 })}>
                Rotate +15°
              </button>
            </div>
          ))}
          </>
        )};
        </div>
        <div className="shape-viewport">
          <ShapeRenderer shapes={shapes} />
        </div>
      </div>
    </>
  );
}

export default ShapeViewerApp;
