import { getSubRedditPost, getComments } from "../api/api";
import { createSlice , createSelector, createAsyncThunk} from "@reduxjs/toolkit";     


const initialState = {
    posts :[],
    isLoading: false,
    error: false,
    setSearchTerm: '',
    selectedReddit: 'r/premierleague'
}
const redditSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
   setPosts(state,action) {
    state.posts = action.payload;
   },
   startGetPosts(state){
    state.isLoading = true;
    state.error = false;

   },
   getPostSuccess(state,action){
    state.isLoading = false;
    state.error = false;
    state.posts = action.payload;
   },
   getPostFailure(state){
    state.isLoading = false;
    state.error = true;

   },
   setSearchTerm(state,action){
    state.setSearchTerm = action.payload;

   },
   setSelectedSubreddit(state,action){
    state.setSearchTerm = '';
    state.selectedReddit = action.payload;
   },
   toggleShowComment(state,action){
   state.posts[action.payload].toggleShowComment =!state.posts[action.payload].toggleShowComment;
   },
   // if we are toggling comments dont fetch comments
   startGetComments(state,action){
    state.posts[action.payload].toggleShowComment = !state.posts[action.payload].toggleShowComment
    if(!state.posts[action.payload.toggleShowComment]){
        return;
    } state.posts[action.payload].loadingComments = true;
       state.posts[action.payload].error = false;
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
setSelectedSubreddit,
toggleShowComment,
startGetComments,
getCommentsSuccess,
getCommentsFailure} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchRedditPost = (subreddit) => async (dispatch) =>{
    try {
        dispatch(startGetPosts());
        const posts = await getSubRedditPost(subreddit);
        const postsWithMetaData = posts.map((post) => ({
            ...posts,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false,
        }));
        dispatch(getPostFailure())

    } catch (error) {
        dispatch(getPostFailure());
    }
};

export const fetchComments = createAsyncThunk((permalink, index) => async (dispatch) =>{
  try {
    dispatch(startGetComments(index));
    const comments = await getComments(permalink);
    dispatch(getCommentsSuccess({index, comments}));

  } catch (error) {
    dispatch(getCommentsFailure());
  }
})

const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.setSearchTerm;

export const selectSelectedSubreddit = (state) => state.reddit.selectedReddit;

export const selectFilteredPost = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) =>{
    if (searchTerm !== ''){
      return posts.filter((post) => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    }
    return posts;
  }
);
