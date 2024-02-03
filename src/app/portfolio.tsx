import React from "react";
import {PortfolioItem} from "./portfolio-item";
import {PortfolioProfilePhoto} from "./portfolio-profile-photo";
import {getUserPosts} from "@/app/lib/user-getter";
import { PortfolioProfileSkills } from "./portfolio-profile-skills";
import { PortfolioProfileHeader } from "./portfolio-profile-header";


function Portfolio({userid}: { userid: string }) {
    // TODO: implement styling and decide on other items to include in the portfolio

    return (
        <>
            <PortfolioProfilePhoto userid={userid}/>
            {getUserPosts(userid).map(postURL => <PortfolioItem url={postURL}/>)}
            <PortfolioProfileHeader userid = ""/>
            <PortfolioProfileSkills userid = ""/>
        </>
    );
}

export {Portfolio};
