function getUserImage(userid: string): string {
    // TODO: Implement this function
    return "https://source.unsplash.com/random/";
}

function getUserPosts(userid: string): string[] {
    // Get the user's posts
    // TODO: Implement this function
    return Array().fill("https://source.unsplash.com/random/");
}

function getUserName(userid: string): string {
    // TODO: Implement this function
    return "fake name";
}


function getPosts(count: number): { userId: string, url: string }[] {
    return Array(10).fill({userId: "fake", url: "https://source.unsplash.com/random/"});
}

export {getUserImage, getUserName, getUserPosts, getPosts};
