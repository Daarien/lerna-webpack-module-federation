type Breed = string;
type Subbreed = string;
type DogImgUrl = string;

export type Breeds = {
  [index: Breed]: Subbreed[];
};

export type CommonResponse<T> = {
  status: "success";
  message: T;
};

export type AllBreedsResponse = CommonResponse<Breeds>;

export type RandomDogResponse = CommonResponse<DogImgUrl>;

export type DogsByBreedResponse = CommonResponse<DogImgUrl[]>;
