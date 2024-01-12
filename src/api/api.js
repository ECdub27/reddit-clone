import { testIgnore } from "../Util/apiKeys";


//
export const redditRoot = 'https://www.reddit.com/';
export const cors_anywhere =  'https://proxy.cors.sh';
export const popularFeed = async (popular) =>{
    const response =  await fetch(`${redditRoot}${popular}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}
export const getSubRedditPost =  async (subreddits) =>{
    const response = await fetch(`${cors_anywhere}${redditRoot}${subreddits}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}
export const getSubreddit = async () =>{
    
  const response = fetch(`${cors_anywhere}${redditRoot}subreddits.json`, {
    headers: {
        'x-cors-api-key': `${testIgnore}`
    }
  });
const json = await response.json();
return json.data.children.map((subreddit) => subreddit.data);
}
export const getComments = async (permalink) =>{
    const response = await fetch(`${redditRoot}${permalink}.json`);
    const json =  await response.json();
    return json[1].data.children.map((subreddit) => subreddit.data );
}