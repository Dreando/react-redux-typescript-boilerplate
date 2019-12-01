import {DataAction, MarkerAction} from "../types/GenericActions";

export enum PostActionTypes {
    FetchingPostsStarted,
    FetchingPostsSuccessful,
    FetchingPostsFailed,
}

export type PostActions =
    MarkerAction<PostActionTypes> |
    DataAction<PostActionTypes, any>