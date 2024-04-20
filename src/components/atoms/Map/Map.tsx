const Map = () => {
  return (
    <div className="w-full h-60 md:h-[400px] lg:w-[600px] xl:w-[800px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d33701.71266794172!2d15.501154510045925!3d45.60896803632057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDM2JzMwLjciTiAxNcKwMzEnNDkuNSJF!5e1!3m2!1shr!2shr!4v1713361248786!5m2!1shr!2shr"
        style={{ border: "0", width: "100%", height: "100%" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
};

export default Map;
