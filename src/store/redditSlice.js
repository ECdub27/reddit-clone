import { getSubRedditPost, getComments } from "../api/api";
import { createSlice , createSelector} from "@reduxjs/toolkit";     
const initialState = {
    posts :[],
    isLoading: false,
    error: false,
    setSearchTerm: '',
    selectedReddit: 'r/premierleague'
}
const redditSlice = createSlice({
  name: 'Reddit Post',
  initialState,
  reducers: {
   setPosts(state,action){
    state.posts = action.payload;
   },
   startGetPosts(state,action){
    state.isLoading = true;
    state.error = false;

   },
   getPostSuccess(state,action){
    state.isLoading = false;
    state.error = false;
    state.posts = action.payload;
   },
   getPostFailure(state,action){
    state.isLoading = false;
    state.error = true;

   },
   setSearchTerm(state,action){
    state.SearchTerm = action.payload;

   },
   setSelectedSearchTerm(state,action){
    state.SearchTerm = '';
    state.selectedReddit = action.payload;
   },
   toggleShowComment(state,action){
   state.posts[action.payload].toggleShowComment =!state.posts[action.payload].toggleShowComment;
   },
   // if we are toggling comments dont fetch comments
   startGetComments(state,action){
    state.posts[action.payload].toggleShowComment = !state.post[action.payload].toggleShowComment
    if(!state.post[action.payload.toggleShowComment]){
        return;
    } state.posts[action.payload].loadingComments = true;
       state.post[action.payload].error = false;
},
  getCommentsSuccess(state,action){
    state.posts[action.payload.index].loadingComments = true;
    state.posts[action.payload].comments = action.payload.comments;
  },
  getCommentsFailure(state,action){
    state.posts[action.payload].loadingComments = false;
    state.posts[action.payload].error = true;
  },
  },
});

export const {setPosts, startGetPosts, getPostSuccess, getPostFailure,
setSearchTerm,
setSelectedSearchTerm,
toggleShowComment,
startGetComments,
getCommentsSuccess,
getCommentsFailure} = redditSlice.actions;

export const fetchRedditPost= (subreddits) = async (dispatch) =>{
    try {
        dispatch(startGetPosts);
        const posts = await getSubRedditPost(subreddits);
        const postsWithMetaData = posts.map((post) => ({
            ...posts,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false,
        }));
        dispatch(getCommentsSuccess)

    } catch (error) {
        dispatch(getPostFailure());
    }
};