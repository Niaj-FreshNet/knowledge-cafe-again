import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    // console.log(blog)
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div>
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='font-bold'>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-2 text-2xl text-red-600'>
                        <FaBeer></FaBeer></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""># {hash}</a></span>)
                }
            </p>
            <button
            onClick={() => handleMarkAsRead(reading_time, id)}
            className='text-red-600 underline font-bold'>
                Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func

}

export default Blog;