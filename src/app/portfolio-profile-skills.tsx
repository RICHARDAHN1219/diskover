import Image from "next/image";
import {getUserSkills, getUserUpcomingEvents} from "./lib/user-getter";

//Skills section in the artist full page
export function PortfolioProfileSkills({userid, isOnProfile}: { userid: string, isOnProfile?: boolean }) {
    isOnProfile ||= false;
    const skills = getUserSkills(userid);
    const events = getUserUpcomingEvents(userid);

    return <>
        <h2>Skills</h2>
        
        <ul>  
            {skills.map((skill, index)=>(<li key={index}> {skill} </li>))}
        </ul>
        <div>
            
        </div>

        <h2>Upcoming Events</h2>
        <ul>  
            {events.map((upcoming, index2)=>(<li key={index2}> {upcoming} </li>))}
        </ul>

           
    </>;
}