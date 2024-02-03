"use client";

import Image from "next/image";
import {getUserImage, getUserName} from "./lib/user-getter";
import React from "react";
import Link from "next/link";

export function PortfolioProfilePhoto({
                                          userid,
                                          isOnProfile,
                                      }: {
    userid: string;
    isOnProfile?: boolean;
}) {
    isOnProfile ||= false;

    let style = {
        container: {
            zIndex: "1000",
            display: "flex",
            alignItems: "center",
            textAlign: "center" as const,
            margin: isOnProfile ? "20px" : "20px",
            border: isOnProfile ? "2px solid #ccc" : "none",
            padding: isOnProfile ? "10px" : "10px",
            borderRadius: isOnProfile ? "8px" : "10px",
        },
        profile: {
            textAlign: "center" as const,
            margin: "10px",
        },
        profileOnProfile: {
            textAlign: "center" as const,
            margin: "20px",
            border: "2px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
        },
        paragraph: {
            whiteSpace: "pre-wrap",
            marginTop: "10px",
            marginLeft: "10px",
            fontSize: "26px",
            fontWeight: "bold",
            fontFamily: "Helvetica",
        },
        roundedImage: {
            borderRadius: "50%",
        },
    };

    return (
        <>
            {isOnProfile === false && (
                <Link href="./portfolio">
                    <div
                        style={{
                            ...style.container,
                            ...(isOnProfile ? style["profileOnProfile"] : style.profile),
                        }}
                    >
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
                </Link>
            )}
            {isOnProfile === true && (
                <div
                    style={{
                        ...style.container,
                        ...(isOnProfile ? style["profileOnProfile"] : style.profile),
                    }}
                >
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
