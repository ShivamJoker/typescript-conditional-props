interface ArtistFields {
  entity_type: "ARTIST";
  artist_name: string;
}

export interface SongFields {
  entity_type: "SONG";
  song_artists: string[];
  song_title: string;
  song_subtitle: string;
  lyrics: string;
  genre: string;
  song_release_date: Date;
  publisher: string;
  stream_count?: number;
}

export interface AlbumFields {
  entity_type: "ALBUM";
  album_name: string;
  album_release_date: Date;
}

type Fields = {
  username: string;
} & (SongFields | ArtistFields | AlbumFields);

export type SearchItem = {
  type: "add" | "delete";
  id: string;
  fields: Fields;
};

const sampleItem: SearchItem = {
  id: "abc",
  type: "add",
  fields: {
    entity_type: "ALBUM",
    // get types for album here
  },
};
