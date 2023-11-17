import React, { useState } from 'react';
import './App.css';

function ColorPicker({ colors, onSelect }) {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList} style={{ fontFamily: 'Times New Roman' }}>
        Choose a color
      </button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color, fontFamily: 'Times New Roman' }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <p style={{ fontFamily: 'Times New Roman' }}>
          You have selected the color: {selectedColor}
        </p>
      )}
    </div>
  );
}

function App() {
  const availableColors = [
    '#FF5733', '#33FF57', '#5733FF', '#FFFF33',
    '#33FFFF', '#FF5733', '#33FF57', '#5733FF',
    '#FFFF33', '#33FFFF', '#FF5733', '#33FF57',
    '#5733FF', '#FFFF33', '#33FFFF', '#FF5733'
  ];

  return (
    <div className="app" style={{ backgroundColor: 'peach', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ fontFamily: 'Times New Roman' }}>Color Picker App</h1>
      <ColorPicker colors={availableColors} />
    </div>
  );
}

export default App;
