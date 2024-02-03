"use client";

import Image from "next/image";
import { getUserImage, getUserName } from "./lib/user-getter";
import React from "react";
import Link from "next/link";
import { Portfolio } from "./portfolio";

export function PortfolioProfilePhoto({
  userid,
  isOnProfile,
}: {
  userid: string;
  isOnProfile?: boolean;
}) {
  isOnProfile ||= false;

  /* return <>
         <Image width={200} height={200} src={getUserImage(userid)} alt="Profile photo of user" className = "rounded" />
         <p>{getUserName(userid)}</p>
     </>;*/
    let style = {
        container: {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center' as const,
            margin: isOnProfile ? '20px' : '20px',
            border: isOnProfile ? 'none' : 'none',
            padding: isOnProfile ? '10px' : '10px',
            borderRadius: isOnProfile ? '8px' : '10px',
        },
        profile:
        {
            textAlign: 'left' as const,
            margin: '10px'
        },
        profileOnProfile: {
            textAlign: 'center' as const,
            margin: '20px',
            border: 'none',
            padding: '10px',
            borderRadius: '8px',
        },
        paragraph: {
           // marginTop: '10px',
            marginLeft: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'Calibri',
        },
        roundedImage: {
            borderRadius: '50%',
        }
    };

    return (
        <>
        {isOnProfile === false && (
        //<Link href="./portfolio">
        <div style={{...style.container, ...isOnProfile ? style["profileOnProfile"] : style.profile}}>
          {  
            <Link href="./portfolio">
            <>
            <Image width={50} height={50} src={getUserImage(userid)} alt="Profile photo of user" style={style.roundedImage} />
            <p style={style.paragraph}>{getUserName(userid)}</p>
            </>
            </Link>
            } 
        </div>
        //</Link>
    )}
    {isOnProfile === true && (
        <div style={{...style.container, ...isOnProfile ? style["profileOnProfile"] : style.profile}}>
          {  
            <>
              <Image
                width={50}
                height={50}
                src={getUserImage(userid)}
                alt="Profile photo of user"
                style={style.roundedImage}
              />
              <p style={style.paragraph}>{getUserName(userid)}</p>
            </>
          }
        </div>
      )}
    </>
  );
}
