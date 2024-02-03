"use client";

import React from "react";
import {getPosts} from "@/app/lib/user-getter";

function FeedItem({userId, url}: { userId: string, url: string }) {
    return <div style={{height: '200px', width: '100px', margin: '2em', backgroundColor: 'red'}}>Hello</div>;
}

export default function Feed() {
    const firstBatch = getPosts(10);


    return <>
        {firstBatch.map(eachPost => <FeedItem userId={eachPost.userId} url={eachPost.url}/>)}
    </>;
}
