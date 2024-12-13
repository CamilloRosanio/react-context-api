// UTILITY
import { usePostsContext } from "../contexts/PostsContext";
import PostCard from "./PostCard";


// COMPONENT EXPORT

export default function PostsList() {

    // ATTENZIONE !!!
    // Lo USE-CONTEXT può essere importato solo all'INTERNO del Body di un COMPONENT, quindi mai al di fuori dell'EXPORT DEFAULT

    // IMPORT CONTEXT
    // uso il DESTRUCTURING sullo USE-CONTEXT, ed è come se stessi destrutturando il VALUE del PROVIDER (che in questo caso è un OBJECT) da cui prendo la sua PROPERTY "postsList"
    const { postsList } = usePostsContext();
    console.log(postsList);

    return <>
        <div className="container debug">

            <div className="row">
                {postsList.map(post =>
                    <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                    />
                )}
            </div>
        </div>
    </>
}