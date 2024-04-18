// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | string>("");

  const success_ = () => {
    toast.success("Uspješno poslano", {});
  };
  const error_ = () => {
    toast.error("Došlo je do pogreške, pokušajte ponovo!", {});
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (form && form.current) {
      emailjs
        .sendForm(
          "service_0ghh1yn",
          "template_w46us4g",
          form.current,
          "zbeRoI5YBZYd8RC6w"
        )
        .then(
          (result) => {
            console.log(result.text);
            success_();
          },
          (error) => {
            console.log(error.text);
            error_();
          }
        );
      form.current.reset();
    }
  };

  return (
    <div className="flex flex-col">
      <form
        action=""
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 pb-8 items-center"
      >
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Ime i prezime *</label>
              <input
                type="text"
                placeholder="Unesi ime i prezime"
                name="name"
                required
                className="border-main-blue border-2 p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">E-mail*</label>
              <input
                type="email"
                placeholder="Unesi email"
                name="email"
                required
                className="border-main-blue border-2 p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone">Broj mobitela</label>
              <input
                type="text"
                placeholder="Unesi broj mobitela"
                name="phone"
                className="border-main-blue border-2 p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="checkin">Datum dolaska</label>
              <input
                type="date"
                name="checkin"
                className="border-main-blue border-2 p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="checkout">Datum odlaska</label>
              <input
                type="date"
                name="checkout"
                className="border-main-blue border-2 p-2"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="message">Poruka *</label>
            <textarea
              name="message"
              id="message"
              placeholder="Unesi poruku"
              cols={30}
              rows={16}
              required
              className="border-main-blue border-2 p-2 w-full"
            ></textarea>
          </div>
        </div>
        <div id="btnSend" className="p-[2px] w-full flex justify-end">
          <Button filled wider type="submit">
            POŠALJI PORUKU
          </Button>
        </div>
      </form>
      <ToastContainer
        theme="light"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </div>
  );
};

export default ContactForm;
