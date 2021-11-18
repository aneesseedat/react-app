import '../../styles/App.css';
import '../../styles/main-loco.css';
import '../../styles/_headings.scss';

import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Header from '../Header/Header'
import Lerp from '../Lerp/Lerp';
import About from '../About/About';
import FixedElement from '../Fixed-Elements/fixed-elements';

function Bundler() {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
      repeat: false,
      initPosition: {
        x: 0,
        y: 0,
      },
      class: 'is-inview',
    });
  });

  return (
    <div className="App-header">
      <div className="scroll" ref={scrollRef}>
        <Header />
        <Lerp />
        <About />
        <FixedElement/>
      </div>
    </div>
  );
}

export default Bundler;
