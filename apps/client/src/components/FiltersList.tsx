import { useState } from 'react';
import { Filters } from '../dto/filters.dto';
import { INITIAL_FILTERS } from '../constants/filters';

interface Props {
  onFilter: (filters: Filters) => void;
}

function FiltersList({ onFilter: onFilter }: Props) {
  const [perPage, setPerPage] = useState<string|number>(INITIAL_FILTERS.perPage);
  const [since, setSince] = useState(INITIAL_FILTERS.since);
  const [until, setUntil] = useState(INITIAL_FILTERS.until);

  const handleFilter = () => {
    onFilter({ perPage, since, until });
  };

  return (
    <div className='flex justify-center'>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col gap-3 px-4 pt-6 pb-1">
        <label className='grid gap-3 grid-cols-[1fr_2fr]'>
          <p className='text-center p-1 font-bold' >Per page</p>
          <input type="number" value={perPage} onChange={(e) => setPerPage(e.target.value)} className='border border-red-50 border-solid rounded-md px-3 py-1'/>
        </label>
        <label className='grid gap-3 grid-cols-[1fr_2fr]'>
          <p className='text-center p-1 font-bold'>Since</p>
          <input type="date" value={since} onChange={(e) => setSince(e.target.value)} className='border border-red-50 border-solid  rounded-md px-3 py-1'/>
        </label>
        <label className='grid gap-3 grid-cols-[1fr_2fr]'>
          <p className='text-center p-1 font-bold'>Until</p>
          <input type="date" value={until} onChange={(e) => setUntil(e.target.value)} className='border border-red-50 border-solid  rounded-md px-3 py-1'/>
        </label>
        <button onClick={handleFilter}>Filter</button>
      </div>
    </div>
  );
}

export default FiltersList;





