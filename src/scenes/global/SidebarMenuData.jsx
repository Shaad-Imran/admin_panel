import React, { useState } from "react";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SidebarMenuData = ({ dataType, menuName }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <>
      {menuName && (
        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {menuName}
        </Typography>
      )}

      {dataType.map((item, idx) => {
        return (
          <Item
            key={idx}
            title={item.title}
            to={item.to}
            icon={item.icon}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </>
  );
};

export default SidebarMenuData;
