export class ShapeFileParser {
  static parseShapeFile(fileContent) {
      const shapes = [];
      const lines = fileContent.split('\n');
      
      lines.forEach(line => {
          line = line.split('//')[0].trim();
          if (line) {
              const parts = line.split(',').map(p => p.trim().replace(';', ''));
              
              try {
                  switch (parts[0]) {
                      case 'Polygon':
                          const pointCount = (parts.length - 5) / 2;
                          const points = [];
                          
                          /*console.group('Polygon Parsing');
                          console.log('Raw Parts:', parts);
                          console.log('X Base:', parts[1]);
                          console.log('Y Base:', parts[2]);*/
                          
                          for (let i = 0; i < pointCount; i++) {
                              const rawX = parseFloat(parts[4 + i * 2]);
                              const rawY = parseFloat(parts[5 + i * 2]);
                              
                              console.log(`Point ${i}:`, {
                                  rawX, 
                                  rawY, 
                                  parsedX: !isNaN(rawX) ? rawX : null,
                                  parsedY: !isNaN(rawY) ? rawY : null
                              });
                              
                            
                              if (!isNaN(rawX) && !isNaN(rawY)) {
                                  points.push({
                                      x: rawX,
                                      y: rawY
                                  });
                              } else {
                                  console.warn(`Invalid coordinate at point ${i}`);
                              }
                          }
                          
                          /*console.log('Parsed Points:', points);*/
                          console.groupEnd();
                          
                          // Only create shape if have valid points
                          if (points.length > 0) {
                              shapes.push({
                                  type: 'Polygon',
                                  x: parseFloat(parts[1]),
                                  y: parseFloat(parts[2]),
                                  zIndex: parseInt(parts[3]),
                                  points: points,
                                  color: parts[parts.length - 1],
                              });
                          }
                          break;
                      
                      // Keep other shape parsing logic the same
                      case 'Rectangle':
                          shapes.push({
                              type: 'Rectangle',
                              x: parseFloat(parts[1]),
                              y: parseFloat(parts[2]),
                              zIndex: parseInt(parts[3]),
                              width: parseFloat(parts[4]),
                              height: parseFloat(parts[5]),
                              color: parts[6],
                              rotationAngle: 0,
                          });
                          break;
                      
                      case 'Triangle':
                          shapes.push({
                              type: 'Triangle',
                              x: parseFloat(parts[1]),
                              y: parseFloat(parts[2]),
                              zIndex: parseInt(parts[3]),
                              points: [
                                  { x: parseFloat(parts[4]), y: parseFloat(parts[5]) },
                                  { x: parseFloat(parts[6]), y: parseFloat(parts[7]) },
                                  { x: parseFloat(parts[8]), y: parseFloat(parts[9]) },
                              ],
                              color: parts[10],
                              rotationAngle: 0,
                          });
                          break;
                      
                      default:
                          console.warn(`Unsupported shape type: ${parts[0]}`);
                  }
              } catch (error) {
                  console.error(`Error parsing shape: ${line}`, error);
              }
          }
      });
      
      return shapes.sort((a, b) => a.zIndex - b.zIndex);
  }
}