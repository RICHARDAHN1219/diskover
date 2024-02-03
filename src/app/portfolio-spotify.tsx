"use client";

import Image from "next/image";
import { getUserImage, getUserName, getUserSpotify } from "./lib/user-getter";
import React from "react";
import Link from "next/link";

export function SpotifyButton({ userid }: { userid: string }) {
  const spotify_icon = getUserSpotify("");

  /* return <>
         <Image width={200} height={200} src={getUserImage(userid)} alt="Profile photo of user" className = "rounded" />
         <p>{getUserName(userid)}</p>
     </>;*/
  let style = {
    topright: {
      position: "absolute" as const,
      top: "34vw",
      right: "10vw",
    },
  };

  return (
    <div style={style.topright}>
      <Link href={spotify_icon}>
        <Image width={40} height={40} src="/spotify.svg" alt="Spotify Icon" />
      </Link>
    </div>
  );
}
