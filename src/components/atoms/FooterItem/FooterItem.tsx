import { FC } from "react";
import { Link } from "react-router-dom";

const FooterItem: FC<{
  item: { data: Array<{ url: string; name: string; icon?: string }> };
}> = ({ item }) => {
  return (
    <div className="text-light-blue flex flex-col justify-center wrap items-center text-center gap-4 text-lg md:text-base md:text-left md:justify-start md:items-start">
      {item.data.map((data, index) => (
        <Link
          to={data.url}
          key={index}
          className="flex items-center gap-2"
          target={data.url.charAt(0) == "/" ? "_self" : "_blank"}
        >
          {data.icon && <img src={data.icon} alt={data.icon} />}
          {data.icon && " "}
          {data.name}
        </Link>
      ))}
    </div>
  );
};

export default FooterItem;
