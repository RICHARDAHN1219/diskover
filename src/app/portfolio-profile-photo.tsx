import Image from "next/image";
import {getUserImage, getUserName} from "./lib/user-getter";

export function PortfolioProfilePhoto({userid}: { userid: string }) {


    return <>
        <Image src={getUserImage(userid)} alt="Profile photo of user"/>
        <p>{getUserName(userid)}</p>
    </>;
}
