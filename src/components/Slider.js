import React, { useState } from "react";
import useWindowDim from "../hooks/useWindowDim";
import styles from "../styles/slider.module.css";




export const Slider = ({ children }) => {
  const window=useWindowDim();
  // const style=useState();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const halfLength = Math.floor(children.length / 2);

  const incIndex = () => {
    if (activeIndex < Math.floor(children.length / 2)) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const decIndex = () => {
    if (activeIndex > -Math.floor(children.length / 2)) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <React.Fragment>
      
        <div className={`${styles.slider_container}`}>
          <div
            className={styles.slider}
            style={{ transform: `translateX(${ window.width<768?(activeIndex * -30)+'vw':(activeIndex* -200)+'px'})`  }}
          >
            {React.Children.map(children, (child, index) => {
              const shiftedIndex = index - halfLength;
              if (shiftedIndex === activeIndex) {
                return React.cloneElement(child, {
                  classNames: `${styles.slider_item} ${styles.slider_item__active}`,
                });
              } else if (
                shiftedIndex === activeIndex - 1 
              ) {
                return React.cloneElement(child, {
                  classNames: `${styles.slider_item} ${styles.slider_item__nearby}`,
                  callBack:decIndex
                });
              
              } 
              else if (
                shiftedIndex === activeIndex + 1
              ) {
                return React.cloneElement(child, {
                  classNames: `${styles.slider_item} ${styles.slider_item__nearby}`,
                  callBack:incIndex
                });
              
              }
              else {
                return React.cloneElement(child, {
                  classNames: `${styles.slider_item} ${styles.slider_item__hidden}`,
                });
              }
            })}
          </div>
        </div>

        
    </React.Fragment>
  );
};

export const SliderItem = ({ cardProps, classNames,callBack }) => {
  return (
    <div className={`${classNames}`} onClick={callBack}>
      <div className={styles.slider_item__content}>
        <div className={styles.slider_item_content_wrapper}>
          <div className={styles.slider_item__header}>
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Repo Icon"
            />
            <div className={styles.slider_item__name}>
              <p>facebook/</p>
              <p>react</p>
            </div>
          </div>
          <p>
            A declarative, efficient, and flexible JavaScript library for
            building user interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};
