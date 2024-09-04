import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import CourseContentProvider from './components/CourseContents/CourseContent'; // Correct path if necessary

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CourseContentProvider>
      <Router>
        <App />
      </Router>
    </CourseContentProvider>
  </StrictMode>
);
