

export const redditRoot = 'https://reddit.com';

export const popularFeed = async (popular) =>{
    const response =  await fetch(`${redditRoot}/r/${popular}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}
export const getSubRedditPost =  async (subreddits) =>{
    const response = await fetch(`${redditRoot}/r/${subreddits}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}
export const getSubreddit = async () =>{
    const response = await fetch(`${redditRoot}/r/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data)
}
export const getComments = async (permalink) =>{
    const response = await fetch(`${redditRoot}/r/${permalink}.json`);
    const json =  await response.json();
    return json[1].data.children.map((subreddit) => subreddit.data );
}