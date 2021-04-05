import { createAsyncThunk, createSlice, Draft } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import axios from "axios";
import { statusType } from "../../types/statusRequestRedux";
import { fetchAlbums } from "./albumsSlice";
const HAPPY_API_KEY = process.env.NEXT_PUBLIC_HAPPI_DEV_API_KEY;
// First, create the thunk

export const fetchAlbum = createAsyncThunk(
  "album/fetchAlbum",
  async (args: { id_artist: string; id_album?: string }) => {
    const response = await axios.get(
      `https://api.happi.dev/v1/music/artists/:id_artist/albums/:id_album`
        .replace(":id_artist", args.id_artist)
        .replace(":id_album", args.id_album),
      {
        params: {
          apikey: HAPPY_API_KEY
        }
      }
    );
    const {
      data: { result }
    } = await response;

    return result;
  }
);

type AlbumState = {
  status: statusType;
  data?: {
    album: string;
    id_album: number;
    id_artist: number;
    artist: string;
    cover: string;
    upc: string;
    asin: string;
    mbid: string;
    genres: [];
    realease: string;
    label: string;
    explicit: boolean;
    api_artist: string;
    api_albums: string;
    api_album: string;
    api_tracks: string;
  };
};

const initialState: AlbumState = {
  status: "idle"
};

// Then, handle actions in your reducers:
const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbum.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchAlbum.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
  }
});

export const {} = albumSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const resultAlbum = (state: RootState) => state.album.data;
export const statusSearchAlbum = (state: RootState) => state.album.status;

export default albumSlice.reducer;
