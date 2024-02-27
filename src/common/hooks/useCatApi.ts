import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { CatEntry, loadData } from "../../features/catApi/catApiSlice";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";

const useCatApi = () => {

  const catApiData = useSelector((state: RootState) => state.catApi.data);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const fetchData = async (limit: number) => {
    try {
      setLoading(true);
      const API_KEY = import.meta.env.VITE_API_KEY;
      const GET_CAT_PHOTOS_URL = `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=beng&api_key=${API_KEY}`;
      const response: AxiosResponse = await axios.get(GET_CAT_PHOTOS_URL);
      const responseData: CatEntry[] = response.data;
      dispatch(loadData(responseData));
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return {
    loading,
    catApiData,
    fetchData,
  }
}

export default useCatApi