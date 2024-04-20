import { ArrowFatLeft, ArrowFatRight } from "@phosphor-icons/react";
import ContactForm from "../../components/atoms/ContactForm";
import { useEffect } from "react";
import Aos from "aos";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full mt-8 px-8">
      <div
        className="max-w-screen-xl mx-auto flex-col flex gap-4"
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
      >
        <h2 className="text-2xl font-semibold text-grey-blue uppercase mb-4 text-center md:text-left">
          <FormattedMessage id="contact.title" />
        </h2>
        <p>
          <FormattedMessage id="contact.text.1" />
        </p>
        <p>
          <FormattedMessage id="contact.text.2" />
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
