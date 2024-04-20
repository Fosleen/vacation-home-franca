import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CustomMap = () => {
  return (
    <>
      <MapContainer
        center={[45.60848002387092, 15.530422087583496]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.6195784, 15.5040137]}>
          <Popup>Kupalište u Trgu</Popup>
        </Marker>
        <Marker position={[45.614933, 15.479787]}>
          <Popup>Kupalište u Ozlju</Popup>
        </Marker>
        <Marker position={[45.550177, 15.52333]}>
          <Popup>Ušće Dobre i Kupe</Popup>
        </Marker>
        <Marker position={[45.484259, 15.559316]}>
          <Popup>Foginovo kupalište</Popup>
        </Marker>
        <Marker position={[45.405689, 15.449711]}>
          <Popup>Mrežnička kuća</Popup>
        </Marker>
        <Marker position={[45.420476, 15.48322]}>
          <Popup>Kamp Slapić</Popup>
        </Marker>
        <Marker position={[45.42391, 15.489134]}>
          <Popup>Otok ljubavi</Popup>
        </Marker>
        <Marker position={[45.669408404338355, 15.447672353149438]}>
          <Popup>Vidikovac - Centar za posjetitelje Lović Prekriški</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default CustomMap;
