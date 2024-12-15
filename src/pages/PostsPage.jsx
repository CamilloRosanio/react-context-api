// UTILITY
import PostsList from "../components/PostsList";

// COMPONENT EXPORT

export default function PostsPage() {
    return <>
        <div className="container">
            <h1 className="debug m-0">Posts</h1>
            <PostsList />
        </div>
    </>
}