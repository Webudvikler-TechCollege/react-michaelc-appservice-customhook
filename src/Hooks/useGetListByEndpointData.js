import { useState, useEffect } from "react";
import AppService from "../App/Appservices/Appservice";

export const useGetListByEndpointData = (endpoint) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      const response = await AppService.GetList(endpoint);
      try {
        if (response.data) {
          console.log(response.data);
          setState(response.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchApiData();
  }, []);
  return { state };
};
