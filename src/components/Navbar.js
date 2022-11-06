import { useEffect, useState } from "react";
import { Stack, Box, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { SearchIcon } from "../utils/constants";
import logo from "../assets/logo.svg";
import { getAddress } from "../utils/fetchData";

const Navbar = () => {
  const [region, setRegion] = useState("");
  const [textSearch, setTextSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getRegion = async () => {
      const data = await getAddress();
      setRegion(data);
    };
    getRegion();
    return () => {};
  }, []);

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
        <Typography
          variant="caption"
          sx={{
            fontSize: "10px",
            color: "#aaa",
            position: "absolute",
            left: "80%",
            top: "-5%",
          }}
        >
          {region}
        </Typography>
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
