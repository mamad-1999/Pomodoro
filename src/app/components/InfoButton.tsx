
type InfoButtonPropType = {
    title: string,
    bgColor: string,
    click: () => void
}
const InfoButton = ({ bgColor, title, click }: InfoButtonPropType) => {

    return (
        <button
            onClick={() => click()}
            className={`${bgColor} rounded h-full shadow-mda font-medium`}
        >{title}
        </button>
    )
}

export default InfoButton