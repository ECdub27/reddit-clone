import fetchJsonp from "fetch-jsonp";



export const redditRoot = 'https://www.reddit.com';

export const popularFeed = async (popular) =>{
    const response =  await fetch(`${redditRoot}${popular}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}
export const getSubRedditPost =  async (subreddits) =>{
    const response = await fetch(`${redditRoot}${subreddits}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}
export const getSubreddit = async () =>{
    {/*const response = await fetch(`${redditRoot}/subreddits.json`);
    const json = await response.json();
  
    return json.data.children.map((subreddit) => subreddit.data);
*/}
  fetch(`${redditRoot}/subreddits.json`).then((Response) => Response.json()).then((data) => {
    return data.children.map((subreddit) => subreddit.data);
 })

}
export const getComments = async (permalink) =>{
    const response = await fetch(`${redditRoot}${permalink}.json`);
    const json =  await response.json();
    return json[1].data.children.map((subreddit) => subreddit.data );
}