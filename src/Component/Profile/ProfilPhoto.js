import profilPhoto from "../../image/profilPhoto.jpg";
import { Card } from "react-bootstrap";
const ProfilPhoto = () => {
  return (
    <Card.Img variant="top" src={profilPhoto} style={{ borderRadius: "4px" }} />
  );
};
export default ProfilPhoto;
