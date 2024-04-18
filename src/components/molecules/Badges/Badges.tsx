import { badgesData } from "../../../data/BadgesData";
import Badge from "../../atoms/Badge";

const Badges = () => {
  return (
    <div className="w-full px-8 flex justify-center">
      <div className="max-w-screen-xl mx-auto inline-grid gap-6 grid-cols-2 grid-rows-3 mt-12 xs:grid-cols-3 xs:grid-rows-2 lg:grid-rows-1 lg:grid-cols-6 lg:gap-8">
        {badgesData.map((badge) => (
          <Badge badge={badge} />
        ))}
      </div>
    </div>
  );
};

export default Badges;
