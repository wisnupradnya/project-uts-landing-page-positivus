import Image from "next/image";

type ServiceCardProps = {
  variant: "gray" | "green" | "black";
  texts: {
    line1: string;
    line2?: string;
  };
  illustration: string;
};

function ServiceCard({ variant, texts, illustration }: ServiceCardProps) {
  const colors = (() => {
    if (variant === "black") {
      return {
        bgColor: "#191A23",
        arrowColor: "#191A23",
        learnMoreColor: "#FFFFFF",
        textBgColor: "#FFFFFF",
        textColor: "#191A23",
        arrowBgColor: "#FFFFFF",
      };
    }
    if (variant === "gray") {
      return {
        bgColor: "#F3F3F3",
        arrowColor: "#B9FF66",
        learnMoreColor: "#191A23",
        textBgColor: "#B9FF66",
        textColor: "#191A23",
        arrowBgColor: "#191A23",
      };
    }

    // variant === "green"
    return {
      bgColor: "#B9FF66",
      arrowColor: "#B9FF66",
      learnMoreColor: "#191A23",
      textBgColor: "#FFFFFF",
      textColor: "#191A23",
      arrowBgColor: "#191A23",
    };
  })();

  return (
    <div
      className="rounded-[20px] border border-[#191A23] shadow-service-card p-8 font-space-grotesk"
      style={{ backgroundColor: colors.bgColor }}
    >
      <div className="flex justify-between gap-2.5 items-center">
        <div>
          <div className="flex flex-col items-start">
            <p
              className="px-2 py-0.5 text-xl rounded-md font-bold"
              style={{
                backgroundColor: colors.textBgColor,
                color: colors.textColor,
              }}
            >
              {texts.line1}
            </p>
            {texts?.line2 && (
              <p
                className="px-2 py-0.5 text-xl rounded-md font-bold"
                style={{
                  backgroundColor: colors.textBgColor,
                  color: colors.textColor,
                }}
              >
                {texts.line2}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3 mt-10">
            <div
              className="w-8 rounded-full"
              style={{ backgroundColor: colors.arrowBgColor }}
            >
              <svg
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: colors.arrowColor }}
              >
                <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" />
              </svg>
            </div>
            <p style={{ color: colors.learnMoreColor }}>Learn More</p>
          </div>
        </div>
        <div>
          <Image
            src={illustration}
            className="max-w-[150px]"
            width={150}
            height={150}
            alt="service illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
