// COMPONENT EXPORT

export default function PostCard({ id, title, content }) {
    return <>
        <div className="col-4 debug">
            <div className="d-flex flex-column">
                <h3 className="h5 d-block mb-2">{'ID: ' + id + ' ' + title}</h3>
                <p>{content}</p>
            </div>
        </div>
    </>
}