import '../../styles/locomotive-scroll.css'
import '../../styles/main-loco.css';

import React from 'react';

const styles = {
  mainHeader: {
    marginTop: "290px",
    marginLeft: "-600px"
  },
  
  secondaryHeader: {
    marginTop: "2px",
    marginLeft:"-600px"
  }
}

function Header() {
  return (
    <div data-scroll-container>
          <div data-scroll-section>
            <h1
              style={styles.mainHeader}
              data-scroll
              data-scroll-delay="0.10"
              data-scroll-speed="2"
            >
              React
            </h1>
            <h1
              style={styles.secondaryHeader}
              data-scroll
              data-scroll-delay="0.05"
              data-scroll-speed="2"
            >
              Locomotive
            </h1>
            <h1
              style={styles.secondaryHeader}
              data-scroll
              data-scroll-delay="0.025"
              data-scroll-speed="2"
            >
              Scroll
            </h1>
          </div>
        </div>
  );
}

export default Header;
