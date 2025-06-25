// import { IconUsersGroup } from '@tabler/icons-react'
import { useNavigate } from 'react-router'
import type { Icon as TablerIcon } from '@tabler/icons-react'

interface PageBannerProps {
  type: string
  title: string
  description: string
  icon: TablerIcon
  primaryBtn: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
  }
}

const PageBanner = (props: PageBannerProps) => {
  const navigate = useNavigate()
  const { title, description, primaryBtn, secondaryButton, icon: Icon } = props

  const handleClick = (url: string) => {
    navigate(url)
  }

  return (
    <section className='flex w-full flex-col items-center bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white'>
      <div className='m-2 flex flex-col-reverse items-center md:m-8 md:flex-row'>
        <div className='mb-8 md:mb-0 md:w-1/2'>
          <h1 className='mb-4 text-center text-3xl font-bold md:text-left md:text-5xl'>
            {title}
          </h1>
          <p className='mb-6 text-center text-xl md:text-left'>{description}</p>
          <div className='flex flex-wrap justify-center gap-6 md:justify-start'>
            <button
              onClick={() => handleClick(primaryBtn.href)}
              type='button'
              className='hover:bg-primary-50 rounded-lg bg-white px-6 py-3 font-medium text-blue-700 transition'>
              {primaryBtn.text}
            </button>
            <button
              onClick={() => handleClick(secondaryButton.href)}
              type='button'
              className='hover:bg-primary-700 rounded-lg border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition'>
              {secondaryButton.text}
            </button>
          </div>
        </div>
        <div className='flex justify-center md:w-1/2'>
          <Icon className='size-48 md:size-64' />
        </div>
      </div>
    </section>
  )
}

export default PageBanner
