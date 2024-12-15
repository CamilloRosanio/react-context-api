/*****************************************************
# NOTE
/*****************************************************/
/*
E' BEST-PRACTICE utilizzare un OBJECT rispetto a un Array come dati del CONTEXT da inserire nel PROVIDER, nel qual caso io debba aggiungere ulteriori info.

IMPORT DATA (interno al COMPONENT):
E' fondamentale che i dati siano importati all'INTERNO del PROVIDER per evitare errori di ASYNC. Importandoli sopra, i dati potrebbero NON essere caricati al MOUNTING del COMPONENT.
Il provider "abbraccerà" tutti i suoi CHILDREN, a cui verranno resi disponibili i dati del VALUE.

Lo USE-CONTEXT sarà importato in ciascun COMPONENT in cui saranno necessari i dati del CONTEXT
*/




/*****************************************************
# CONTEXT
/*****************************************************/

// # UTILITY
import { createContext, useContext, useState, useEffect } from 'react';

// ENV IMPORTS
const apiUrlRoot = import.meta.env.VITE_APIURL;
const apiSubPath = import.meta.env.VITE_SUBPATH;

// # CONTEXT VARIABLE
const PostsContext = createContext();

// # PROVIDER EXPORT
export const PostsContextProvider = ({ children }) => {

    // STATIC ARRAY
    const arrayPostsData = {
        postsList: [
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
    };

    // // USE-STATE DATA (FETCH)
    // const [postsData, setPostsData] = useState({
    //     postsList: [],
    // });

    // // INIT USE-EFFECT
    // useEffect(() => {
    //     crudIndex();

    //     console.log(postsData)
    // }, []);

    // // # CRUD - INDEX
    // const crudIndex = () => {
    //     fetch(apiUrlRoot + apiSubPath + '?term=', {
    //         method: 'GET',
    //     })
    //         .then(res => res.json())
    //         .then((data) => {

    //             const fetchedPostsList = data.elements.map((post) => ({
    //                 id: post.id,
    //                 category: post.category,
    //                 title: post.title,
    //                 content: post.content,
    //                 img: post.img,
    //             }));

    //             const newPostsList = { ...postsData, postsList: fetchedPostsList, };
    //             setPostsData(newPostsList);
    //             console.log('CRUD executed: at ' + apiUrlRoot + apiSubPath);
    //         })
    //         .catch((error) => {
    //             console.log('Error while fetching content')
    //         })
    // };

    console.log(arrayPostsData.postsList);

    return <>
        <PostsContext.Provider value={arrayPostsData}>{children}</PostsContext.Provider>
    </>
}

// # USE-CONTEXT EXPORT
export const usePostsContext = () => useContext(PostsContext);
