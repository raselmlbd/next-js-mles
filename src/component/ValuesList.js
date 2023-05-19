export default function ValuesList({data: {title, description}}) {
  return (
    <div className="values-card wow animate__animated">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
