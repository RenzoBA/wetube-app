import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  ChannelDetail,
  VideoDetail,
  SearchFeed,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/videos/:id" exact element={<VideoDetail />} />
            <Route path="/channels/:id" element={<ChannelDetail />} />
            <Route path="/search/:textSearch" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default App;
