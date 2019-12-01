import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {AppState} from "./types/AppState";
import {AppActions} from "./types/AppActions";
import {postsReducer} from "./reducers/PostsReducer";

const rootReducer = combineReducers({
    posts: postsReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);