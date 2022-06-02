import { FC, useState } from "react";
import IRecipe from "../../../src/models/IRecipe";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ViewRecipeComponent from "../ViewRecipeComponent/ViewRecipeComponent";
import { Box } from "@mui/material";

interface RecipeComponentProps {
  recipe: IRecipe;
  onDelete: any;
}


export const RecipeComponent: FC<RecipeComponentProps> = ({ recipe, onDelete }) => {
  const [showModal, setModalShow] = useState(false);

  return (
    <>
      <Card sx={{ mb: 10 }}>
        <CardMedia
          component="img"
          alt="No Food Image"
          height="140"
          image={recipe.imageUrl}
        />
        <CardContent>
          <Typography
            sx={{ height: 70, overflow: "Hidden" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {recipe.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipe.cookingMethod}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Learn More
          </Button>
          
          <Box sx={{ marginLeft: "auto", marginRight:0 }}>
            <Button
              size="small"
              onClick={ async() => {
                 await onDelete(recipe._id);
              }}
            >
             <DeleteForeverRoundedIcon  />
            </Button>
          </Box>
        </CardActions>
      </Card>

      <div>
        <ViewRecipeComponent
          recipe={recipe}
          show={showModal}
          changeState={() => {
            setModalShow(false);
          }}
        />
      </div>
    </>
  );
};

export default RecipeComponent;
