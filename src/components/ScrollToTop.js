import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState('false');

  const toggleVisibility =() => {
    if (window.pageYOffset > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  useEffect(() => {
  
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  });

 

  const scrollToTop =() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if(visible) {
       return   <button className="to-top-btn" onClick={() => scrollToTop}>
          <i className="fa-solid fa-chevron-up"></i>
        </button>
  }
}

export default ScrollToTop;
