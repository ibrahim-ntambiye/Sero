import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import styles from "./NavComponent.module.css";

const pages = ["Products", "Pricing", "Blog"];

interface NavComponentProps {}

const NavComponent: FC<NavComponentProps> = () => (
  <div className={styles.NavComponent}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link href="/" color="inherit">
              {"Recipe manager"}
            </Link>
            <Link href="/create-recipe" color="inherit" paddingLeft={2}>
              {"New Recipe"}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  </div>
);

export default NavComponent;
