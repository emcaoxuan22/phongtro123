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
