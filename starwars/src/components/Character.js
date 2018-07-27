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

Modal.setAppElement('#root');

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      imgURL: null,
    };
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

  imgURL = () =>
    `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${this
      .props.img + 1}.jpg`;

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Character Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            {this.props.character.name}
          </h2>
          <CharacterInfo character={this.props.character} />
          <br />
          <button onClick={this.closeModal}>close</button>
        </Modal>
        <img
          src={this.imgURL()} // src={`${window.location.origin}/img/${this.props.img}.jpg`}
          alt={this.props.character.name} // onClick={() => this.handleClick(this.props.character)}
          onClick={() => this.openModal()}
          title={this.props.character.name}
        />
      </div>
    );
  }
}

export default Character;
