import axiosConfig from "../axiosConfig";

export const apiGetAreas = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = axiosConfig({
        method: "get",
        url: "api/v1/area/all",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
