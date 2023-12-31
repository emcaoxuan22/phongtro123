import actionType from "./actionType";
import { apiGetPosts, apiGetPostsLimit } from "../../services";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit();
    if (response.data.err === 0) {
      dispatch({
        type: actionType.GET_POSTS,
        posts: response.data.response,
      });
    } else {
      dispatch({
        type: actionType.GET_POSTS,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_POSTS,
      posts: null,
    });
  }
};

export const getPostsHomePageLimit = ({page, ...query}) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(page, query);
    if (response.data.err === 0) {
      dispatch({
        type: actionType.GET_POSTS_HOME_PAGE_LIMIT,
        posts: response.data.response.rows,
        count: response.data.response.count,
      });
    } else {
      dispatch({
        type: actionType.GET_POSTS_HOME_PAGE_LIMIT,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_POSTS_HOME_PAGE_LIMIT,
      posts: null,
    });
  }
};
