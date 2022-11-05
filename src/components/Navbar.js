import { useState } from "react";
import { Stack, Box, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { SearchIcon } from "../utils/constants";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [textSearch, setTextSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textSearch) {
      navigate(`/search/${textSearch}`);
      setTextSearch("");
    }
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      zIndex={10}
      sx={{
        background: "black",
        position: "sticky",
        top: 0,
        justifyContent: { xs: "flex-end", md: "center" },
      }}
      spacing={2}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          left: "10px",
        }}
      >
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #404040",
          background: "#131313",
          pl: 2,
          height: 40,
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value={textSearch}
          style={{ background: "#131313" }}
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "gray" }}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default Navbar;
