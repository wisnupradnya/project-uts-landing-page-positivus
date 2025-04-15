import Image from "next/image";
export default function Proposal() {
  return (
    <div className="bg-white px-20 py-20">
      <div className="flex items-center justify-between bg-gray-200 rounded-3xl px-15 py-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 text-left leading-tight mb-4">
            Let’s make things happen
          </h1>

          <p className="text-sm text-black">
            Contact us today to learn more about how our digital
            <br />
            marketing services can help your business grow and
            <br />
            succeed online.
          </p>
          <button className="mt-10 border border-black text-white px-4 py-2 rounded-lg bg-black">
            Get your free proposal
          </button>
        </div>
        <Image src="/Frame1.png" alt="logo" width={300} height={0} />
      </div>
    </div>
  );
}
