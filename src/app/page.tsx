import React from "react";
import {Feed} from "@/app/feed";
import { Portfolio } from "./portfolio";
import {getPosts} from "@/app/lib/user-getter";


export default function Home() {
    return (
        <>
            <Feed />
        </>
    );
    // TODO: replace with your component to test
}
