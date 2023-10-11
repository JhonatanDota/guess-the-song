import linkin_park_image from "./artists_images/linkin_park.jpg"
import katy_perry_image from "./artists_images/katy_perry.jpg"

export interface ArtistModel {
  id: number;
  slug: string;
  name: string;
  searchableName: string;
  image: string;
}

export const ARTISTS: ArtistModel[] = [
  {
    id: 1,
    slug: "katy-perry",
    name: "Katy Perry",
    searchableName: "katy perry",
    image: katy_perry_image
  },

  {
    id: 2,
    slug: "linkin-park",
    name: "Linkin Park",
    searchableName: "linkin park",
    image: linkin_park_image
  },
];