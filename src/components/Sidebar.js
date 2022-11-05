import { Stack, Typography } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(({ name, icon }) => (
        <button
          className="category-btn"
          key={name}
          style={{
            background: name === selectedCategory && "#c061cb",
            gap: "15px",
            color: "white",
          }}
          onClick={() => setSelectedCategory(name)}
        >
          <span
            style={{ color: name === selectedCategory ? "#f6d32d" : "white" }}
          >
            {icon}
          </span>
          <Typography
            sx={{
              letterSpacing: "0.05em",
              opacity: name === selectedCategory ? "1" : "0.6",
            }}
          >
            {name}
          </Typography>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
