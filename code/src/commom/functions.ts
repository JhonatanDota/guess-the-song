import MusicModel from "../models/MusicModel";
import { LOCAL_STORAGE_ITENS } from "./constants";

export function randomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}

export function randomizeMusic(musics: MusicModel[]): MusicModel {
  const musicsLength: number = musics.length;
  const index: number = randomIndex(musicsLength);

  return musics[index];
}

export function checkCorrectChoice(
  choicedMusic: MusicModel | null,
  correctMusic: MusicModel | undefined
): boolean {
  if (choicedMusic) return choicedMusic.trackId === correctMusic?.trackId;

  return false;
}

export function setCurrentVolume(volume: number): void {
  localStorage.setItem(LOCAL_STORAGE_ITENS.VOLUME, volume.toString());
}

export function getCurrentVolume(): number {
  return Number(localStorage.getItem(LOCAL_STORAGE_ITENS.VOLUME));
}
