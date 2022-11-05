import { Stack } from "@mui/material";
import { VideoCard, Loader } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack
      gap={2}
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      direction={{ xs: "column", sm: "row" }}
    >
      {videos.length === 0 && <Loader />}
      {videos.map((video, i) => (
        <VideoCard video={video} key={i} />
      ))}
    </Stack>
  );
};

export default Videos;
