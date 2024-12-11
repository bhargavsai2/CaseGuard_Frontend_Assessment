import React from 'react';

export const ShapeRenderer = ({ shapes }) => {
  const renderShape = (shape, index) => {
  
    /*console.group(`Rendering Shape ${index}`);
    console.log('Shape Details:', shape);*/

    // Base style for shape position & rotation
    const baseStyle = {
      position: 'absolute',
      left: `${shape.x}px`,
      top: `${shape.y}px`,
      transform: `rotate(${shape.rotationAngle || 0}deg)`,
      transformOrigin: 'center',
    };

    switch (shape.type) {
      case 'Polygon':
        if (shape.points && shape.points.length > 2) {
          // Calculate bounding box to set SVG viewBox
          const xs = shape.points.map(p => p.x);
          const ys = shape.points.map(p => p.y);
          const minX = Math.min(...xs);
          const minY = Math.min(...ys);
          const maxX = Math.max(...xs);
          const maxY = Math.max(...ys);
          const width = maxX - minX;
          const height = maxY - minY;

          const adjustedPoints = shape.points.map(p => ({
            x: p.x - minX,
            y: p.y - minY
          }));

          /*console.log('Polygon Points:', shape.points);
          console.log('Adjusted Points:', adjustedPoints);
          console.log('Bounding Box:', { minX, minY, maxX, maxY, width, height });*/

          const pointsString = adjustedPoints.map(p => `${p.x},${p.y}`).join(' ');

          console.groupEnd();

          return (
            <svg 
              key={index} 
              style={{
                ...baseStyle, 
                width: `${width}px`, 
                height: `${height}px`, 
                position: 'absolute'
              }}
              viewBox={`0 0 ${width} ${height}`}
            >
              <polygon 
                points={pointsString} 
                fill={`#${shape.color}`} 
              />
            </svg>
          );
        }
        console.warn('Invalid polygon points');
        console.groupEnd();
        return null;

      case 'Rectangle':
        return (
          <div
            key={index}
            style={{
              ...baseStyle,
              width: `${shape.width}px`,
              height: `${shape.height}px`,
              backgroundColor: `#${shape.color}`,
            }}
          />
        );
      case 'Triangle':
        if (shape.points) {
          const [p1, p2, p3] = shape.points;
          const path = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} Z`;
          return (
            <svg 
              key={index} 
              style={{
                ...baseStyle, 
                width: '100%', 
                height: '100%', 
                position: 'absolute'
              }}
              viewBox={`0 0 ${Math.max(p1.x, p2.x, p3.x)} ${Math.max(p1.y, p2.y, p3.y)}`}
            >
              <path d={path} fill={`#${shape.color}`} />
            </svg>
          );
        }
        return null;
      default:
        console.groupEnd();
        return null;
    }
  };

  return <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    {shapes.map(renderShape)}
  </div>;
};