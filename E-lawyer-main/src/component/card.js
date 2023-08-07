import "./card.css";
const card = ({ children, cardClass }) => {
  return <div className={`${card} ${cardClass}`}>{children}</div>;
};

export default card;