import { http } from "./config";

export default {
  // 登录
  login(password, username) {
    return http.post("/login", {
      password,
      username
    });
  }
};
