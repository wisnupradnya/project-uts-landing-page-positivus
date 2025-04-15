import { BsStarFill } from "react-icons/bs";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <BsStarFill className="text-2xl text-white" />
      <h2 className="text-2xl font-bold">Positivus</h2>
    </div>
  );
}
