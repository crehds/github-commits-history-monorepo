import { Commit } from "../dto/commits.dto";

interface Props {
  commit: Commit;
}

function CommitItem({commit}: Props) {
  return (
    <div>
      <p>{commit.commit.message}</p>
    </div>
  );
}

export default CommitItem;