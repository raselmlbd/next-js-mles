import { useRouter } from 'next/router';

export default function Video({data: {heading, description, link, youtubeVideo}}) {
  const {pathname} = useRouter();
  return (
    <section className={`wow meet-people ${pathname === '/careers' && `careerTop`}`}>
      <div className="bg wow animate__animated"></div>
      <div className="ml-container meet-people-container">
        <div className="text-section">
          <h2 className="wow animate__animated" dangerouslySetInnerHTML={{ __html: heading }}>
          </h2>
          <p className="wow animate__animated">
            {description}
            <br />
            <a href={link}>How We Work</a>
          </p>
        </div>
        <div className="image-section wow animate__animated">
          <iframe width="560" height="315" src={youtubeVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}
