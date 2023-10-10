import axios from "axios";
import { API_URL } from "./config";

export default function getMusicsByArtist(artistName: string) {
  axios.get(API_URL, {
    params: {
      term: artistName,
    },
  });
}
