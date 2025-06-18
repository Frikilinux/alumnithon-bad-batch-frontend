const Error = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-4xl font-bold text-red-600'>404 - Page Not Found</h1>
      <p className='mt-4 text-lg text-gray-700'>
        The page you are looking for does not exist.
      </p>
    </div>
  )
}
export default Error
