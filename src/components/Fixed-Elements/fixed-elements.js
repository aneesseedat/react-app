import '../../styles/main-loco.css';
import '../../styles/locomotive-scroll.css';

import React from 'react';
import backgroundImage from '../../assets/images/pexels-charles-parker-5847443.jpg';

function FixedElement() {
  return (
    <section class="c-section -fixed" data-scroll-section data-persistent>
      <div id="fixed-elements">
        <div>
          <div>
            <div
              data-scroll
              data-scroll-sticky
              data-scroll-target="#fixed-elements"
            ></div>
          </div>
          <div>
            <div
              class="c-fixed_wrapper"
              data-scroll
              data-scroll-call="dynamicBackground"
              data-scroll-repeat
            >
              <div class="c-fixed_target" id="fixed-target"></div>
              <div
                class="c-fixed"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#fixed-target"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
            </div>
          </div>
        </div>
          </div>
          
          <div className="c-direction-block" id="direction">
          <div >
                                <span style={{color:"white", fontSize:"5rem"}} data-scroll data-scroll-direction="horizontal" data-scroll-speed="8" >
                                    Fixing elements to <span style={{color:"black", fontSize:"5rem"}}>the view port</span>
                                </span>
                            </div>
          </div>
    </section>
  );
}

export default FixedElement;
