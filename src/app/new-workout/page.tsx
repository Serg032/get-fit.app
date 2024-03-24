"use client";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authenticateUser } from "../services/auth/authenticate-user";
import { ExerciseService } from "../services/exercise-service";
import { Exercise } from "../entities/exercise/domain";
import { ModeService } from "../services/mode-service";
import { Mode } from "../entities/mode/domain";

const NewWorkout = () => {
  const exerciseService = new ExerciseService();
  const methodService = new ModeService();
  const router = useRouter();
  const [allExercices, setAllExercises] = useState<Exercise[]>([]);
  const [allMethods, setAllModes] = useState<Mode[]>([]);
  const [exerciseAddedCounter, setExerciseAddedCounter] = useState<number[]>(
    []
  );
  const [exercice, setExercise] = useState<Exercise>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("signin");
      return;
    }
    async function fetchData() {
      try {
        if (token) {
          const authResponse = await authenticateUser(token);

          if (!authResponse.tokenData) {
            router.push("signin");
            return;
          }
        }
        const exercises = await exerciseService.getAll();
        setAllExercises(exercises);
        const modes = await methodService.getAll();
        console.log(modes);
        setAllModes(modes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const addExerciceCount = () => {
    setExerciseAddedCounter([...exerciseAddedCounter, 1]);
  };

  const handleOnChangeExercise = async (exerciseName: string) => {
    const exercice = await exerciseService.getByName(exerciseName);
    if (!exercice) {
      alert("Error at set an exercise");
    }

    setExercise(exercice);
  };

  return (
    <Box className="w-full min-h-screen flex flex-col gap-5">
      <Box className="w-full h-14 flex flex-col gap-3 p-5">
        {exerciseAddedCounter.map((count) => (
          <Box key={count} className="flex flex-col gap-6">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={exercice ? exercice.name : ""}
                label="Exercise"
                onChange={(event) => handleOnChangeExercise(event.target.value)}
              >
                {allExercices.map((exercice) => (
                  <MenuItem key={exercice.name} value={exercice.name}>
                    {exercice.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Method</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={count}
                label="Method"
                onChange={() => undefined}
              >
                {allMethods.map((mode) => (
                  <MenuItem key={mode.name} value={mode.name}>
                    {mode.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ))}
        <Button onClick={addExerciceCount}>Add new Exercise</Button>
      </Box>
    </Box>
  );
};

export default NewWorkout;
