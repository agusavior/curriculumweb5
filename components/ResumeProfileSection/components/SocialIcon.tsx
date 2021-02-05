type CardProps = {
  image: string,
  url: string
}

export default function({ image, url }: CardProps) {
  return (
    <i 
    onClick={() => window.open(url)}
    className={`${image} m-0.5 opacity-50 hover:opacity-100 cursor-pointer text-3xl`}
    />
  )
}

