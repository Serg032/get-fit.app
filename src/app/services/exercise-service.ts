import { Exercise } from "../entities/exercise/domain";

export class ExerciseService {
  public async getAll() {
    try {
      const response = await fetch("http://localhost:3000/exercise", {
        method: "GET",
      });

      return (await response.json()) as Exercise[];
    } catch (error) {
      throw error;
    }
  }

  public async getByName(name: string) {
    try {
      const response = await fetch(
        `http://localhost:3000/exercise/name/${name}`,
        {
          method: "GET",
        }
      );

      return (await response.json()) as Exercise | undefined;
    } catch (error) {
      throw error;
    }
  }
}
