interface TagFilterProps {
  name: string
  label: string
  options: string[]
  value: string[]
  onChange: (name: string, value: string[]) => void
}

const TagFilter: React.FC<TagFilterProps> = ({
  name,
  label,
  options,
  value,
  onChange,
}) => (
  <div className='w-full'>
    <h3 className='mb-2 font-semibold'>{label}</h3>
    <div className='flex flex-wrap gap-2'>
      {options.map((tag) => {
        const isActive = value.includes(tag)
        return (
          <button
            key={tag}
            type='button'
            className={`rounded-full border px-3 py-1 transition-colors ${
              isActive
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => {
              const updated = isActive
                ? value.filter((t) => t !== tag)
                : [...value, tag]
              onChange(name, updated)
            }}>
            {tag}
          </button>
        )
      })}
    </div>
  </div>
)
export default TagFilter
