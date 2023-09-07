import db from "../models";
import { Op } from "sequelize";
require("dotenv").config();
export const getPostService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: false,
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

export const getPostLimitService = (page, query) => {
  let offset = +process.env.OFF_SET_DEFAULT * (page - 1);
  const whereConditions = {};
  const text = {};
  if (query.priceCode || query.areaCode) {
    query?.priceCode && (whereConditions.priceCode = query.priceCode);
    query?.areaCode && (whereConditions.areaCode = query.areaCode);
    text[Op.or] = whereConditions;
  }
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAndCountAll({
        where: text,
        raw: false,
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
