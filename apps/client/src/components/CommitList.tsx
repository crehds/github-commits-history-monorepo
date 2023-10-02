import { Filters } from "../dto/filters.dto";
import { useGetCommits } from "../hooks/useGetCommits";
import { Spinner } from "../spinners/spinner";
import CommitItem from "./CommitItem";
import FiltersList from "./FiltersList";

function CommitList() {
  const {commits, isLoading, error, handleCommits} = useGetCommits();
  const onFilter = (filters: Filters) => {
    handleCommits(filters);
  };

  return (
    <div className="flex flex-col justify-center gap-3 items-center">
      <h1 className="tracking-wide text-5xl">Commits</h1>
      <FiltersList onFilter={onFilter} />
      {isLoading && <Spinner />}
      {error ? <p>Error</p> : null}
      <ul>
        {commits.map((commit) => (
          <CommitItem key={commit.sha} commit={commit} />
        ))}
      </ul>
    </div>
  );
}

export default CommitList;