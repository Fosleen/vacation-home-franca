import stariGradOzalj from "../assets/images/stari-grad-ozalj.jpg";
import wrcOzalj from "../assets/images/wrc-ozalj.jpg";
import strudlafest from "../assets/images/strudlafest.jpg";
import karlovac from "../assets/images/karlovac.jpg";
import { LandmarkProps } from "../common/types";

export const landmarksData: Array<LandmarkProps> = [
  {
    title: "Istraži Ozalj",
    description:
      "Istražite bogatu povijest i kulturno naslijeđe ovog slikovitog gradića smještenog na obalama rijeke Kupe. Zavirite u svijet Zrinskih i Frankopana prilikom posjete Starom gradu Ozlju.",
    img: stariGradOzalj,
    url: "https://ozalj.hr/",
  },
  {
    title: "WRC rally",
    description:
      "Kuća se nalazi u blizini rute WRC rallya te je stoga idealan izbor i za ljubitelje brze vožnje i adrenalina.",
    img: wrcOzalj,
    url: "https://rally-croatia.com/hr/",
  },
  {
    title: "štrudlafest",
    description:
      "Svi posjetitelji ljubitelji slatkog uživat će u čarima najbolje štrudle na svijetu. Jaškovo - selo štrudle oborilo je Guinessov rekord za najdužu štrudlu!",
    img: strudlafest,
    url: "https://strudlafest.com/",
  },
  {
    title: "Grad na 4 rijeke",
    description:
      "Istražite čari grada na četiri rijeke. Prošećite kroz staru gradsku jezgru,  posjetite Stari grad Dubovac, otkrijte obalu rijeke Korane.",
    img: karlovac,
    url: "https://visitkarlovac.hr/",
  },
];
