export type Response = { data: SingleData[] };

export type SingleData = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  hair: string;
  alias: string[];
  origin: string;
  abilities: string[];
  img_url: string;
};
