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
    return "Richard";
}

function getPosts(count: number): { userId: string, url: string }[] {
    return Array(10).fill({userId: "fake", url: "https://source.unsplash.com/random/"});
}

function getUserAge(userid: string): string {
    // TODO: Implement this function
    return "21";
}

function getUserTitle(userid: string): string {
    // TODO: Implement this function
    return "Musician";
}

function getUserLocation(userid: string): string {
    // TODO: Implement this function
    return "Seattle";
}

function getUserCompany(userid: string): string {
    // TODO: Implement this function
    return "CMU";
}

function getUserBio(userid: string): string {
    //TODO: Implement this function (description)
    //This is the description about the artist more in depth
    return "description";
}

function getUserSkills(userid: string): string[] {
    //TODO: Implement this function (description)
    return ["Viola", "Art", "Design", "CSS"];
}

function getUserUpcomingEvents(userid: string): string[] {
    //TODO: Implement this function (description)
    return ["Live Tour"];
}

export {getUserImage, getUserName, getUserAge, getUserTitle, getUserSkills, getUserLocation, getUserBio, 
    getUserCompany, getUserPosts, getPosts, getUserUpcomingEvents}
