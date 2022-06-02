import { Height } from "@mui/icons-material";
import { Box, Button, Container, Grid } from "@mui/material";
import React, { FC, useRef, useState } from "react";
import { IIngredients } from "../../models/IIngredients";
import InputComponent from "../InputComponent/InputComponent";

interface AddIngredientComponentProps {
  addIngredientsToRecipe: any;
  Ingredients: IIngredients[];
}

const AddIngredientComponent: FC<AddIngredientComponentProps> = ({
  addIngredientsToRecipe,
  Ingredients,
}) => {
  const [Ingredient, setIngredient] = useState<IIngredients>(
    {} as IIngredients
  );

  const addIngredient = async () => {
    if (Ingredient != null) {
      addIngredientsToRecipe(Ingredient);
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={3}>
          <InputComponent
            inputStyle={{ width: "95%", height: "60%" }}
            label="Ingredient Name"
            type="text"
            handleChange={(event: React.FormEvent<HTMLInputElement>) =>
              setIngredient({ ...Ingredient, name: event.currentTarget.value })
            }
          />
        </Grid>
        <Grid item xs={3}>
          <InputComponent
            inputStyle={{ width: "95%" }}
            label="Measurement"
            type="text"
            handleChange={(event: React.FormEvent<HTMLInputElement>) =>
              setIngredient({
                ...Ingredient,
                quantity: event.currentTarget.value,
              })
            }
          />
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ marginTop: 2, marginRight: 10 }}>
            <Button onClick={addIngredient} variant="contained">
              Add Ingredient
            </Button>
          </Box>
        </Grid>

        <Grid sx={{ textAlight: "center" }} container>
          {Ingredients.map((Ingredient) => (
            <>
              <Grid item xs={6}>
                <InputComponent
                  label="Ingredient name"
                  disableInput={true}
                  value={Ingredient.name}
                  type="text"
                  handleChange={(
                    event: React.FormEvent<HTMLInputElement>
                  ) => {}}
                />
              </Grid>
              <Grid item xs={6}>
                <InputComponent
                  label="Ingredient measurement"
                  disableInput={true}
                  value={Ingredient.quantity}
                  type="text"
                  handleChange={(
                    event: React.FormEvent<HTMLInputElement>
                  ) => {}}
                />
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddIngredientComponent;
