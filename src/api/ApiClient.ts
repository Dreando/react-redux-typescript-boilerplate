import {Post} from "../types/Post";

export interface FetchPostsResponse {
    posts: Post[],
    error?: string
    hasErrors: boolean
}

export const fetchPostsCall = (): Promise<FetchPostsResponse> => {
    return api<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .then(posts => {
            return {
                posts: posts,
                hasErrors: false
            }
        }).catch(error => {
            return {
                posts: [],
                error: error.message,
                hasErrors: true
            }
        })
};

function api<T>(url: string): Promise<T> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<T>
        })
}