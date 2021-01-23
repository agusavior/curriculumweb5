

type CardProps = {
  value: string,
  image: string
}

export default function SocialItem({value, image}: CardProps) {
  return (
    <p className='p-1'>
      <i className={`${image} fa-fw w3-margin-right w3-large text-primary`}>
      </i>
      {value}
    </p>
  )
}