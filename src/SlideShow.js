import React , { Children, useState, useEffect} from 'react';

const SlideShow = (props) => {
  const [current, setCurrent] = useState(0);
  const total = Children.count(props.children);

  const showNext = () => {
    setCurrent((prevValue) => {
      return prevValue + 1 === total ?  0 : prevValue + 1
    });
  }
  
  useEffect(() => {
    const interval = setInterval(showNext, 3000);
    return () => clearInterval(interval);
  },[])

  const bullet = <div className="bullet-empty"></div>;
  const bullets = Array(total).fill(bullet);
  bullets[current] = <div className="bullet-filled"></div>;
  
  const {children} = props;
  
  return(
    <div className="slideshow">
      <div className="bullets">{bullets}</div>
      {Children.toArray(children)[current]}
    </div>
  );
}

export default SlideShow;