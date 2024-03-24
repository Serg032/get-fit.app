import { Method } from "../entities/exercise/domain";
import { Mode } from "../entities/mode/domain";

export class ModeService {
  public async getAll() {
    try {
      const response = await fetch("http://localhost:3000/mode", {
        method: "GET",
      });

      return (await response.json()) as Mode[];
    } catch (error) {
      throw error;
    }
  }
}
