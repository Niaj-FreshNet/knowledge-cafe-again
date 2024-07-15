import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs';
import Bookmarks from './component/Bookmarks/Bookmarks';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }

  // remove the readed blog from bookmark
  // console.log('remove bookmark', id)
  // const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  // setBookmarks(remainingBookmarks);

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} 
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} 
        readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
