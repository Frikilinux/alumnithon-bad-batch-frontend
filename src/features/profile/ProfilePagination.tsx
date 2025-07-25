import React from 'react'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className='mt-6 flex items-center justify-center gap-2'>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className='rounded bg-gray-200 px-3 py-1 disabled:opacity-50'>
        ◀
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`rounded px-3 py-1 ${
            page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className='rounded bg-gray-200 px-3 py-1 disabled:opacity-50'>
        ▶
      </button>
    </nav>
  )
}

export default Pagination
