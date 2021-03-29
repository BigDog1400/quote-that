import { createAsyncThunk, createSlice, Draft } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import axios from "axios";
import { STATUS } from "../../types/statusRequestRedux";
const HAPPY_API_KEY = process.env.NEXT_PUBLIC_HAPPI_DEV_API_KEY;
// First, create the thunk

export const fetchArtists = createAsyncThunk(
  "artists/fetchArtists",
  async (search: string) => {
    const response = await axios.get(`https://api.happi.dev/v1/music`, {
      params: {
        q: search,
        type: "artist",
        apikey: HAPPY_API_KEY
      }
    });
    const {
      data: { result }
    } = await response;
    return result;
  }
);

type ArtistsState = {
  data: Array<{
    artist: string;
    id_artist: number;
    cover: string;
    api_artist: string;
  }>;
  status: STATUS;
};

const initialState: ArtistsState = {
  data: [],
  status: STATUS.idle
};

// Then, handle actions in your reducers:
const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArtists.pending, (state, action) => {
      state.status = STATUS.loading;
    });
    builder.addCase(fetchArtists.fulfilled, (state, action) => {
      state.status = STATUS.succeeded;
      state.data.push(action.payload);
    });
  }
});

export const {} = artistsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectArtists = (state: RootState) => state.artists.data;

export default artistsSlice.reducer;
