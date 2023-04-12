import { Mail, Pets, School } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});


const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  let navigate=useNavigate();
  return (
    <AppBar position="sticky" sx={{backgroundColor:"#800000"}}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          FarmStack
        </Typography>
        <School sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={1} color="error">
            <Mail />
          </Badge>          
          {/* <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://i.pinimg.com/736x/58/f5/29/58f5295e76b6bd5dbe0cc0c55a98ce5a.jpg"
            onClick={(e) => setOpen(true)}
          /> */}
          <Avatar sx={{ bgcolor: "red", width: 30, height: 30}} aria-label="recipe" onClick={(e) => setOpen(true)}>
            {/* {user?.name} */}
          </Avatar>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ bgcolor: "red", width: 30, height: 30 }}
          />
          {/* <Typography variant="span">John</Typography> */}
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem onClick={()=>{localStorage.removeItem('auth-token');navigate('/')}}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
