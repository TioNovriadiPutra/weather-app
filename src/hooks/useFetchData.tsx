import axios, { AxiosResponse } from "axios";

const useFetchData = () => {
  const fetchFunction = async (url: string) => {
    const response: AxiosResponse<any, any> = await axios.get(url);

    return response.data;
  };

  return {
    fetchFunction,
  };
};

export default useFetchData;
