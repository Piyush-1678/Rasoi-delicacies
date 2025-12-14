import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CustomContainer from "../common/CustomContainer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { dishes } from "../utils/dishes";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { DishFilters } from "../utils/index";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Item = ({ image, price, name }) => {
  return (
    <Card sx={{ maxWidth: "260px", width: "260px" ,height:'6rem' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
const MenuGrid = ({ items, filterSelection }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const selectedFilter = DishFilters.find(
    (filter) => filter.id === filterSelection
  ).filters;
  const itemsToDisplay = items.filter((item) => item.category.includes(value));
  useEffect(() => {
    setValue(filterSelection === "nonveg" ? "chicken" : "maincourse");
  }, [filterSelection]);
  return (
    <>
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {selectedFilter.map((filter, index) => (
            <Tab
              style={{ alignItems: "end" }}
              label={filter.value}
              key={index}
              value={filter.key}
            />
          ))}
        </Tabs>
        <TabPanel>
          <Box
            style={{ maxHeight: "75vh", overflowY: "auto", marginTop: "-1rem", paddingBottom:"1rem" }}
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 2,
              marginTop: "2rem",
            }}
          >
            {itemsToDisplay.map((item, index) => (
              <Item
                key={index}
                price={item.price}
                name={item.name}
              />
            ))}
          </Box>
        </TabPanel>
      </Box>
    </>
  );
};
const Menu = () => {
  const [value, setValue] = React.useState("nonveg");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <CustomContainer>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        className="heading-text"
        sx={{ marginBottom: "1rem" }}
        id="menu"
      >
        Our Menu
      </Typography>
      <Paper
        elevation={3}
        sx={{ width: "100%", height: "auto", marginBottom: "1rem" }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem 1rem' }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<DownloadIcon />}
            href="/menu.pdf"
            download
            aria-label="Download menu PDF"
          >
            Download Menu
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            {DishFilters.map((filter) => (
              <Tab label={filter.value} key={filter.id} value={filter.id} />
            ))}
          </Tabs>
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <MenuGrid
            filterSelection={value}
            items={dishes.filter((dish) => dish.type === value)[0].dishes}
          />
        </Box>
      </Paper>
    </CustomContainer>
  );
};

export default Menu;
