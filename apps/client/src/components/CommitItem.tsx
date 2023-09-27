import { useState } from "react";
import { Commit } from "../dto/commits.dto";

interface Props {
  commit: Commit;
}

function CommitItem({commit}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{commit.commit.message}</h3>
        <button
          className="text-blue-500 hover:text-gray-500 focus:outline-none focus:underline focus:text-gray-300 transition duration-250 ease-in-out"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide" : "Show"}
        </button>
      </div>
      {
        isExpanded && (
          <div className="mt-4">
            <p className="text-blue-600">{commit.sha}</p>
            <p className="text-blue-600">{commit.commit.author.name}</p>
            <p className="text-blue-600">{commit.commit.author.email}</p>
            <p className="text-blue-600">{commit.commit.author.date}</p>
          </div>
        )
      }
    </div>
  );
}

export default CommitItem;