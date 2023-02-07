import P from 'prop-types';
import { Component } from 'react';
import './style.css';

export class Button extends Component {
  render() {
    const { handleClick, disabled = false, text } = this.props;

    return (
      <div className="btn-container">
        <button disabled={disabled} onClick={handleClick} className="btn">
          {text}
        </button>
      </div>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  handleClick: P.func.isRequired,
  disabled: P.bool,
};
