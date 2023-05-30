type InfoBoxPropsType = {
    title: string,
    start: number,
    end: number
}

const InfoBox = ({ title, end, start }: InfoBoxPropsType) => {
    return (
        <div className="h-28 w-full flex items-center justify-center flex-col gap-2">
            <h3 className="text-gray-400 font-semibold text-lg">{title}</h3>
            <h3 className="text-lg text-zinc-800"><span className="text-5xl text-zinc-800 font-medium">{start}</span>/{end}</h3>
        </div>
    )
}

export default InfoBox