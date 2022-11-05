import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/fetchData";

import { Videos } from "./";

const SearchFeed = () => {
  const [videosSearched, setVideosSearched] = useState([]);
  const { textSearch } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      const data = await getData(`search?part=snippet&q=${textSearch}`);
      setVideosSearched(data.items);
    };
    getVideos();
    return () => {};
  }, [textSearch]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" className="feed-title" mb={2}>
        Search results for{" "}
        <span style={{ color: "#2dc0af" }}>{textSearch}</span> videos
      </Typography>
      <Videos videos={videosSearched} />
    </Box>
  );
};

export default SearchFeed;
