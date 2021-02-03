type SkillBarProps = {
  name: string,
  percent: number
}

export default function({name, percent}: SkillBarProps) {
  let roundedClass: String = (percent < 95) ? 'rounded-l-full' : 'rounded-full'
  return (
    <div className="pt-4 max-w-xs">
      <div className={`rounded-full bg-gray-300`}>
        <div className={`${roundedClass} bg-primary`} style={{width: percent+"%"}}>
          <p className="p-1 pl-4 font-semibold">
            {name}
          </p>
        </div>
    </div>
  </div>
  )
}
