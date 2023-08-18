import actionType from "../action/actionType";
const initState = {
  posts: [],
  msg: "",
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_POSTS:
      return {
        ...state,
        posts: action.posts || [],
        msg: action.msg || "",
      };

    default:
      return state;
  }
};
