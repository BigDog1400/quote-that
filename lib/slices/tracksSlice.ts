import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import axios from "axios";
import { statusType } from "../../types/statusRequestRedux";
const HAPPY_API_KEY = process.env.NEXT_PUBLIC_HAPPI_DEV_API_KEY;
// First, create the thunk

export const fetchTracks = createAsyncThunk(
  "album/fetchTracks",
  async (args: { id_artist: string; id_album?: string }) => {
    const response = await axios.get(
      `https://api.happi.dev/v1/music/artists/:id_artist/albums/:id_album/tracks`
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

type TracksState = {
  status: statusType;
  data?: {
    album: string;
    id_album: number;
    id_artist: number;
    artist: string;
    cover: string;
    label: string;
    explicit: boolean;
    api_artist: string;
    api_albums: string;
    api_album: string;
    api_tracks: string;
    length: number;
    tracks: [
      {
        id_track: number;
        track: string;
        bpm: number; // Tempo
        api_track: string;
        api_lyrics: string;
        haslyrics: boolean;
        lang: string;
      }
    ];
  } | null;
};

const initialState: TracksState = {
  status: "idle"
};

// Then, handle actions in your reducers:
const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.pending, (state, action) => {
      state.status = "loading";
      state.data = null;
    });
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
  }
});

export const {} = tracksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const resultTracks = (state: RootState) => state.tracks.data;
export const statusSearchTracks = (state: RootState) => state.tracks.status;

export default tracksSlice.reducer;
