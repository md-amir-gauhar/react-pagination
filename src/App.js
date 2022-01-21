import { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

import './App.css';
import Pagination2 from './components/Pagination2';


function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json();
      setPosts(data);
      setLoading(false)
    }
    fetchPosts()
  }, [])

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = posts.slice(firstIndex, lastIndex)

  const paginate = (currentPage) => setCurrentPage(currentPage)

  return (
    <div div className="app" >
      <h1>React Pagination</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} paginate={paginate} />
      {/* <Pagination2 pageNumber={currentPage} setCurrentPage={setCurrentPage} totalPosts={posts.length} postsPerPage={postsPerPage} /> */}
    </div>
  );
}

export default App;
