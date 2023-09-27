import { Filters } from "../dto/filters.dto";
import { useGetCommits } from "../hooks/useGetCommits";
import CommitItem from "./CommitItem";
import FiltersList from "./FiltersList";

function CommitList() {
  const {commits, handleCommits} = useGetCommits();
  const onFilter = (filters: Filters) => {
    handleCommits(filters);
  };

  return (
    <div className="flex flex-col justify-center gap-3">
      <h1 className="tracking-wide text-5xl">Commits</h1>
      <FiltersList onFilter={onFilter} />
      <ul>
        {commits.map((commit) => (
          <CommitItem key={commit.sha} commit={commit} />
        ))}
      </ul>
    </div>
  );
}

export default CommitList;