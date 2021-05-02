import { createAsyncThunk, createSlice, Draft } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import axios from "axios";
import { statusType } from "../../types/statusRequestRedux";
import { resultAlbum } from "./albumSlice";
const HAPPY_API_KEY = process.env.NEXT_PUBLIC_HAPPI_DEV_API_KEY;

type TrackDataResponse = {
  artist: string;
  id_artist: number;
  track: string;
  id_track: number;
  id_album: number;
  album: string;
  lyrics: string;
  api_artist: string;
  api_albums: string;
  api_album: string;
  api_tracks: string;
  api_track: string;
  api_lyrics: string;
  lang: string /* ISO 639-1 */;
  copyright_label: string;
  copyright_notice: string;
  copyright_text: string;
};

type TrackDataResponseParse = {
  cover: string;
} & TrackDataResponse;

type FetchTrackResponseType = {
  success: boolean;
  length: number;
  result: TrackDataResponse;
};

// First, create the thunk4
export const fetchTrack = createAsyncThunk<
  TrackDataResponseParse,
  { idAlbum: string; idArtist: string; idTrack: string },
  { state: RootState }
>("artists/fetchTrack", async (arg, { getState }) => {
  const response = await axios.get<FetchTrackResponseType>(
    `/api/:id_artist/albums/:id_album/tracks/:id_track`
      .replace(":id_artist", arg.idArtist)
      .replace(":id_album", arg.idAlbum)
      .replace(":id_track", arg.idTrack)
  );

  const {
    data: { result }
  } = response;
  let resultParse: TrackDataResponseParse;

  if (getState().album?.data?.id_album === result.id_album) {
    return (resultParse = {
      cover: getState().album.data.cover,
      ...result
    });
  } else {
    const albumResponse = await axios.get(
      `/api/:id_artist/albums/:id_album/`
        .replace(":id_artist", arg.idArtist)
        .replace(":id_album", arg.idAlbum)
    );

    return (resultParse = {
      cover: albumResponse.data.result.cover,
      ...result
    });
  }
});

type TrackState = {
  status: statusType;
  data?: TrackDataResponseParse;
};

const initialState: TrackState = {
  status: "idle"
};

// Then, handle actions in your reducers:
const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrack.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchTrack.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchTrack.rejected, (state, action) => {
      state.status = "failed";
    });
  }
});

export const {} = trackSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const resultTrack = (state: RootState) => state.track.data;
export const statusSearchTrack = (state: RootState) => state.track.status;

export default trackSlice.reducer;
