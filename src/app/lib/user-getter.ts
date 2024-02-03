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
    return "Richard Ahn";
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
    return "Known for his exceptional skills as a multi-instrumentalist, Richard not only excels in playing traditional instruments but also embraces cutting-edge technologies to produce innovative sounds. His commitment to pushing musical boundaries has earned him acclaim from both critics and fans alike, establishing him as a trailblazer in the contemporary music scene. Beyond his technical prowess, Richard's lyrical compositions delve into the human experience, exploring themes of love, introspection, and societal observations. His poetic and evocative lyrics have the power to transport listeners to different emotional landscapes, creating a profound connection between the artist and the audience.";
}

function getUserSkills(userid: string): string[] {
    //TODO: Implement this function (description)
    return ["Viola", "Art", "Design", "CSS"];
}

function getUserUpcomingEvents(userid: string): string[] {
    //TODO: Implement this function (description)
    return ["Live Tour"];
}

function getUserSpotify(userid: string): string {
    return "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4";
}

export {getUserImage, getUserName, getUserAge, getUserTitle, getUserSkills, getUserLocation, getUserBio, 
    getUserCompany, getUserPosts, getPosts, getUserUpcomingEvents, getUserSpotify}
