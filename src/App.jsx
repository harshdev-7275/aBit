import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto overflow-x-hidden">
      <Header />
      <div>
        <Hero />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
