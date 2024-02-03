import Image from "next/image";
import {getUserImage, getUserName} from "./lib/user-getter";
import styles from "./portfolio-profile-header.module.css"

export function PortfolioProfilePhoto({userid, isOnProfile}: { userid: string, isOnProfile?: boolean }) {
    isOnProfile ||= false;

    return <div className="centered-image"> 
        <Image width={200} height={200} src={getUserImage(userid)} alt="Profile photo of user"/>
        <h1 className = {styles.center} >{getUserName(userid)}</h1>
    </div>;
}
