interface SelectFilterProps {
  name: string
  label: string
  options: string[]
  value: string
  onChange: (name: string, value: string) => void
}

const SelectFilter: React.FC<SelectFilterProps> = ({
  name,
  label,
  options,
  value,
  onChange,
}) => (
  <div className='w-full'>
    <label className='mb-1 block text-sm font-medium text-gray-700'>
      {label}
    </label>
    <select
      className='w-full rounded border px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none'
      value={value}
      onChange={(e) => onChange(name, e.target.value)}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
)

export default SelectFilter
