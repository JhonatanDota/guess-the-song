import ArtistModel from "../models/ArtistModel";

import linkin_park_image from "./artists_images/linkin_park.jpg";
import katy_perry_image from "./artists_images/katy_perry.jpg";
import dua_lipa from "./artists_images/dua_lipa.jpg";
import eminem from "./artists_images/eminem.jpg";
import ed_sheeran from "./artists_images/ed_sheeran.jpg";
import tim_maia from "./artists_images/tim_maia.jpg";

export const MUSIC_GENRES = {
  POP: "Pop",
  ROCK: "Rock",
  RAP: "Rap",
  BRAZILIAN: "Brasileira",
};

export const MUSIC_GENRES_LIST: string[] = [
  MUSIC_GENRES.POP,
  MUSIC_GENRES.ROCK,
  MUSIC_GENRES.RAP,
  MUSIC_GENRES.BRAZILIAN,
];

const ARTISTS: ArtistModel[] = [
  {
    id: 1,
    slug: "katy-perry",
    name: "Katy Perry",
    searchableName: "katy perry",
    genres: [MUSIC_GENRES.POP],
    image: katy_perry_image,
  },

  {
    id: 2,
    slug: "linkin-park",
    name: "Linkin Park",
    searchableName: "linkin park",
    genres: [MUSIC_GENRES.ROCK],
    image: linkin_park_image,
  },

  {
    id: 3,
    slug: "dua-lipa",
    name: "Dua Lipa",
    searchableName: "dua lipa",
    genres: [MUSIC_GENRES.POP],
    image: dua_lipa,
  },

  {
    id: 4,
    slug: "eminem",
    name: "Eminem",
    searchableName: "eminem",
    genres: [MUSIC_GENRES.RAP],
    image: eminem,
  },

  {
    id: 5,
    slug: "ed-sheeran",
    name: "Ed Sheeran",
    searchableName: "ed sheeran",
    genres: [MUSIC_GENRES.POP],
    image: ed_sheeran,
  },

  {
    id: 6,
    slug: "tim-maia",
    name: "Tim Maia",
    searchableName: "tim maia",
    genres: [MUSIC_GENRES.BRAZILIAN],
    image: tim_maia,
  },
];

export default ARTISTS;
