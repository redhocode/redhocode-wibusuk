import { Skeleton } from "@/components/ui/skeleton";
import PacmanLoader from "react-spinners/PacmanLoader";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <PacmanLoader color="#29b6fb" size={70} speedMultiplier={2} />
      </div>
    </>
  );
}
