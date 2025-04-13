import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white px-20 py-20">
      <div className="flex items-start justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-800 text-left leading-tight mb-4">
            Navigating the
            <br />
            digital landscape
            <br />
            for success
          </h1>
          <p className="text-sm text-black text-left leading-snug">
            Our digital marketing agency helps businesses
            <br />
            grow and succeed online through a range of
            <br />
            services including SEO, PPC, social media marketing,
            <br />
            and content creation.
          </p>
          <button className="mt-10 border border-black text-white px-4 py-2 rounded-lg bg-black">
            Book a Consultation
          </button>
        </div>
        <Image src="/home.png" alt="Logo" width={300} height={0} />
      </div>
    </div>
  );
}
