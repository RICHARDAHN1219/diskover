"use client";

import React from "react";
import { PortfolioItem } from "./portfolio-item";
import { PortfolioProfilePhoto } from "./portfolio-profile-photo";
import { getUserPosts } from "@/app/lib/user-getter";
import { PortfolioProfileSkills } from "./portfolio-profile-skills";
import { PortfolioProfileHeader } from "./portfolio-profile-header";
import { SelfProfilePhoto } from "./profile-photo-self";
import { SpotifyButton } from "./portfolio-spotify";

export function Portfolio({ userid }: { userid: string }) {
  // TODO: implement styling and decide on other items to include in the portfolio
  //<PortfolioProfilePhoto userid={userid}/>
  return (
    <>
      <SelfProfilePhoto userid={userid} />
      <PortfolioProfilePhoto userid={userid} />
      {getUserPosts(userid).map((postURL) => (
        <PortfolioItem url={postURL}  width='90vw'/>
      ))}
      <PortfolioProfileHeader userid={userid} />
      <PortfolioProfileSkills userid={userid} />
      <SpotifyButton userid={""} />
    </>
  );
}

//export {Portfolio};
