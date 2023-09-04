import actionType from "../action/actionType";
const initState = {
  posts: [],
  msg: "",
  count: 0,
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_POSTS:
    case actionType.GET_POSTS_HOME_PAGE_LIMIT:
      console.log("dsfsad", action.type);
      console.log("data", action.posts);
      return {
        ...state,
        posts: action.posts || [],
        msg: action.msg || "",
        count: action.count || 0,
      };

    default:
      return state;
  }
};
