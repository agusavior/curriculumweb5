type CardProps = {
  image: string
}

export default function({image}: CardProps) {
  return (
    <i className={`fa ${image} p-0.5 w3-hover-opacity`}></i>
  )
}

