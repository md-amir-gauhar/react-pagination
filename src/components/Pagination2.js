import React from 'react'

const Pagination2 = ({ pageNumber, setCurrentPage, totalPosts, postsPerPage }) => {
  const totalPage = Math.ceil(totalPosts / postsPerPage)
  const increasePageNumber = () => {
    if (pageNumber === totalPage) return
    setCurrentPage(pageNumber + 1)
  }

  const decreasePageNumber = () => {
    if (pageNumber == 1) return
    setCurrentPage(pageNumber - 1)
  }

  return (
    <div className="pagination2">
      <button onClick={decreasePageNumber}><i class="fas fa-chevron-left"></i></button>
      <span>{pageNumber}</span>
      <button onClick={increasePageNumber}><i class="fas fa-chevron-right"></i></button>
    </div>
  )
}

export default Pagination2
