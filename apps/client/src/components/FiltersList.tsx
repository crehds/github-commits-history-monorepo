import { useState } from 'react';
import { Filters } from '../dto/filters.dto';
import { INITIAL_FILTERS } from '../constants/filters';
import FilterItem from './FilterItem';

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
        <FilterItem value={perPage} onChange={(e) => setPerPage(e.target.value)} label='Per page' type='number' />
        <FilterItem value={since} onChange={(e) => setSince(e.target.value)} label='Since' type='date' />
        <FilterItem value={until} onChange={(e) => setUntil(e.target.value)} label='Until' type='date' />
        <button onClick={handleFilter}>Filter</button>
      </div>
    </div>
  );
}

export default FiltersList;





