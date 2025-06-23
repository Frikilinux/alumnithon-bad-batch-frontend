interface CheckboxFilterProps {
  name: string
  label: string
  value: boolean
  onChange: (name: string, value: boolean) => void
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({
  name,
  label,
  value,
  onChange,
}) => (
  <label className='redio-inline-flex cursor-pointer items-center space-x-2'>
    <input
      type='checkbox'
      className='h-4 w-4 rounded text-blue-600 focus:ring-blue-500'
      checked={value}
      onChange={(e) => onChange(name, e.target.checked)}
    />
    <span className='text-gray-700'>{label}</span>
  </label>
)

export default CheckboxFilter
