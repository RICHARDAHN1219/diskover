"use client"

import Image from "next/image";
import { getUserImage, getUserName } from "./lib/user-getter";
import React from 'react';
import Link from 'next/link';
import { Portfolio } from './portfolio';

export function SelfProfilePhoto({ userid, isOnProfile }: { userid: string, isOnProfile?: boolean }) {
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
            border: isOnProfile ? '2px solid #ccc' : 'none',
            padding: isOnProfile ? '10px' : '10px',
            borderRadius: isOnProfile ? '8px' : '10px',
        },
        profile:
        {
            textAlign: 'center' as const,
            margin: '10px'
        },
        profileOnProfile: {
            textAlign: 'center' as const,
            margin: '20px',
            border: '2px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
        },
        paragraph: {
            fontFamily: 'SF',
            marginTop: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
        },
        roundedImage: {
            borderRadius: '50%',
        }
    };

    return (
        
        <div style={{...style.container, ...isOnProfile ? style["profileOnProfile"] : style.profile}}>
          {  isOnProfile == false && (
            //<Link href="/portfolio" >
            <>
            <Link href="/">
                <Image width={70} height={70} src={getUserImage(userid)} alt="Profile photo of user" style={style.roundedImage} />

                <p style={style.paragraph}> {getUserName(userid)} </p>
            </Link></>
            )}

            
            
            
            
        </div>
        
    );
} 
