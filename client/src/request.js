import axios from "axios";
const util = {};
util.user_data = async (username, password) => {
  const data = await axios.post("http://localhost:5000/user", {
    username: username,
    password: password,
  });

  return data;
};
util.all_users = async () => {
  const data = await axios.get("http://localhost:5000/all")
  return data
}
export default util;
