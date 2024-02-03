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

function getUserAge(userid: string): string {
    // TODO: Implement this function
    return "";
}

function getUserTitle(userid: string): string {
    // TODO: Implement this function
    return "";
}

function getUserLocation(userid: string): string {
    // TODO: Implement this function
    return "";
}

function getUserCompany(userid: string): string {
    // TODO: Implement this function
    return "";
}

function getUserBio(userid: string): string {
    //TODO: Implement this function (description)
    return "";
}

function getUserSkills(userid: string): string {
    //TODO: Implement this function (description)
    return "";
}

export {getUserImage, getUserName, getUserAge, getUserTitle, getUserSkills, getUserLocation, getUserBio, 
        getUserCompany, getUserPosts, getPosts}
