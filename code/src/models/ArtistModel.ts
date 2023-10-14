export default interface ArtistModel {
  id: number;
  slug: string;
  name: string;
  searchableName: string;
  genres: string[];
  image: string;
}
