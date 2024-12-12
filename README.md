# Shape Viewer Application

## Overview
**Shape Viewer** is a browser-based single-page application that allows users to import a custom file containing two-dimensional shape data and renders the shapes on-screen. This project is designed to showcase efficient shape rendering, support for various shape types, and extensibility for future enhancements.

---

## Assignment Iterations Completed

### 1. User Interface Layout
- Implemented a responsive UI consisting of:
  - **Top Toolbar**: Displays the "Open shape file" button or the name of the currently opened file.
  - **Left Menu**: Includes an "Open shape file" option for file upload.
  - **Shape Viewport**: Dynamically resizes based on the browser window, rendering shapes based on file input.

### 2. Shape File
- Created a custom text-based file format to store shape data.
- Supported shapes: **Rectangle**, **Triangle**.
- Shape attributes: size, position, color, and z-index.

### 3. Shape Rendering
- Implemented rendering logic to draw shapes in the viewport based on data from the shape file.

### 4. Polygon Support
- Extended functionality to support rendering custom polygons defined in the shape file.

### 5. UI Enhancement
- Refined the interface with:
  - Modern layout and styling improvements.
  - Consistent spacing, typography, and a visually appealing color scheme.

---

## Bonus Features Implemented

1. **Shape Rotation**:
   - Added support for specifying and rendering rotated shapes in the shape file.

---

## Instructions
### Running the Application
1. **Clone the Repository or Download Zip**
   ```bash
   git clone https://github.com/bhargavsai2/CaseGuard_Frontend_Assessment.git
   cd CaseGuard_Frontend_Assessment
   ```

2. **Install Dependencies**
   Run the following command to install all required packages:
   ```bash
   npm install
   ```

3. **Start the Development Server**
   To run the application locally:
   ```bash
   npm run dev
   ```
   This will start the development server. Open your browser and navigate to `http://localhost:5173` to use the application.

4. Use the "Open shape file" button to upload a `.shapefile` containing shape data.
3. Shapes will render automatically in the viewport.

### Example Input File
```
// example.shapefile
Rectangle, 10, 10, 0, 50, 50, ff0000; // Red rectangle
Triangle, 100, 100, 1, 60, 80, 0000ff; // Blue triangle
Polygon, 200, 200, 2, [300,300, 350,250, 400,300], 00ff00; // Green polygon
```

### Additional Files
- Example shape files are included in the submission (`src/shapes/example.shapefile` and others).

Here's the updated README with a section for **Further Enhancements and Optimizations**:

---

## Further Enhancements and Optimizations

1. **Performance Optimization**:
   - Implemented **PixiJS** for high-performance rendering, enabling the application to scale to 100,000+ shapes.
   - Leveraged efficient algorithms to minimize rendering overhead and memory consumption.

2. **Dynamic Shape Editing**:
   - Future updates could introduce real-time shape editing tools for resizing, rotating, and recoloring.

3. **Support for Additional File Formats**:
   - Extend compatibility to import/export industry-standard formats (e.g., SVG, JSON).

4. **Advanced Shape Support**:
   - Add support for more complex shapes like circles, ellipses, and Bezier curves.
   - Introduce shape grouping and layering for better organization.

5. **Collaboration Features**:
   - Implement real-time collaboration using WebSockets, allowing multiple users to work on shapes simultaneously.

6. **Enhanced User Experience**:
   - Include animations for transitions and shape manipulations.
   - Add undo/redo functionality for editing.

7. **Error Handling and Validation**:
   - Integrate robust error handling to notify users of file parsing issues or invalid inputs.
   - Include validation for custom shape files to ensure data consistency.

8. **Mobile and Touchscreen Optimization**:
   - Adapt the UI and interactions for touch-based devices, including gesture support for zooming and panning.

---

