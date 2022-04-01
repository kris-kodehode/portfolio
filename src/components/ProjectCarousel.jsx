import React from "react"
import { StyledSlider } from "./projectStyles"
import { projectsList } from "./Project"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
    focusOnSelect:true,
    arrows:false,
    variableWidth:true,
    centerPadding: -100,
    centerMode:true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

export default function ProjectCarousel() {

    return (
        <StyledSlider {...settings}>
            {projectsList}
        </StyledSlider>
    )
}