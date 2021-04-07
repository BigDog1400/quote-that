import { createAsyncThunk, createSlice, Draft } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import axios from "axios";
import { statusType } from "../../types/statusRequestRedux";
const HAPPY_API_KEY = process.env.NEXT_PUBLIC_HAPPI_DEV_API_KEY;
// First, create the thunk

export const fetchAlbums = createAsyncThunk(
  "artists/fetchAlbums",
  async (id_artist: string, { getState }) => {
    const response = await axios.get(
      `https://api.happi.dev/v1/music/artists/:id_artist/albums?`.replace(
        ":id_artist",
        id_artist
      ),
      {
        params: {
          apikey: HAPPY_API_KEY
        }
      }
    );
    const {
      data: {
        result: { albums }
      }
    } = await response;
    return albums;
  }
);

type AlbumsState = {
  status: statusType;
  data?: {
    album: string;
    id_album: number;
    cover: string;
    api_album: string;
    api_tracks: string;
  }[];
};

const initialState: AlbumsState = {
  status: "idle"
};

// Then, handle actions in your reducers:
const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
  }
});

export const {} = albumsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const resultAlbums = (state: RootState) => state.albums.data;
export const statusSearchAlbums = (state: RootState) => state.albums.status;

export default albumsSlice.reducer;
