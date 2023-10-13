import ArtistModel from "../models/ArtistModel";

import linkin_park_image from "./artists_images/linkin_park.jpg";
import katy_perry_image from "./artists_images/katy_perry.jpg";
import dua_lipa from "./artists_images/dua_lipa.jpg";
import eminem from "./artists_images/eminem.jpg";
import ed_sheeran from "./artists_images/ed_sheeran.jpg";
import tim_maia from "./artists_images/tim_maia.jpg";

const MUSIC_GENRES = {
  POP: "POP",
  ROCK: "ROCK",
  RAP: "RAP",
  BRAZILIAN: "BRAZILIAN",
}

const ARTISTS: ArtistModel[] = [
  {
    id: 1,
    slug: "katy-perry",
    name: "Katy Perry",
    searchableName: "katy perry",
    genre: MUSIC_GENRES.POP,
    image: katy_perry_image
  },

  {
    id: 2,
    slug: "linkin-park",
    name: "Linkin Park",
    searchableName: "linkin park",
    genre: MUSIC_GENRES.ROCK,
    image: linkin_park_image,
  },

  {
    id: 3,
    slug: "dua-lipa",
    name: "Dua Lipa",
    searchableName: "dua lipa",
    genre: MUSIC_GENRES.POP,
    image: dua_lipa,
  },

  {
    id: 4,
    slug: "eminem",
    name: "Eminem",
    searchableName: "eminem",
    genre: MUSIC_GENRES.RAP,
    image: eminem,
  },

  {
    id: 5,
    slug: "ed-sheeran",
    name: "Ed Sheeran",
    searchableName: "ed sheeran",
    genre: MUSIC_GENRES.POP,
    image: ed_sheeran,
  },

  {
    id: 6,
    slug: "tim-maia",
    name: "Tim Maia",
    searchableName: "tim maia",
    genre: MUSIC_GENRES.BRAZILIAN,
    image: tim_maia,
  },
];

export default ARTISTS;
