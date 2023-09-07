import db from "../models";

export const getPricesSerivce = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Price.findAll({
        raw: false,
        order: [
          ['order', 'ASC'],]
        
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