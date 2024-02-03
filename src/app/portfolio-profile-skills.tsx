import Image from "next/image";
import {getUserSkills, getUserUpcomingEvents} from "./lib/user-getter";
import styles from "./portfolio-profile-skills.module.css";

//Skills section in the artist full page
export function PortfolioProfileSkills({userid, isOnProfile}: { userid: string, isOnProfile?: boolean }) {
    isOnProfile ||= false;
    const skills = getUserSkills(userid);
    const events = getUserUpcomingEvents(userid);

    return <>
        <h2 className = {styles.center} >Skills</h2>
        
        <ul>  
            {skills.map((skill, index)=>(<li key={index} className = {styles.center}> {skill} </li>))}
        </ul>
        <div>
            
        </div>

        <h2 className = {styles.center}>Upcoming Events</h2>
        <ul>  
            {events.map((upcoming, index2)=>(<li key={index2} className = {styles.center}> {upcoming} </li>))}
        </ul>

           
    </>;
}