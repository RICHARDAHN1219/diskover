"use client";
import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { getPosts } from "@/app/lib/user-getter";
import styled from "styled-components";
import "./carousel.scss"
import {PortfolioItem} from "@/app/portfolio-item";
import {PortfolioProfilePhoto} from "@/app/portfolio-profile-photo";



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
      </section>
  );
};

const Button = styled.button``;