
import React from 'react';
import "./app.scss"
import Navbar from './Navbar';
import Test from './Test';
function App() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <div>
        <section>hero</section>
        <section>Parallax</section>
        <section>Service</section>
        <section>Contact</section>
        <section>Portfolio</section>
      </div>
      <Test/>


    </>

  );
};

export default App;
