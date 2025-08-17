import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [adminData, setAdminData] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchAdminData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const { data } = await axios.get(`${backendUrl}/user/data`, {
        headers: {
          token,
        },
      });

      if (data.success) {
        setAdminData(data.userData);
      } else {
        toast.error(data.message || "Failed to fetch admin data");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const value = { backendUrl, adminData, setAdminData };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
