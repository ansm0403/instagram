'use client'

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 576 },
    items: 6
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 4
  }
};

export default function ScrollBar({children} : {children : React.ReactNode}) {
  return (
    <Carousel containerClass = {`w-full flex`} responsive={responsive}>
        {children}
    </Carousel>
  )
}
