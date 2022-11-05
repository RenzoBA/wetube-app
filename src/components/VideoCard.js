import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "../utils/constants";
import timeAgo from "../utils/timeAgo";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet: { thumbnails, title, channelTitle, channelId, publishTime },
  },
}) => {
  return (
    <Card
      sx={{
        width: "310px",
        boxShadow: "none",
        borderRadius: 2,
      }}
    >
      <Link to={videoId ? `/videos/${videoId}` : "/videos/cV2gBU6hKfY"}>
        <CardMedia
          component="img"
          image={thumbnails.medium.url}
          sx={{
            width: "100%",
            height: 180,
            objectFit: "cover",
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link to={videoId ? `/videos/${videoId}` : "/videos/cV2gBU6hKfY"}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {title.length > 50 ? title.slice(0, 50) + "..." : title}
          </Typography>
        </Link>
        <Box display="flex" alignItems="center">
          <Link to={channelId ? `/channels/${channelId}` : "/channels/"}>
            <Typography variant="subtitle2" color="gray">
              {channelTitle}
            </Typography>
          </Link>
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "#2dc0af", ml: "5px" }}
          />
        </Box>
        <Typography variant="caption" sx={{ color: "gray", cursor: "default" }}>
          {timeAgo(publishTime)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
