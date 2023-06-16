import Link from "next/link";
import ServiceBox from "./ServiceBox";

function Services({
  data: { catagory, posts, sub_category, link, title = "" },
}) {
  return (
    <div className="offers-list">
      <div className="offers-type wow animate__animated">
        {link && link.length > 0 ? (
          <h4>
            <Link href={link}>{catagory}</Link>
          </h4>
        ) : (
          <h4>{catagory ? catagory : title}</h4>
        )}
      </div>
      <div className="offers-items">
        {sub_category &&
          sub_category.map((eachData, index) => (
            <ServiceBox key={index} eachData={eachData} />
          ))}
        {posts && posts.length
          ? posts.map((eachData, index) => (
              <ServiceBox key={index} eachData={eachData} />
            ))
          : null}
      </div>
    </div>
  );
}

export default Services;
