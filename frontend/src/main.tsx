import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage.tsx';
import ProductPage from './pages/ProductPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/:slug" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//     </Routes>
//   </BrowserRouter>
// );