type AptitudeListProps = {
    aptitudes: string[]
}

function Aptitude(aptitude: string) {
    return (
        
        <div className='rounded-full bg-gray-200 p-2 pt-1 pb-1'>
            {aptitude}
        </div>
        
    )

}

export default function({ aptitudes }: AptitudeListProps) {
    return (
        <div className='flex flex-row flex-wrap gap-2'>
        {
            aptitudes.map(a => Aptitude(a))
        }
        </div>
    )
}