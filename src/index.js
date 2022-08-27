import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Content from './Components/Content';
import Card from './Components/Card';
import data from "./data";
import Footer from './Components/Footer';
// import App from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>

    <div>

    <Header />
    <Content />
    {data.map(item => (
    <Card
      name={item.name}
      description={item.description}
      image={item.image}
    />
    
  ))}
  
  <Footer />
    </div>
      
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
