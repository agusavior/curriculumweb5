type CardProps = {
  image: string,
  url: string
}

export default function({ image, url }: CardProps) {
  return (
    <i 
    onClick={() => window.open(url)}
    className={`${image} m-0.5 w3-hover-opacity`}
    />
  )
}

