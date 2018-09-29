import React from 'react'

class Character extends React.Component {
  render() {
    return (
      <div className="grow">
          <article>
            <p> Name: {this.props.characterName},  
                Born: {this.props.birthdate},
                Gender: {this.props.gender},
                Height: {this.props.height},
                Mass: {this.props.mass},
                Eye: {this.props.eye},
                Hair: {this.props.hair},
                Skin: {this.props.skin},
            </p>
            
          </article>
      </div>
    )
  }
}

export default Character