import React, { PureComponent } from 'react';

export default class Character extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
    	classes: "char",
    	rotX: 0,
			rotY: 0,
			bTransDur: 0.5,
			scale: 1,
			boxShadow: 'none'
    }
  }

  componentDidMount(){
  	setTimeout(() => { this.setState({ classes: "char char-show"})}, 500);
  }

	mouseEnterButton = (e) => {
		const gWY = e.type === 'mouseenter' ? e.clientY : e.touches[0].clientY;
		const gWX = e.type === 'mouseenter' ? e.clientX : e.touches[0].clientX;
		const target = e.target.tagName === "BUTTON" ? e.target : e.target;
		const y = ((target.getBoundingClientRect().left + (target.offsetWidth / 2)) - gWX) / -10;
		let x = ((target.getBoundingClientRect().top + (target.offsetHeight / 2)) - gWY) / 1.75;
		x = x > 0 ? x+=4 : x;
		this.setState({
			rotX: x, rotY: y, bTransDur: '0.5s', scale: 1.1,
			boxShadow: `0 14px 28px rgba(0,0,0,0.5), ${y* -1.85}px ${x}px 10px rgba(0,0,0,0.44)`
		});
	}

	mouseMoveButton = (e) => {
		const gWY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
		const gWX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
		const target = e.target.tagName === "BUTTON" ? e.target : e.target;
		const y = ((target.getBoundingClientRect().left + (target.offsetWidth / 2)) - gWX) / -10;
		let x = ((target.getBoundingClientRect().top + (target.offsetHeight / 2)) - gWY) / 1.75;
		x = x > 0 ? x+=4 : x;
		this.setState({
			rotX: x, rotY: y, bTransDur: '0s', scale: 1.1,
			boxShadow: `0 14px 28px rgba(0,0,0,0.5), ${y* -1.85}px ${x}px 10px rgba(0,0,0,0.44)`
		});
	}

	mouseLeaveButton = (e) => {
		this.setState({rotX: 0, rotY: 0, bTransDur: '0.5s', scale: 1, boxShadow: 'none' });
	}

  render() {
    return (
      <div 
      	onMouseEnter={this.mouseEnterButton}
				onMouseMove={this.mouseMoveButton}
				onMouseLeave={this.mouseLeaveButton}
				onTouchStart={this.mouseEnterButton}
				onTouchEnd={this.mouseLeaveButton}
				onTouchMove={this.mouseMoveButton}
        className={this.state.classes}
        style={{
					transform: `rotateX(${this.state.rotX}deg) rotateY(${this.state.rotY}deg) skew(-5deg) scale(${this.state.scale})`,
					transitionDuration: this.state.bTransDur,
					boxShadow: this.state.boxShadow
				}}>
        <div>
          <h1>{this.props.name}</h1>
          <div className="stats">
            <h2>Height: {this.props.height}</h2>
            <h2>Mass: {this.props.mass}</h2>
          </div>
          <div className="stats">
            <h2>Hair: {this.props.hair_color}</h2>
            <h2>Skin: {this.props.skin_color}</h2>
          </div>
        </div>
      </div>
    );
  }
}
