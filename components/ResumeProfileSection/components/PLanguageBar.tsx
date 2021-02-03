type SkillBarProps = {
  name: string,
  percent: number
}

export default function({name, percent}: SkillBarProps) {
  let roundedClass: String = (percent < 95) ? 'rounded-l-full' : 'rounded-full'
  return (
  <div className="pt-4 max-w-xs">
    <div className={`rounded-xl bg-gray-100`}>
      <div className={`${roundedClass} bg-primary-light`} style={{width: percent+"%"}}>
        <p className="pl-4 font-mono">
          {name}
        </p>
      </div>
    </div>
  </div>
  )
}
