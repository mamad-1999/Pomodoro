type InfoButtonPropType = {
  title: string;
  bgColor: string;
  click: () => void;
};
function InfoButton({ bgColor, title, click }: InfoButtonPropType) {
  return (
    <button
      type="button"
      onClick={() => click()}
      className={`${bgColor} rounded h-full shadow-mda font-medium`}
    >
      {title}
    </button>
  );
}

export default InfoButton;
