import React from 'react';
import Modal from 'react-modal';
import CharacterInfo from './CharacterInfo';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }
  handleClick = character => {
    alert(character.name);
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    this.subtitle.style.color = '#f00';
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            {this.props.character.name}
          </h2>
          <CharacterInfo character={this.props.character} />
          <br />
          <button onClick={this.closeModal}>close</button>
        </Modal>
        <img
          src={`${window.location.origin}/img/${this.props.img}.jpg`}
          alt={this.props.character.name}
          // onClick={() => this.handleClick(this.props.character)}
          onClick={() => this.openModal()}
          title={this.props.character.name}
        />
      </div>
    );
  }
}

export default Character;
