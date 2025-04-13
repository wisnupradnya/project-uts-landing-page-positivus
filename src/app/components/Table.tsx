import ServiceCard from "./ServiceCard";

export default function Table() {
  return (
    <div className="px-20 mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
        <ServiceCard
          variant="gray"
          texts={{ line1: "Search engine", line2: "optimization" }}
          illustration="/magnifier-image.png"
        />
        <ServiceCard
          variant="green"
          texts={{ line1: "Pay-per-click", line2: "advertising" }}
          illustration="/select-image.png"
        />
        <ServiceCard
          variant="black"
          texts={{ line1: "Social media", line2: "Marketing" }}
          illustration="/emoji-image.png"
        />
        <ServiceCard
          variant="gray"
          texts={{ line1: "Email", line2: "Marketing" }}
          illustration="/sending-image.png"
        />
        <ServiceCard
          variant="green"
          texts={{ line1: "Content", line2: "Creation" }}
          illustration="/browser-image.png"
        />
        <ServiceCard
          variant="black"
          texts={{ line1: "Analytics and", line2: "Tracking" }}
          illustration="/matric-image.png"
        />
      </div>
    </div>
  );
}
