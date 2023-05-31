
type InfoButtonPropType = {
    title: string,
    bgColor: string
}
const InfoButton = ({ bgColor, title }: InfoButtonPropType) => {
    return (
        <button className={`${bgColor} rounded h-full font-medium`}>{title}</button>
    )
}

export default InfoButton