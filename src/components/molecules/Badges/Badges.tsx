import { badgesData } from "../../../data/BadgesData";
import Badge from "../../atoms/Badge";

const Badges = () => {
  return (
    <div className="w-full px-8">
      <div className="max-w-screen-xl mx-auto grid gap-4 grid-cols-2 grid-rows-3 mt-8 xs:grid-cols-3 xs:grid-rows-2 lg:grid-rows-1 lg:grid-cols-6">
        {badgesData.map((badge) => (
          <Badge badge={badge} />
        ))}
      </div>
    </div>
  );
};

export default Badges;
