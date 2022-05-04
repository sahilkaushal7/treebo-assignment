import React, { useCallback, useEffect, useState } from "react";
import { fetchTrendingGifs } from "./Home.requests";

const LIMIT_PER_PAGE = 20;
const INITIAL_PAGE = 1;

const Home = () => {
  const [gifsList, setGifsList] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);

  const getTrendingGifs = () => {
    fetchTrendingGifs(LIMIT_PER_PAGE, INITIAL_PAGE - 1).then((res) => {
      const { data, meta, pagination } = res.data;
      if (meta.msg === "OK") {
        setGifsList(data);
        setPage(pagination.count / pagination.offset);
      }
    });
  };

  useEffect(() => {
    getTrendingGifs();
  }, []);

  return (
    <div>
      {gifsList.map(({ images: { fixed_height } }) => (
        <img src={fixed_height.url} key={fixed_height.url} />
      ))}
    </div>
  );
};

export default Home;
