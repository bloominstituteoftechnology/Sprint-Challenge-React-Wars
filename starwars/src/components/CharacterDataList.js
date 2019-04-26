import React from 'react';
import CharacterName from './CharacterName'
import CharacterData from './CharacterData';

class CharacterDataList extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className='list-container'>
                {this.props.dataList.map(item => {
                    return (
                    <div key={item.name + item.birth_year} className='character-data-container'>
                        <CharacterName characterName={item.name} />
                        <CharacterData 
                            key={item.gender+item.birth_year}
                            text1='Birthdate' 
                            dataItem1={item.birth_year} 
                            text2='Gender'
                            dataItem2={item.gender} />
                        <CharacterData 
                            key={item.skin_color+item.hair_color} 
                            text1='Skin color'
                            dataItem1={item.skin_color} 
                            text2='Hair color'
                            dataItem2={item.hair_color} />
                        <CharacterData 
                            key={item.height+item.mass} 
                            text1='Height'
                            dataItem1={item.height} 
                            text2='Mass'
                            dataItem2={item.mass} />
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default CharacterDataList;