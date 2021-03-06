import { createAsyncThunk, createSlice, Draft } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import axios from "axios";
import { statusType } from "../../types/statusRequestRedux";
// First, create the thunk

export const fetchArtists = createAsyncThunk(
  "artists/fetchArtists",
  async (search: string, { getState }) => {
    const response = await axios.get(`/api/search`, {
      params: {
        q: search
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
  status: statusType;
};

const initialState: ArtistsState = {
  data: [],
  status: "idle"
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
      state.status = "loading";
    });
    builder.addCase(fetchArtists.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
  }
});

export const {} = artistsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const resultArtists = (state: RootState) => state.artists.data;
export const statusSearchArtists = (state: RootState) => state.artists.status;

export default artistsSlice.reducer;
