import { useEffect, useState } from "react"
import { getBlogs } from "../../services/blogService";
import "./Blog.scss"
function Blog() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getBlogs();
            setData(res);
        }
        fetchApi();
    }, [])
    return (
        <>
            <div className="blog">
                <div className="blog__container">
                    <h2 className="blog__title">Bài viết mới nhất</h2>
                    <div className="blog__list">
                        {data.map((blog) => (
                            <div key={blog.id} className="blog__item">
                                <img src={blog.image} alt={blog.title} className="blog__image" />
                                <div className="blog__content">
                                    <h3 className="blog__item-title">{blog.title}</h3>
                                    <p className="blog__meta">
                                        <span className="blog__author">✍ {blog.author}</span> | 📅{" "}
                                        <span className="blog__date">{blog.date}</span>
                                    </p>
                                    <p className="blog__description">{blog.content}</p>
                                    <div className="blog__tags">
                                        {blog.tags.map((tag, index) => (
                                            <span key={index} className="blog__tag">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog