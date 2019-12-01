import {Dispatch} from "react";
import {AppActions} from "../types/AppActions";
import {AppState} from "../types/AppState";
import {
    PostActionTypes
} from "./PostsActionTypes";
import {fetchPostsCall} from "../api/ApiClient";
import {Post} from "../types/Post";
import {DataAction, MarkerAction} from "../types/GenericActions";

const fetchingPostsStartedAction = (): MarkerAction<PostActionTypes> => ({
    type: PostActionTypes.FetchingPostsStarted
});

const fetchPostsFailedAction = (error: string): DataAction<PostActionTypes, string> => ({
    type: PostActionTypes.FetchingPostsFailed,
    data: error
});

const fetchingPostsEndedSuccessfullyAction = (posts: Post[]): DataAction<PostActionTypes, Post[]> => ({
    type: PostActionTypes.FetchingPostsSuccessful,
    data: posts
});

export const fetchPosts = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(fetchingPostsStartedAction());
        fetchPostsCall()
            .then(response => {
                if (response.hasErrors) {
                    dispatch(fetchPostsFailedAction(response.error as string))
                } else {
                    dispatch(fetchingPostsEndedSuccessfullyAction(response.posts))
                }
            })
    }
};