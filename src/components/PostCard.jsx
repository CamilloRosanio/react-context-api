// UTILITY
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

// ENV IMPORTS
const apiUrlRoot = import.meta.env.VITE_APIURL;
const apiSubPath = import.meta.env.VITE_SUBPATH;

// COMPONENT EXPORT

export default function PostCard({ id, title, content }) {

    const navigate = useNavigate();

    return <>
        <div className="col-4 debug">
            <div className="d-flex flex-column">
                <h3 className="h4 d-block mb-0">{title}</h3>
                <p className="mb-2">{'ID: ' + id}</p>
                <p className="mb-2">{content}</p>
                {/* <button type="button" className="btn btn-primary w-50" onClick={() => (navigate('/' + apiSubPath + id))}>Show details</button> */}
            </div>
        </div>
    </>
}