import { FC } from "react";

interface BadgeProps {
  badge: { text: string; icon: string };
  translatedData: { [key: string]: string };
}

const Badge: FC<BadgeProps> = ({ badge, translatedData }) => {
  return (
    <div className="bg-light-blue flex justify-center items-center flex-col drop-shadow-lg text-center gap-1 px-2 pt-4 pb-2 rounded-3xl lg:max-w-36">
      <img src={badge.icon} alt={`badge-${badge.text}`} className="w-16" />
      <div className="flex w-full h-full justify-center items-center">
        <p className="mx-2 min-h-8">{translatedData.toString()}</p>
      </div>
    </div>
  );
};

export default Badge;
