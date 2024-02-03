import Image from "next/image";
import {getUserImage, getUserName} from "./lib/user-getter";

export function PortfolioProfilePhoto({userid, isOnProfile}: { userid: string, isOnProfile?: boolean }) {
    isOnProfile ||= false;

    return <>
        <Image width={200} height={200} src={getUserImage(userid)} alt="Profile photo of user"/>
        <h1>{getUserName(userid)}</h1>
    </>;
}
