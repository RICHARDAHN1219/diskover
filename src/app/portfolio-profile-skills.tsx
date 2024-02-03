import Image from "next/image";
import {getUserSkills} from "./lib/user-getter";

export function PortfolioProfileSkills({userid, isOnProfile}: { userid: string, isOnProfile?: boolean }) {
    isOnProfile ||= false;
    const skills = getUserSkills(userid);

    return <>
        <h2>Skills</h2>
        <p>{getUserSkills(userid)}</p>
        <div>
            
        </div>


        
    </>;
}