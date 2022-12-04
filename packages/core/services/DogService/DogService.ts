import axios, { AxiosResponse } from "axios";
import { AllBreedsResponse } from "./types";

const request = axios.create({
  baseURL: "https://dog.ceo/api",
});

const endpoint = {
  breeds: "/breeds/list/all",
  ramdomDog: "/breeds/image/random",
  dogsByBreed: (breed: string) => `/breed/${breed}/images`,
  randomByBreed: (breed: string) => `/breed/${breed}/images/random`,
};

export default abstract class DogService {
  static async getAllBreeds() {
    try {
      const response: AxiosResponse<AllBreedsResponse> = await request.get(
        endpoint.breeds
      );
      console.debug("DogService ~ getAllBreeds ~ response.data", response.data);

      return response.data;
    } catch (error) {
      console.error("DogService ~ getAllBreeds ~ error", error);
    }
  }

  static async getRandomByBreed(breed: string) {
    try {
      const response = await request.get(endpoint.randomByBreed(breed));
      console.debug(
        "DogService ~ getRandomByBreed ~ response.data",
        response.data
      );

      return response.data;
    } catch (error) {
      console.log("DogService ~ getRandomByBreed ~ error", error);
    }
  }
}
