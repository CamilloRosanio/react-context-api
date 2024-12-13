// # UTILITY
import { createContext, useContext } from 'react';

// # CONTEXT VARIABLE
const PostsContext = createContext();

// # CONTEXT DATA
// E' BEST-PRACTICE utilizzare un OBJECT come dati del CONTEXT da inserire nel PROVIDER
const PostsData = {
    PostsList: [
        {
            id: 2,
            category: 'Recipes',
            title: 'Ciambellone',
            content: 'Delizioso ciambellone',
            img: `ciambellone.jpeg`,
            tags: ['ciambellone', 'Dolce', 'Torte'],
            published: true,
        },
        {
            id: 4,
            category: 'Recipes',
            title: 'Cracker di barbabietola',
            content: 'Preparazione cracker di barbabietola',
            img: `cracker_barbabietola.jpeg`,
            tags: ['barbabietola', 'Cracker', 'impasto', 'salato'],
            published: true,
        },
        {
            id: 50,
            category: 'Recipes',
            title: 'Pane fritto',
            content: 'Come fare il pane fritto',
            img: `pane_fritto_dolce.jpeg`,
            tags: ['dolce', 'Pane fritto'],
            published: true,
        },
        {
            id: 8,
            category: 'Recipes',
            title: 'Pasta di barbabietola',
            content: 'Come preparare la pasta alla barbabietola',
            img: `pasta_barbabietola.jpeg`,
            tags: ['barbabietola', 'pasta', 'impasto', 'salato'],
            published: true,
        },
        {
            id: 10,
            category: 'Recipes',
            title: 'Torta paesana',
            content: 'La torta paesana più buona',
            img: `torta_paesana.jpeg`,
            tags: ['torte', 'torta paesana', 'dolce'],
            published: true,
        }
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
