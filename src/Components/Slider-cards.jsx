export default function SliderCards(props) {
  return (
    <div className="sw_card">
      <img src={props.img} />
      <div className="sw_card_text_box">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}
