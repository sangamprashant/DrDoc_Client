import axios from 'axios';
import { toast } from 'react-toastify';

const fetchUserData = async (token) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_DATABASE_API}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const userData = response.data;
      console.log('User data:', userData);
      return userData;
    } else {
      console.error('Failed to fetch user data:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error during fetchUserDataWithAxios:', error);
    toast.error(error.response.data.error)
    return null;
  }
};

export {
    fetchUserData,
};
