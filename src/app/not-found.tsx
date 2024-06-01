import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col mx-auto items-center min-h-screen gap-4">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
