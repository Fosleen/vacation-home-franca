import { FC } from "react";

const Badge: FC<{ badge: { text: string; icon: string } }> = ({ badge }) => {
  return (
    <div className="bg-light-blue flex justify-center items-center flex-col drop-shadow-lg text-center gap-1 px-2 pt-4 pb-2 rounded-3xl lg:max-w-36">
      <img src={badge.icon} alt={`badge-${badge.text}`} className="w-16" />
      <div className="flex w-full h-full justify-center items-center">
        <p className="mx-2 min-h-8">{badge.text}</p>
      </div>
    </div>
  );
};

export default Badge;
