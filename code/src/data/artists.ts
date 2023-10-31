import ArtistModel from "../models/ArtistModel";

import linkin_park_image from "./artists_images/linkin_park.jpg";
import katy_perry_image from "./artists_images/katy_perry.jpg";
import dua_lipa from "./artists_images/dua_lipa.jpg";
import eminem from "./artists_images/eminem.jpg";
import ed_sheeran from "./artists_images/ed_sheeran.jpg";
import tim_maia from "./artists_images/tim_maia.jpg";
import taylor_swift from "./artists_images/taylor_swift.jpg";
import avenged_sevenfold from "./artists_images/avenged_sevenfold.jpg";
import anitta from "./artists_images/anitta.jpg";
import charlie_brown_jr from "./artists_images/charlie_brown_jr.jpg";
import bon_jovi from "./artists_images/bon_jovi.jpg";
import guns_n_roses from "./artists_images/guns_n_roses.jpg";
import backstreet_boys from "./artists_images/backstreet_boys.jpg";
import red_hot_chili_peppers from "./artists_images/red_hot_chili_peppers.jpg";
import lana_del_rey from "./artists_images/lana_del_rey.jpg";
import arctic_monkeys from "./artists_images/arctic_monkeys.jpg";
import muse from "./artists_images/muse.jpg";
import ava_max from "./artists_images/ava_max.jpg";

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

  {
    id: 7,
    slug: "taylor-swift",
    name: "Taylor Swift",
    searchableName: "taylor swift",
    genres: [MUSIC_GENRES.POP],
    image: taylor_swift,
  },

  {
    id: 8,
    slug: "avenged-sevenfold",
    name: "Avenged Sevenfold",
    searchableName: "avenged sevenfold",
    genres: [MUSIC_GENRES.ROCK],
    image: avenged_sevenfold,
  },

  {
    id: 9,
    slug: "anitta",
    name: "Anitta",
    searchableName: "anitta",
    genres: [MUSIC_GENRES.POP, MUSIC_GENRES.BRAZILIAN],
    image: anitta,
  },

  {
    id: 10,
    slug: "charlie-brown-jr",
    name: "Charlie Brown Jr.",
    searchableName: "charlie brown jr",
    genres: [MUSIC_GENRES.ROCK, MUSIC_GENRES.BRAZILIAN],
    image: charlie_brown_jr,
  },

  {
    id: 11,
    slug: "bon-jovi",
    name: "Bon Jovi",
    searchableName: "bon jovi",
    genres: [MUSIC_GENRES.ROCK],
    image: bon_jovi,
  },

  {
    id: 12,
    slug: "guns-n-roses",
    name: "Guns N' Roses",
    searchableName: "guns n roses",
    genres: [MUSIC_GENRES.ROCK],
    image: guns_n_roses,
  },

  {
    id: 13,
    slug: "backstreet-boys",
    name: "Backstreet Boys",
    searchableName: "backstreet boys",
    genres: [MUSIC_GENRES.POP],
    image: backstreet_boys,
  },

  {
    id: 14,
    slug: "red-hot-chili-peppers",
    name: "Red Hot Chili Peppers",
    searchableName: "red hot chili peppers",
    genres: [MUSIC_GENRES.ROCK],
    image: red_hot_chili_peppers,
  },

  {
    id: 15,
    slug: "lana-del-rey",
    name: "Lana Del Rey",
    searchableName: "lana del rey",
    genres: [MUSIC_GENRES.POP],
    image: lana_del_rey,
  },

  {
    id: 16,
    slug: "arctic-monkeys",
    name: "Arctic Monkeys",
    searchableName: "arctic monkeys",
    genres: [MUSIC_GENRES.ROCK],
    image: arctic_monkeys,
  },

  {
    id: 17,
    slug: "muse",
    name: "Muse",
    searchableName: "muse",
    genres: [MUSIC_GENRES.ROCK],
    image: muse,
  },

  {
    id: 18,
    slug: "ava-max",
    name: "Ava Max",
    searchableName: "ava max",
    genres: [MUSIC_GENRES.POP],
    image: ava_max,
  },
];

export default ARTISTS;
