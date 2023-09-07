import db from "../models";

export const getCategoriesSerivce = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: false,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get categories.",
        response,
      });
      //   resolve({ err: response ? 0 : 1 });
    } catch (error) {
      reject(error);
    }
  });
