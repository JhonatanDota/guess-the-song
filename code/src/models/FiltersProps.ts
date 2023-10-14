import ArtistModel from "./ArtistModel";

export default interface FiltersProps {
  artists: ArtistModel[];
  setArtists: (artists: ArtistModel[]) => void;
}
