import { Component, React } from "react";

class CardView extends Component {
  render() {
    return (
      <div className="card" onClick={this.props.onClick}>
        <div className="card__body">
          <img
            id={this.props.id}
            className="card__image"
            src={this.props.img}
            alt={this.props.title}
          />
        </div>
        <div className="card__title">{this.props.title}</div>
      </div>
    );
  }
}

export default CardView;
