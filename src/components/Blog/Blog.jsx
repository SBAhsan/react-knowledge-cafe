import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const { id, author_img, author, title, cover_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-8 border-b-2 pb-8'>
            <img className='w-full mb-8' src={cover_img} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-5 items-center pb-6'>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div>
                        <b><h3 className="text-xl">{author}</h3></b>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='mr-2'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)}><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            <b><h2 className="text-4xl mb-8">{title}</h2></b>
            <p className='mb-5'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='ml-2' href="">{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className='text-blue-800 font-bold underline ml-2'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;