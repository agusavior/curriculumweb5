type SkillBarProps = {
  name: string,
  percent: number
}

export default function({name, percent}: SkillBarProps) {
  return (
    <div className="pt-4">
      <div className="rounded-full bg-primary-light">
        <div className="rounded-full bg-primary" style={{width: percent+"%"}}>
          <p className="p-1 pl-4 font-semibold">
            {name}
          </p>
        </div>
    </div>
  </div>
  )
}
