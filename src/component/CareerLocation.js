import Image from 'next/image';
import CareerLocationList from './CareerLocationList';

export default function CareerLocation({data: {title, description, image, locationsCollection}}) {
  return (
    <section className="locations">
      <div className="ml-container locations-content">
        <div className="info-card">
          <h2 className="wow animate__animated">{title}</h2>
          <p className="wow animate__animated">
            {description}
          </p>
          <CareerLocationList data={locationsCollection} />
        </div>
        <div className="image-section wow animate__animated">
          <Image
              src={image?.url}
              alt="picture of the author"
              width={image?.width}
              height={image?.height}
            />
        </div>
      </div>
    </section>
  )
}
