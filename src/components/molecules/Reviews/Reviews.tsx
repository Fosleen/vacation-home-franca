// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Marquee from "react-fast-marquee";
import { reviewData } from "../../../data/ReviewData";
import ReviewCard from "../../atoms/ReviewCard";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import hrData from "../../../i18n/hr.json";
import enData from "../../../i18n/en.json";
import { LocaleContext } from "../../../i18n/LocaleContext";

const Reviews = () => {
  const { locale } = useContext(LocaleContext);
  const data = locale === "hr" ? hrData : enData;

  return (
    <div className="w-full mt-8">
      <div className="flex-col flex">
        <h2
          className="text-2xl font-bold text-grey-blue uppercase text-center px-8 mt-8
max-w-screen-xl mx-auto md:text-left"
        >
          <FormattedMessage id="reviews.title" />
        </h2>
        <Marquee className="my-2" pauseOnClick={true} play={true} speed={15}>
          {reviewData.map((el, index) => (
            <ReviewCard key={index} translatedData={data.reviews[index + 1]} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
