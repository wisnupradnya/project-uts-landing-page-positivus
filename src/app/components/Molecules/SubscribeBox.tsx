// molecules/SubscribeBox.tsx

import Button from "../Attom/Button";
import Input from "../Attom/Input";

export default function SubscribeBox() {
  return (
    <div className="bg-[#1F1F2A] p-6 rounded-xl flex flex-col md:flex-row gap-4 items-center w-full md:max-w-md">
      <Input type="email" placeholder="Email" />
      <Button>Subscribe To News</Button>
    </div>
  );
}
