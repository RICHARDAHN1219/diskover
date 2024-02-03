import React from "react";
import {PortfolioItem} from "./portfolio-item";
import {PortfolioProfilePhoto} from "./portfolio-profile-photo";
import {getUserPosts} from "@/app/lib/user-getter";


function Portfolio({userid}: { userid: string }) {
    // TODO: implement styling and decide on other items to include in the portfolio

    return (
        <>
            <PortfolioProfilePhoto userid={userid}/>
            {getUserPosts(userid).map(postURL => <PortfolioItem url={postURL}/>)}

            <></>
        </>
    );
}

export {Portfolio};
