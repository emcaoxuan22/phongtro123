import axiosConfig from "../axiosConfig";

export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = axiosConfig({
        method: "get",
        url: "api/v1/post/all",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPostsLimit = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = axiosConfig({
        method: "get",
        url: `api/v1/post/limit`,
        params: {
          page: page,
          ...query,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
