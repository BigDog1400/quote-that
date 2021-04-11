import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./lib/slices/counterSlice";
import artistsReducer from "./lib/slices/artistsSlice";
import artistReducer from "./lib/slices/artistSlice";
import albumsReducer from "./lib/slices/albumsSlice";
import tracksReducer from "./lib/slices/tracksSlice";
import albumSlice from "./lib/slices/albumSlice";
import trackSlice from "./lib/slices/trackSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    artists: artistsReducer,
    artist: artistReducer,
    albums: albumsReducer,
    tracks: tracksReducer,
    album: albumSlice,
    track: trackSlice
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
