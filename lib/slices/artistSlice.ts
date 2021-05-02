import { createAsyncThunk, createSlice, Draft } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import axios from "axios";
import { statusType } from "../../types/statusRequestRedux";
import { fetchAlbums } from "./albumsSlice";
const HAPPY_API_KEY = process.env.NEXT_PUBLIC_HAPPI_DEV_API_KEY;
// First, create the thunk

export const fetchArtist = createAsyncThunk(
  "artists/fetchArtist",
  async (
    args: {
      search: string;
      getAlbums?: boolean;
    },
    { dispatch }
  ) => {
    const response = await axios.get(
      `/api/:id_artist`.replace(":id_artist", args.search)
    );
    const {
      data: { result }
    } = await response;
    if (args.getAlbums) {
      dispatch(fetchAlbums(args.search));
    }
    return result;
  }
);

type ArtistState = {
  status: statusType;
  data?: {
    id_artist: number;
    artist: string;
    mbid: string;
    gender: "female" | "male";
    country: string;
    youtube: string;
    instagram: string;
    twitter: string;
    facebook: string;
    website: string;
    spotify: string;
    api_albums: string;
    cover: string;
  };
};

const initialState: ArtistState = {
  status: "idle"
};

// Then, handle actions in your reducers:
const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArtist.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchArtist.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
  }
});

export const {} = artistSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const resultArtist = (state: RootState) => state.artist.data;
export const statusSearchArtist = (state: RootState) => state.artist.status;

export default artistSlice.reducer;
