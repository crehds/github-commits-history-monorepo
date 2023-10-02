interface Props {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
}


function FilterItem({ value, onChange, label, type = 'text' }: Props) {
  return (
    <label className='grid gap-3 grid-cols-[1fr_2fr]'>
          <p className='text-center p-1 font-bold' >{label}</p>
          <input type={type} value={value} onChange={onChange} className='border border-red-50 border-solid rounded-md px-3 py-1'/>
        </label>
  );
}
export default FilterItem;