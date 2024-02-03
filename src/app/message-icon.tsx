"use client"

import Image from "next/image";
import { getMessage} from "./lib/user-getter";
import React from 'react';
import Link from 'next/link';
import { Portfolio } from "./portfolio";

export function MessagePhoto(): JSX.Element {
    //isOnProfile ||= false;

    /* return <>
         <Image width={200} height={200} src={getUserImage(userid)} alt="Profile photo of user" className = "rounded" />
         <p>{getUserName(userid)}</p>
     </>;
    let style = {
        container: {
            display: 'right',
            alignItems: 'right',
            textAlign: 'right' as const,
            margin: '2px',
            border: '2px solid #ccc',
            padding: '10px',
            borderRadius: '10px',
        },
        profile:
        {
            textAlign: 'right' as const,
            margin: '10px'
        },
        profileOnProfile: {
            textAlign: 'right' as const,
            margin: '20px',
            border: '2px solid #ccc',
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
            <Link href="./message">
                <div style={{ ...style.container, ...style.profile }}>
                    <p style={style.paragraph }>{getMessage(userid)}</p>
                </div>
            </Link>
        </>
    );*/
    const dynamicUserId = "123"; // Replace this with your actual logic to get the user ID

    return (
        <Link href="/message">
            <>
                <button
                    style={{
                        border: '2px solid #ccc',
                        background: 'none',
                        cursor: 'pointer',
                        padding: '0',
                        margin: '0',
                    }}
                >
                    {getMessage()} 
                </button>
            </>
        </Link>
    );
    
} 