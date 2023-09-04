import * as services from "../services/post";

export const getPosts = async (req, res) => {
  try {
    const response = await services.getPostService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed at post controler",
    });
  }
};

export const getPostsLimit = async (req, res) => {
  const { page, ...query } = req.query;
  try {
    const response = await services.getPostLimitService(
      req.query.page ? req.query.page : 1,
      query
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed at post controler",
      errr: error,
    });
  }
};
