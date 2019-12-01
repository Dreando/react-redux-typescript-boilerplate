export interface DataAction<T, R> {
    type: T,
    data: R
}

export interface MarkerAction<T> {
    type: T
}