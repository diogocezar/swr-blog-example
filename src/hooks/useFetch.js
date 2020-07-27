import useSWR from "swr";
import { getPosts } from "../services";

export function useFetch(url) {
  const { data, error, mutate } = useSWR(url, async (url) => {
    const response = await getPosts(url, 1);
    return response.result;
  });
  return { data, error, mutate };
}
