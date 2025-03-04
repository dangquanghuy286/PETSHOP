import { get } from "../utils/request";

export const getfeaList = async () => {
    const result = await get("featured_products");
    return result;
}
