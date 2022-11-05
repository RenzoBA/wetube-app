import { Box, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { CheckCircleIcon } from "../utils/constants";
import { getData } from "../utils/fetchData";

import { Videos } from "./";

const VideoDetail = () => {
  const [video, setVideo] = useState({});
  const [videosRelated, setVideosRelated] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getVideo = async () => {
      const data = await getData(`videos?part=contentDetails&id=${id}`);
      const data2 = await getData(`search?part=snippet&relatedToVideoId=${id}`);
      setVideo(data.items[0]);
      setVideosRelated(data2.items);
    };
    getVideo();
    return () => {};
  }, [id]);

  return (
    <Box>
      <Stack>
        <Box>
          <Paper elevation={6}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="video-player"
              controls
            />
          </Paper>
          <Stack p={2}>
            <Typography variant="h6">
              <Link
                to={`/channels/${video.snippet?.channelId}`}
                style={{ color: "#fff" }}
              >
                {video.snippet?.channelTitle}{" "}
                <CheckCircleIcon
                  sx={{ fontSize: "12px", color: "#2dc0af", ml: "5px" }}
                />
              </Link>
            </Typography>
            <Typography color="#fff" variant="h4" fontWeight="bold">
              {video.snippet?.title}
            </Typography>
            <Typography
              color="dimgray"
              variant="body2"
              fontWeight="300"
              lineHeight="1.4rem"
              py={2}
            >
              {video.snippet?.description}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Videos videos={videosRelated} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
