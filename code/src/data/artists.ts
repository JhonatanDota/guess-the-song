import linkin_park_image from "./artists_images/linkin_park.jpg"
import katy_perry_image from "./artists_images/katy_perry.jpg"

export interface ArtistModel {
  id: number;
  name: string;
  searchableName: string;
  image: string;
}

export const ARTISTS: ArtistModel[] = [
  {
    id: 1,
    name: "Katy Perry",
    searchableName: "katy perry",
    image: katy_perry_image
  },

  {
    id: 2,
    name: "Linkin Park",
    searchableName: "linkin park",
    image: linkin_park_image
  },
];