/* 
    Configuration to utilize ITunes Api 
    Docs: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html
*/
export const API_BASE_URL: string = "https://itunes.apple.com/search?";
export const DEFAULT_MEDIA: string = "music";
export const DEFAULT_ENTITY: string = "allArtist";
export const DEFAULT_ENTITY_TYPE: string = "musicTrack";
export const RESULTS_LIMIT: number = 50;

export const API_URL: string = `${API_BASE_URL}media=${DEFAULT_MEDIA}&entity=${DEFAULT_ENTITY}&entity=${DEFAULT_ENTITY_TYPE}&limit=${RESULTS_LIMIT}`;