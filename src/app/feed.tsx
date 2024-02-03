"use client";
import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { getPosts } from "@/app/lib/user-getter";
import "./carousel.scss"
import {PortfolioItem} from "@/app/portfolio-item";
import {PortfolioProfilePhoto} from "@/app/portfolio-profile-photo";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SwipeIcon from "@mui/icons-material/Swipe";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import {position} from "stylis";
import {black} from "next/dist/lib/picocolors";

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: '100vw', position:'absolute', bottom:'0'}}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{backgroundColor: 'rgb(255,253,208,1)'}}
            >
                <BottomNavigationAction label="Profile" icon={<AccountBoxIcon />} />
                <BottomNavigationAction label="Explore" icon={<SwipeIcon />} />
                <BottomNavigationAction label="Messages" icon={<MessageIcon />} />
            </BottomNavigation>
        </Box>
    );
}



export function Feed() {
  const [current, setCurrent] = useState<number>(0);

  const slides = getPosts(10);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current => ((current + 1) % length));
  };

  const prevSlide = () => {
      setCurrent(current => ((current - 1) % length));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
      <section className="slider">
          <h1 className={'feed-header'} style={{position: 'absolute', top: '0', padding: '1em', width: '100vw', textAlign: 'center'}}>DisKover</h1>


        <FaArrowAltCircleLeft className="left-arrow arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow arrow" onClick={nextSlide} />

        {slides.map((slide, index) =>
            <div
                className={index === current ? "slide active" : "slide"}
                key={index}
            >
              <PortfolioItem url={slide.url} width={"80vw"}>
                <PortfolioProfilePhoto userid={""}/>
              </PortfolioItem>
            </div>
        )}
          <SimpleBottomNavigation ></SimpleBottomNavigation>
      </section>
  );
};