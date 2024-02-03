import Image from "next/image";
import {getUserName, getUserAge, getUserTitle, getUserLocation, getUserCompany, getUserBio} from "./lib/user-getter";
import styles from "./portfolio-profile-header.module.css";

//Provides core information to also be shown on the main profile image
export function PortfolioProfileHeader({userid, isOnProfile}: { userid: string, isOnProfile?: boolean }) {
    isOnProfile ||= false;
    const age = getUserAge(userid);
    const title = getUserTitle(userid);
    const location = getUserLocation(userid);
    const company = getUserCompany(userid);
    const bio_description = getUserBio(userid)

    return <>
        <p className = {styles.center}>{age} | {title} | {location} | {company}</p>
        <div>
            <h2 className = {styles.center}>About Me:</h2>
            <p className = {styles.center}> {bio_description} </p>
        </div>


        
    </>;
}