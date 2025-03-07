import { get } from "../utils/request";

export const getBlogs = async () => {

    const result = await get("blogs")
    return result;
}