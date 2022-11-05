import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

import { getData } from "../utils/fetchData";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getCategoryVideos = async () => {
      const data = await getData(`search?part=snippet&q=${selectedCategory}`);
      setVideos(data.items);
    };
    getCategoryVideos();
    return () => {};
  }, [selectedCategory]);

  return (
    <Stack direction={{ sx: "column", md: "row" }}>
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          sx={{
            color: "GrayText",
            textAlign: "center",
          }}
          variant="body2"
        >
          Copyright &#169; 2022{" "}
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" className="feed-title" mb={2}>
          <span style={{ color: "#2dc0af" }}>{selectedCategory}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
