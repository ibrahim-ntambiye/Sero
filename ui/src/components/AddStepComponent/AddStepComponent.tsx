import { Container, Grid, Box, Button } from "@mui/material";
import React, { FC, useState } from "react";
import { IStep } from "../../models/IStep";
import InputComponent from "../InputComponent/InputComponent";
import styles from "./AddStepComponent.module.css";

interface AddStepComponentProps {
  addStepsToRecipe: any;
  steps: IStep[];
}

const AddStepComponent: FC<AddStepComponentProps> = ({
  addStepsToRecipe,
  steps
}) => {
  const [recipeStep, setRecipeStep] = useState<IStep>({} as IStep);

  const addStep = async () => {
    if (recipeStep != null) {
      addStepsToRecipe(recipeStep);
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={3}>
          <InputComponent
            label="Description"
            inputStyle={{ width: "95%" }}
            type="text"
            handleChange={(event: React.FormEvent<HTMLInputElement>) =>
              setRecipeStep({
                ...recipeStep,
                stepDescription: event.currentTarget.value
              })
            }
          />
        </Grid>
        <Grid item xs={3}>
          <InputComponent
            inputStyle={{ width: "95%" }}
            label="Duration"
            type="text"
            handleChange={(event: React.FormEvent<HTMLInputElement>) =>
              setRecipeStep({
                ...recipeStep,
                stepTimer: event.currentTarget.value
              })
            }
          />
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ marginTop: 2, marginRight: 10 }}>
            <Button onClick={addStep} variant="contained">
              Add more steps
            </Button>
          </Box>
        </Grid>

        <Grid sx={{ textAlight: "center" }} container>
          {steps.map((step) => (
            <>
              <Grid item xs={6}>
                <InputComponent
                  inputStyle={{ width: "90%" }}
                  label="Ingredient name"
                  disableInput={true}
                  value={step.stepDescription}
                  type="text"
                  handleChange={() => {}}
                />
              </Grid>
              <Grid item xs={6}>
                <InputComponent
                  inputStyle={{ width: "90%" }}
                  label="Ingredient measurement"
                  disableInput={true}
                  value={step.stepTimer}
                  type="text"
                  handleChange={() => {}}
                />
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddStepComponent;
