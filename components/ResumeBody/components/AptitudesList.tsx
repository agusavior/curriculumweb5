type AptitudeListProps = {
    aptitudes: string[]
}

export default function({ aptitudes }: AptitudeListProps) {
    return (
        <div className='flex flex-row flex-wrap gap-2'>
        {aptitudes.map((aptitude, index) => (
            <div className='rounded-full bg-gray-100 p-2 pt-1 pb-1' key={index}>
                {aptitude}
            </div>
        ))}
        </div>
    )
}