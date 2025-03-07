import { post } from "../utils/request";

export const feedbackUseLogin = async (options) => {
    const result = await post("feedbacks", options);
    return result;
}