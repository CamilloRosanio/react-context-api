// # UTILITY
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

// # CONTEXTS
import { PostsContextProvider } from "./contexts/PostsContext";

// # LAYOUTS
import DefaultLayout from "./layouts/DefaulLayout";


// # PAGES
import NotFoundPage from "./pages/NotFoundPage";
import PostsPage from "./pages/PostsPage";
import AboutPage from "./pages/AboutPage";

const user = 'abc';



function App() {
  return (
    <>

      {/* Il provider fornisce i suoi dati a tutti i componenti CHILD che contiene. */}
      <PostsContextProvider>

        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={PostsPage}></Route>
              <Route path="/about" Component={AboutPage}></Route>

              <Route path="*" Component={NotFoundPage}></Route>
            </Route>
          </Routes>
        </BrowserRouter >

      </PostsContextProvider>
    </>
  )
}

export default App
