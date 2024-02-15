import axios from "axios";
import { toast } from "react-toastify";
import { BASE_API } from "./config";

const fetchUserData = async (token) => {
  try {
    const response = await axios.get(`${BASE_API}/common/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const userData = response.data;
      return userData.user;
    } else {
      console.error("Failed to fetch user data:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error during fetchUserDataWithAxios:", error);
    toast.error(error.response.data.error);
    return null;
  }
};

export { fetchUserData };
