import { get } from "../utils/request";

export const getUserLogin = async (email, password) => {
    const result = await get(`users?email=${email}&password=${password}`);
    return result;
}
