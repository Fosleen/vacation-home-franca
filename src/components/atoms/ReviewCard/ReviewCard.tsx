import { FC } from "react";

interface ReviewProps {
  translatedData: { [key: string]: string };
}

const ReviewCard: FC<ReviewProps> = ({ translatedData }) => {
  return (
    <div className="min-w-48 min-h-48 max-w-96 w-fit flex justify-center p-8 rounded-lg bg-middle-blue mr-8 text-center items-center text-base">
      {translatedData.toString()}
    </div>
  );
};

export default ReviewCard;
