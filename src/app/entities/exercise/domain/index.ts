export interface Exercise {
  name: string;
  type: ExerciseType;
  method: Method;
}

export type ExerciseType = "bodyweight" | "weights" | "cardio";

export type Method = "push" | "pull" | "legs" | "cardio";

export interface CreateExerciseCommand extends Exercise {}
