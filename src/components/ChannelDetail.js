import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/fetchData";

import { Videos } from "./";

const ChannelDetail = () => {
  const [channel, setChannel] = useState({});
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getChannel = async () => {
      const data = await getData(`channels?part=snippet&id=${id}`);
      const data2 = await getData(`search?part=snippet&channelId=${id}`);
      setChannel(data.items[0]);
      setChannelVideos(data2.items);
    };
    getChannel();
    return () => {};
  }, [id]);
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: {
            xs: "column-reverse",
            lg: "row",
          },
          p: { xs: 4, lg: "150px 80px" },
        }}
      >
        <Box
          sx={{ color: "#fff" }}
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", lg: "flex-start" }}
          py={{ xs: 2, md: 0 }}
          textAlign={{ xs: "center", lg: "left" }}
          width={{ xs: "90%", lg: "50%" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 30, md: 45 },
              fontWeight: "700",
              letterSpacing: 8,
              color: "dimgray",
            }}
          >
            {channel.snippet?.country ? (
              channel.snippet.country
            ) : (
              <span style={{ fontSize: "16px" }}>no-country</span>
            )}
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 55, md: 80 } }}>
            {channel.snippet?.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "300",
              color: "dimgray",
              fontSize: { xs: 18, md: 18 },
            }}
            py={3}
          >
            {channel.snippet?.description ? (
              channel.snippet.description
            ) : (
              <span style={{ color: "dimgray", fontSize: "16px" }}>
                no-description
              </span>
            )}
          </Typography>
        </Box>
        <img
          src={channel.snippet?.thumbnails.medium.url}
          className="channel-logo"
          alt="channel"
        />
      </Box>
      <Box>
        <Videos videos={channelVideos} />
      </Box>
    </Stack>
  );
};

export default ChannelDetail;
