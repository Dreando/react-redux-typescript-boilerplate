import React, {Component, ReactNode} from 'react';
import {fetchPosts} from "../actions/PostsActions";
import {connect} from "react-redux";
import {AppState} from "../types/AppState";
import {PostsState} from "../reducers/PostsReducer";
import {ThunkDispatch} from "redux-thunk";
import {AppActions} from "../types/AppActions";
import {bindActionCreators} from "redux";
import './PostsList.scss'
import BriefPost from "./BriefPost";

interface OwnProps {
}

interface StateProps {
    posts: PostsState;
}

interface DispatchProps {
    fetchPosts: typeof fetchPosts
}

type Props = OwnProps & StateProps & DispatchProps;

interface State {
}

class PostsList extends Component<Props, State> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.props.posts.isLoading) {
            return (
                <div>Loading posts...</div>
            )
        }
        return (
            <div className="PostsList">
                {this.renderPosts()}
            </div>
        );
    }

    private renderPosts() {
        const posts = this.props.posts;
        if (posts.errorLoading) {
            return (
                <div className="PostsList__Error">Error: {posts.errorLoading}</div>
            )
        } else {
            return (
                posts.posts.map(post => <BriefPost post={post}/>)
            )
        }
    }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => ({
    posts: state.posts
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): DispatchProps => ({
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);