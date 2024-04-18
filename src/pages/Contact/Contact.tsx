import { ArrowFatLeft, ArrowFatRight } from "@phosphor-icons/react";
import ContactForm from "../../components/atoms/ContactForm";

const Contact = () => {
  return (
    <div className="w-full mt-8 px-8">
      <div className="max-w-screen-xl mx-auto flex-col flex gap-4">
        <h2 className="text-2xl font-semibold text-grey-blue uppercase mb-4 text-center md:text-left">
          rezervirajte još danas
        </h2>
        <p>
          Imate pitanja oko smještaja ili želite rezervirati termin u kući za
          odmor Franca?
        </p>
        <p>
          Javite nam se putem ovog obrasca. Veselimo se Vašoj poruci te ćemo
          odgovoriti u najkraćem mogućem roku.
        </p>
        <div className="bg-middle-blue rounded-full flex flex-col gap-2 py-4 px-8 w-fit">
          <div className="flex gap-2">
            <ArrowFatRight size={24} weight="fill" color="#0C344B" />
            <p className="font-medium">Check-in: 15:00-18:00</p>
          </div>
          <div className="flex gap-2">
            <ArrowFatLeft size={24} weight="fill" color="#0C344B" />
            <p className="font-medium">Check-out: 09:00-11:00</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
