import { get } from "../utils/request";

export const getLatest = async () => {

    const result = await get("latest_products")
    return result;
}