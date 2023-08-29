import db from "../models";
require("dotenv").config();
export const getPostService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
          { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
        ],
        attributes: ["id", "title", "star", "address", "description"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "success" : "get post fail",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getPostLimitService = (page) => {
  let offset = +process.env.OFF_SET_DEFAULT * (page - 1);
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAndCountAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
          { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
        ],
        attributes: ["id", "title", "star", "address", "description"],
        offset: offset > 0 ? offset : 0,
        limit: +process.env.LIMIT,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "success" : "get post fail",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
};
