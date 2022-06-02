import Box from "@mui/material/Box";
import React, { FC, useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import IRecipe from "../../models/IRecipe";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import {
  Card,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItemText,
} from "@mui/material";

interface ViewRecipeComponentProps {
  recipe: IRecipe;
  show: boolean;
  changeState: any;
}

const ViewRecipeComponent: FC<ViewRecipeComponentProps> = (recipeModal) => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Modal isOpen={recipeModal.show}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Details" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid container spacing={2}>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <h1>{recipeModal.recipe.name}</h1>
              </Grid>
              <Divider style={{ width: "100%" }} />
              <Grid item xs={3}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={recipeModal.changeState}
                >
                  Close
                </Button>
              </Grid>

              <Divider
                style={{
                  width: "100%",

                  color: "blue",
                }}
              />

              <Grid item xs={6} container style={{}}>
                <form>
                  <h2>Cooking Method</h2>
                  <h4>{recipeModal.recipe.cookingMethod}</h4>
                </form>
                <Divider
                  style={{
                    width: "100%",
                  }}
                />
                <Card sx={{ mb: 10 }}>
                  <CardMedia
                    sx={{}}
                    component="img"
                    alt="No Food Image"
                    height="auto"
                    image={recipeModal.recipe.imageUrl}
                  />
                </Card>
              </Grid>

              <Grid item xs={6} style={{}}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: "100%",
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 300,
                    textAlign: "right",

                    borderRadius: "5%",
                    "& ul": { padding: 0 },
                  }}
                >
                  <li
                    key={`section`}
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <ul>
                      <h2>{"Recipe Ingredients"}</h2>
                      {recipeModal.recipe.ingredients.map((ingredient) => (
                        <>
                          <ListItemText
                            primary={`${ingredient.name}     -     ${ingredient.quantity}`}
                          />
                          <Divider style={{ width: "100%" }} />
                        </>
                      ))}
                    </ul>
                  </li>
                </List>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: "100%",
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 300,
                    textAlign: "right",
                    "& ul": { padding: 0 },
                  }}
                >
                  <li
                    key={`section`}
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <ul>
                      <h2>{"Cooking Steps"}</h2>
                      {recipeModal.recipe.steps.map((step) => (
                        <>
                          <ListItemText
                            primary={`${step.stepDescription} (${step.stepTimer})`}
                          />
                          <Divider style={{ width: "100%" }} />
                        </>
                      ))}
                    </ul>
                  </li>
                </List>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </Modal>
  );
};

export default ViewRecipeComponent;
