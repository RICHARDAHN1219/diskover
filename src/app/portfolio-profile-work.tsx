import Image from "next/image";
import { getUserSkills, getUserUpcomingEvents } from "./lib/user-getter";
import styles from "./portfolio-profile-skills.module.css";

//Skills section in the artist full page
export function PortfolioProfileSkills({
  userid,
  isOnProfile,
}: {
  userid: string;
  isOnProfile?: boolean;
}) {
  isOnProfile ||= false;
  const work = getUserSkills(userid);

  return (
    <>
      <h2 className={styles.center}>My Work</h2>

      <ul>
        {work.map((work, index) => (
          <li key={index} className={styles.center}>
            {" "}
            {work}{" "}
          </li>
        ))}
      </ul>
      <div></div>
    </>
  );
}
