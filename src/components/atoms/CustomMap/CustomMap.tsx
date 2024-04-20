import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import swim from "../../../assets/icons/person-simple-swim-ph-icon.png";
import castle from "../../../assets/icons/castle-turret-ph-icon.png";
import church from "../../../assets/icons/church-ph-icon.png";
import mountain from "../../../assets/icons/mountains-ph-icon.png";

const CustomMap = () => {
  const swimIcon = new L.Icon({
    iconUrl: swim,
    iconRetinaUrl: swim,
    popupAnchor: [-0, -0],
    iconSize: [24, 24],
  });
  const churchIcon = new L.Icon({
    iconUrl: church,
    iconRetinaUrl: church,
    popupAnchor: [-0, -0],
    iconSize: [24, 24],
  });
  const castleIcon = new L.Icon({
    iconUrl: castle,
    iconRetinaUrl: castle,
    popupAnchor: [-0, -0],
    iconSize: [24, 24],
  });
  const mountainIcon = new L.Icon({
    iconUrl: mountain,
    iconRetinaUrl: mountain,
    popupAnchor: [-0, -0],
    iconSize: [24, 24],
  });

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
        <Marker position={[45.608565036279934, 15.530461369479793]}>
          <Popup>Kuća za odmor Franca</Popup>
        </Marker>
        <Marker position={[45.6195784, 15.5040137]} icon={swimIcon}>
          <Popup>Kupalište u Trgu</Popup>
        </Marker>
        <Marker position={[45.614933, 15.479787]} icon={swimIcon}>
          <Popup>Kupalište u Ozlju</Popup>
        </Marker>
        <Marker position={[45.550177, 15.52333]} icon={swimIcon}>
          <Popup>Ušće Dobre i Kupe</Popup>
        </Marker>
        <Marker position={[45.484259, 15.559316]} icon={swimIcon}>
          <Popup>Foginovo kupalište</Popup>
        </Marker>
        <Marker position={[45.405689, 15.449711]} icon={swimIcon}>
          <Popup>Mrežnička kuća</Popup>
        </Marker>
        <Marker position={[45.420476, 15.48322]} icon={swimIcon}>
          <Popup>Kamp Slapić</Popup>
        </Marker>
        <Marker position={[45.42391, 15.489134]} icon={swimIcon}>
          <Popup>Otok ljubavi</Popup>
        </Marker>
        <Marker position={[45.614237, 15.470474]} icon={castleIcon}>
          <Popup>Stari grad Ozalj</Popup>
        </Marker>
        <Marker position={[45.495141, 15.527854]} icon={castleIcon}>
          <Popup>Stari grad Dubovac</Popup>
        </Marker>
        <Marker position={[45.407923, 15.284079]} icon={castleIcon}>
          <Popup>Stari grad Bosiljevo</Popup>
        </Marker>
        <Marker position={[45.577199, 15.349867]} icon={castleIcon}>
          <Popup>Stari grad Ribnik</Popup>
        </Marker>
        <Marker position={[45.482145, 15.452711]} icon={castleIcon}>
          <Popup>Dvorac Novigrad na Dobri</Popup>
        </Marker>
        <Marker position={[45.562933, 15.517557]} icon={castleIcon}>
          <Popup>Dvorac Turk-Mažuranić</Popup>
        </Marker>
        <Marker position={[45.671442, 15.646728]} icon={castleIcon}>
          <Popup>Dvorac Erdody</Popup>
        </Marker>
        <Marker position={[45.620536, 15.506422]} icon={churchIcon}>
          <Popup>Crkva Svih Svetih</Popup>
        </Marker>
        <Marker position={[45.612929, 15.469417]} icon={churchIcon}>
          <Popup>Crkva sv. Vida</Popup>
        </Marker>
        <Marker position={[45.551085, 15.535764]} icon={churchIcon}>
          <Popup>Crkva pohoda Blažene Djevice Marije </Popup>
        </Marker>
        <Marker position={[45.633093, 15.395419]} icon={churchIcon}>
          <Popup>Crkva Ime Marijino</Popup>
        </Marker>
        <Marker position={[45.586026, 15.453499]} icon={churchIcon}>
          <Popup>
            Pavlinski samostan i crkva Rođenja Blažene Djevice Marije
          </Popup>
        </Marker>
        <Marker position={[45.654774, 15.516722]} icon={churchIcon}>
          <Popup>Crkva Presveto Trojstvo</Popup>
        </Marker>
        <Marker
          position={[45.669408404338355, 15.447672353149438]}
          icon={mountainIcon}
        >
          <Popup>Vidikovac - Centar za posjetitelje Lović Prekriški</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default CustomMap;
