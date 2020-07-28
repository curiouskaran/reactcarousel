import React , { Children, useState, useEffect} from 'react';

const SlideShow = (props) => {
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(Children.count(props.children));

  const showNext = () => {
    setCurrent((prevValue) => {
      return prevValue + 1 === total ?  0 : prevValue + 1
    });
  }
  
  useEffect(() => {
    const interval = setInterval(showNext, 3000);
    return () => clearInterval(interval);
  },[])

  const bullets = Array(total).fill('○');
  const {children} = props;
  bullets[current] = '⚫';

  return(
    <div className="slideshow">
      <div>{bullets}</div>
      {Children.toArray(children)[current]}
    </div>
  );
}

export default SlideShow;