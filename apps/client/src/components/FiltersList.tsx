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
    <div>
      <label>
        Per page:
        <input type="number" value={perPage} onChange={(e) => setPerPage(e.target.value)} />
      </label>
      <label>
        Since:
        <input type="text" value={since} onChange={(e) => setSince(e.target.value)} />
      </label>
      <label>
        Until:
        <input type="text" value={until} onChange={(e) => setUntil(e.target.value)} />
      </label>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default FiltersList;





