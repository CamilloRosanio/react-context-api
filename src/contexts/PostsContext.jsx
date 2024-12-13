// # UTILITY
const { createContext, useContext } = require('react');

// # CONTEXT VARIABLE
const PostsContext = createContext();

// # CONTEXT DATA
// E' BEST-PRACTICE utilizzare un OBJECT come dati del CONTEXT da inserire nel PROVIDER
const PostsData = {
    PostsList: [
        'data'
    ],
}

// # PROVIDER EXPORT
export const PostsContextProvider = ({ children }) => {
    return <>
        <PostsContext.Provider value={PostsData}>{children}</PostsContext.Provider>
    </>
}

// # USE-CONTEXT EXPORT
export const usePostsContext = () => useContext(PostsContext);
