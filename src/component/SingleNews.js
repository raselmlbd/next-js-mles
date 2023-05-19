import Image from "next/image";

export default function SingleNews({data: {heading, date, description, thumbnail, link}}) {
  return (
    <section className="wow latest-news">
        <div className="ml-container latest-news-container">
          <div className="latest-news-top">
            <h3>Latest News</h3>
            <a href="#">See all news</a>
          </div>
          <div className="latest-news-body">
            <div className="bg wow animate__animated"></div>
            <div className="text-section">
              <h5>{date}</h5>
              <h3 className="wow animate__animated">
                {heading}
              </h3>
              <p className="wow animate__animated">
                {description}
              </p>
              <a href="#">Read more</a>
            </div>
            <div className="image-section wow animate__animated">
              <Image
                src={thumbnail.url}
                alt="picture of the author"
                width={thumbnail.width}
                height={thumbnail.height}
                />
            </div>
          </div>
        </div>
      </section>
  )
}
