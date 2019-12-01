import React from "react";
import './BriefPost.scss'
import {Post} from "../types/Post";

interface OwnProps {
    post: Post;
}

interface OwnState {
}

export default class BriefPost extends React.Component<OwnProps, OwnState> {
    render() {
        return (
            <div className="Post">
                <div className="Post__Meta">
                    <div>Created by: {this.props.post.userId}</div>
                    <div>ID: {this.props.post.id}</div>
                </div>
                <div className="Post__Title">
                    {this.props.post.title}
                </div>
                <div className="Post__Body">
                    {this.props.post.body}
                </div>
            </div>
        );
    }
}