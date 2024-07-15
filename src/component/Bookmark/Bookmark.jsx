import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className="text-3x">{title}</h3>
        </div>
    );
};


Bookmark.protoTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;