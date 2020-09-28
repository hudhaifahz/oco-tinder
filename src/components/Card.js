import React from "react";
import { string, array } from "prop-types";
import { animated, interpolate } from "react-spring/hooks";

const Card = ({ i, x, y, rot, scale, trans, bind, data, liked }) => {
  const { name, text, pics } = data[i];

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <div style={{ display: i < 1 ? "block" : "none", boxShadow: 'none', backgroundColor: 'white'}}>
        <h3 style={{textAlign: 'center'}}>LIKED FOODS</h3>
        {(i < 1) ?
        liked[liked.length-2] ?
        liked[liked.length-2].map(food => <h4 style={{textAlign:"center"}}>{food}</h4>) : 
        <h4 style={{textAlign:"center"}}>{liked[0]}</h4> :
        null}
      </div>
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
          display: i < 1 ? "none" : "block", 
          backgroundColor: i < 1 ? '#6ac393' : 'white'
        }}
      >
        <div className='card' >
          {/* <Carousel> */}
            {pics.map((pic, index) => (
              <img src={pic} key={index} alt="profilePicture" />
            ))}
          {/* </Carousel> */}
            <h2>{data.length-(i)}/{data.length-1}</h2>
          <h2>{name},</h2>
          <h5>{text}</h5>
        </div>
      </animated.div>
    </animated.div>
  );
};

Card.propTypes = {
  name: string,
  text: string,
  pics: array
};

export default Card;
