import axios from "axios";

const getPosts = async (url, page = 1) => {
  url = `${url}?page=${page}`;
  try {
    const result = await axios({
      url,
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
    });
    const total = parseInt(result.headers["x-wp-total"], 10);
    const totalPages = parseInt(result.headers["x-wp-totalpages"], 10);
    return {
      success: true,
      result: result.data,
      total,
      totalPages,
    };
  } catch (err) {
    return { success: false, error: err.toString() };
  }
};

export { getPosts };
