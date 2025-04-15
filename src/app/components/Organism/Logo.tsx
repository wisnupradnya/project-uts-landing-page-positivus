import Image from "next/image";

export default function Home() {
  return (
    <section className=" bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)] px-10">
      <div className="flex justify-between items-center px-10 py-10 ">
        <Image src="/logo.png" alt="foto" width={60} height={30} />
        <Image src="/logo-1.png" alt="foto1" width={60} height={30} />
        <Image src="/logo-2.png" alt="foto1" width={60} height={30} />
        <Image src="/logo-3.png" alt="foto1" width={60} height={30} />
        <Image src="/logo-4.png" alt="foto1" width={60} height={30} />
        <Image src="/logo-5.png" alt="foto1" width={60} height={30} />
      </div>
    </section>
  );
}
