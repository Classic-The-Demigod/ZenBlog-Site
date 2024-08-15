import React from 'react'
import MainSection from '../components/MainSection';

function Home() {
  return (
    <div>
      <MainSection />
      <a
        href="#"
        class="scroll-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default Home