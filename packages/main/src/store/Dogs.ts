import { observable, action } from "mobx";
import DogService, { Breeds } from "@mf/core/services/DogService";

export class Dogs {
  @observable breeds: Breeds = {};

  @observable dogsbyBreed: string[] = [];

  @observable randomDog: string = "";

  async getBreeds() {
    const response = await DogService.getAllBreeds();
    if (response) {
      this.breeds = response.message;
    }
  }
  async getRandomDogByBreed(breed: string) {
    const response = await DogService.getRandomByBreed(breed);
    if (response) {
      this.randomDog = response.message;
    }
  }
}

export default new Dogs();
