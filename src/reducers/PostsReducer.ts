import {PostActions, PostActionTypes} from "../actions/PostsActionTypes";
import {Post} from "../types/Post";
import {DataAction} from "../types/GenericActions";

export interface PostsState {
    posts: Post[];
    isLoading: boolean;
    errorLoading?: string
}

const defaultState: PostsState = {
    posts: [],
    isLoading: false
};

export const postsReducer = (state = defaultState, action: PostActions) => {
    switch (action.type) {
        case PostActionTypes.FetchingPostsStarted:
            return {...state, isLoading: true};
        case PostActionTypes.FetchingPostsFailed:
            let failureAction = action as DataAction<PostActionTypes, string>;
            return {...state, isLoading: false, errorLoading: failureAction.data};
        case PostActionTypes.FetchingPostsSuccessful:
            let successfulAction = action as DataAction<PostActionTypes, Post[]>;
            return {...state, isLoading: false, posts: successfulAction.data};
        default: return state
    }
};