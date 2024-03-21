import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-slate-400 ml-2 mt-4 p-4 my-auto rounded-md">
            <div>
                <h3 className="text-3xl font-bold border-b-2 pb-2">Reading Time : {readingTime}</h3>
            </div>
            <h2 className="text-3xl font-bold text-center pt-2">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;