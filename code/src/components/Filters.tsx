import GenreFilter from "./GenreFilter";
import ArtistModel from "../models/ArtistModel";

type FiltersProps = {
    artists: ArtistModel[];
    setArtists: (artists: ArtistModel[]) => void;
}

export default function Filters(props: FiltersProps){
    const { artists, setArtists } = props;

    return(
        <GenreFilter artists={artists} setArtists={setArtists}/>
    );
}