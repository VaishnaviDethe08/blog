import "./BlogView.css"
import { useParams } from "react-router-dom" 
import blogs from "./../../data"


 function BlogView() {
    const {id} = useParams()

    const selectedBlog = blogs.find((blogObject)=>blogObject.id===id)
    return (
        <div>
            <h1 className="blog-view-title">{selectedBlog.title}</h1>
            <p>
                <img src={selectedBlog.author.avatar} alt="author" className="blog-view-image"/>
            </p>
            <p className="blog-view-author">{selectedBlog.author.name} | {selectedBlog.date}

            </p>
            <p className="blog-view-containt">
            {selectedBlog.content}
            </p>
        </div>
    )
 }

  export default BlogView