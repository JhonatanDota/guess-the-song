import MusicModel from "../models/MusicModel";

export function randomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}

export function randomizeMusic(musics: MusicModel[]): MusicModel {
  const musicsLength: number = musics.length;
  const index: number = randomIndex(musicsLength);

  return musics[index];
}

function checkCorrectChoice(choicedMusic: MusicModel, correctMusic: MusicModel): boolean {
  if (choicedMusic) return choicedMusic.trackId === correctMusic.trackId;

  return false;
}
