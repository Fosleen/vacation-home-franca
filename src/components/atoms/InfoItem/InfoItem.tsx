import iconInfo from "../../../assets/icons/info-fa-icon.png";

const InfoItem = () => {
  return (
    <div className="flex flex-row gap-4 items-center lg:gap-8">
      <img src={iconInfo} alt="info-icon" className="w-8 h-8 md:w-12 md:h-12" />
      <div className="flex flex-col gap-4 md:gap-0">
        <p>Dozvoljen je boravak kućnih ljubimaca i ne naplaćuje se.</p>
        <p>Pušenje u apartmanu nije dozvoljeno.</p>
        <p>
          U ovom objektu nije moguće održavanje momačkih, djevojačkih i sličnih
          zabava.
        </p>
      </div>
    </div>
  );
};

export default InfoItem;
