import { useState, useEffect } from "react";

const url =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

export const useFetch = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();

      setData(json);
    }

    fetchData();
  }, [url]);

  return data.products;
};
