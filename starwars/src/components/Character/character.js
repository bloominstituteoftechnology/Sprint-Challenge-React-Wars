import React, {Component} from 'react';
import './character.css';

class Character extends Component {

    handleClick = () => {
        this.props.selectCharacter(this.props.character);
    }

    render () {
        
        const characterName = this.props.character.name;
        let style = null;
        switch(characterName) {
            
        case "Luke Skywalker": {
            style = {backgroundImage: `url('https://www.conservapedia.com/images/b/bb/Luke_Skywalker.jpg')`};
        break;
        }
        case "C-3PO": {
            style = {backgroundImage: `url('https://static1.squarespace.com/static/55bdd8e1e4b003dc5b7da717/5628c641e4b0629aedbd315b/5628c646e4b02a1b09bf0d2f/1445512774751/C-3PO-See-Threepio_68fe125c.jpeg?format=300w')`};
        break;
        }
        case "R2-D2": {
            style = {backgroundImage: `url('https://www.thinkgeek.com/images/products/additional/carousel/1edb_r2d2_deluxe_sixth_scale_fig_mood.jpg')`};
        break;
        }
        case "Darth Vader": {
            style = {backgroundImage: `url('https://static.tvtropes.org/pmwiki/pub/images/darth_vader_sw_1704.jpg')`};
        break;
        }
        case "Leia Organa": {
            style = {backgroundImage: `url('https://memegenerator.net/img/images/7404500/princess-leia.jpg')`};
        break;
        }
        case "Owen Lars": {
            style = {backgroundImage: `url('https://static.tvtropes.org/pmwiki/pub/images/cliegg_lars_sw_9329.jpg')`};
        break;
        }
        case "Beru Whitesun lars": {
            style = {backgroundImage: `url('https://i.pinimg.com/originals/2b/bb/71/2bbb712405c574c6ce78730e00464a8e.jpg')`};
        break;
        }
        case "R5-D4": {
            style = {backgroundImage: `url('https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=768')`};
        break;
        }
        case "Biggs Darklighter": {
            style = {backgroundImage: `url('https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=768')`};
        break;
        }
        case "Obi-Wan Kenobi": {
            style = {backgroundImage: `url('https://fsmedia.imgix.net/d9/6f/be/2b/155f/43e9/bb93/e56cbd6fa26e/screen-shot-2017-02-03-at-124703-pmpng.png')`};
        break;
        }  
        
        default: {
            style = { backgroundImage: `url('https://pixel.nymag.com/imgs/daily/vulture/2016/12/18/18-Star-Wars-Logo.w190.h190.jpg')` };
        break;
        }



    }
        return (
            <div className="character" onClick={this.handleClick}>
                <div className="character-name">
                    {characterName}
                </div>
                <div className="character-image" style={style}></div>
            </div>
        )

    }
}

export default Character;