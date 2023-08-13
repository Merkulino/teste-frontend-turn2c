export interface Dog {
  weight: {
    imperial: string,
    metric: string,
  },
  height: {
    imperial: string,
    metric: string,
  },
  id: number,
  name: string | null,
  bred_for: string,
  breed_group: string,
  life_span: string | null,
  temperament: string,
  reference_image_id: string,
}

export interface DogResponse {
  breeds: Dog[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface DogsBreed extends Dog {
  image: {
    id: string,
    width: number,
    height: number,
    url: string,
  }
}