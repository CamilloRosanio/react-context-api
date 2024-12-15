/*****************************************************
# NOTE
/*****************************************************/
/*
Lo USE-CONTEXT può essere importato solo all'INTERNO del Body di un COMPONENT, quindi mai al di fuori dell'EXPORT DEFAULT

Uso il DESTRUCTURING sullo USE-CONTEXT all'INTERNO del body, ed è come se stessi destrutturando il VALUE del PROVIDER (che in questo caso è un OBJECT) da cui prendo la sua PROPERTY "postsList".
*/



/*****************************************************
# COMPONENT
/*****************************************************/

// UTILITY
import { usePostsContext } from "../contexts/PostsContext";
import PostCard from "./PostCard";


// COMPONENT EXPORT

export default function PostsList() {

    // IMPORT CONTEXT
    const { postsList } = usePostsContext();

    return <>
        <div className="container debug">

            <div className="row">
                {postsList.lenght ?

                    postsList.map(post =>
                        <PostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            content={post.content}
                        />
                    )
                    : <h3 className="m-0">No posts available</h3>
                }

            </div>
        </div>
    </>
}