import { useCallback, useEffect, useState } from "react";
import { Commit, CommitDetails } from "../dto/commits.dto";
import { getCommitDetailsRequest } from "../services/commits";

interface Props {
  commit: Commit;
}

function CommitItem({commit}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commitDetails, setCommitDetails] = useState<CommitDetails>({ sha: '', files: []});

  const getCommitDetails = useCallback(async () => {
    const response = await getCommitDetailsRequest('github-commits-history-monorepo', commit.sha);
    const data = await response.json();
    setCommitDetails(data);
  }, [commit]);

  useEffect(() => {
    if (isExpanded) getCommitDetails();
  }, [isExpanded, getCommitDetails]);

  return (
    <div className="border rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center gap-3">
        <h3 className="text-lg font-medium">{commit.commit.message}</h3>
        <button
          className="text-blue-500 hover:text-gray-500 focus:outline-none focus:underline focus:text-gray-300 transition duration-250 ease-in-out p-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide" : "Show"}
        </button>
      </div>
      {
        isExpanded && (
          <div className="flex mt-4 justify-around">
            <div className="flex flex-col gap-2">
                <h3 className="font-bold">General information</h3>
                <p className="text-blue-600">{commit.sha}</p>
                <p className="text-blue-600">{commit.commit.author.name}</p>
                <p className="text-blue-600">{commit.commit.author.email}</p>
                <p className="text-blue-600">{commit.commit.author.date}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Changes</h3>
              {commitDetails.files.map((commitDetail) => (
                <div key={commitDetail.sha} className="border border-solid border-gray-500 rounded-md p-2">
                  <div className="flex gap-2"><p className="font-bold">File</p> {commitDetail.filename}</div>
                  <div className="flex gap-2"><p className="font-bold">Status</p> {commitDetail.status}</div>
                  <div className="flex gap-2"><p className="font-bold">Lines</p> {commitDetail.changes} | + {commitDetail.additions} | - {commitDetail.deletions}</div>
                </div>
                ))}
            </div>
          </div>
        )
      }
    </div>
  );
}

export default CommitItem;