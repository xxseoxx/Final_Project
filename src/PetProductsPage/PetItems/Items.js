import "../PetItems/Items.css";
import { Link } from "react-router-dom";

export default function PetItems({ images }) {
  return (
    <div className="image-zigzag">
      {images &&
        images.map((image) => (
            <div className="item">
              <Link to={`/ItemsPage/${image.id}`}><img src={image.imgURL} alt={image.name}  /></Link>
              <p className="item-detail first second">
                <p className="funding-title">{image.title}</p>
                <p className="item-name">{image.name}</p>
                <p className="item-funding">
                  <span className="funding">펀딩:</span> {image.funding}
                </p>
                <p className="FundingPeriod">
                  <span className="period">펀딩기간:</span>{" "}
                  {image.FundingPeriod}
                </p>
              </p>
            </div>
        ))}
    </div>
  );
}
