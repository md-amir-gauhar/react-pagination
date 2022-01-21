import React from 'react'

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <div className="pagination">
      {
        pageNumbers.map(number => (
          <button onClick={() => paginate(number)} >{number}</button>
        ))
      }
    </div >
  )
}

export default Pagination
