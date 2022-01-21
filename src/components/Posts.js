import React from 'react'

const Posts = ({ posts, loading }) => {
  if (loading) return <h2>Loading...</h2>
  return (
    <div className="posts">
      {posts.map(post => (
        <h3>{post.title}</h3>
      ))
      }
    </div>
  )
}

export default Posts
