


import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';



const FilmCharacter = (props) => {
    const filmCharacters = [];
    const characterInfo = [];
    // console.log(props);
    props.CharUrl.map(characters => {
        filmCharacters.push(characters)
    })

    useEffect(() => {
        filmCharacters.forEach(e => {
            axios.get(`${e}`)
            .then(response => {
                // console.log(response)
                return characterInfo.push(response)
            })
            .catch(error => {
                console.log(error)
            });
        })

    }, []);

    // console.log(characterInfo)
    // {characterInfo.map(e => {
    // console.log('test', e.data.height)});}

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (

        <div >
            {characterInfo.forEach(e => {

                console.log(e)

                return(<div> 
                
                {/* <Button color="danger" onClick={toggle} ></Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}></ModalHeader>
                        <ModalBody>
                            Height: {e.data.height}
                            Mass: {e.data.mass}
                            Hair Color: {e.data.hair_color}
                            Skin Color: {e.data.skin_color}
                            Eye Color: {e.data.eye_color}
                            Birth Year: {e.data.birth_year}
                            Gender: {e.data.name}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal> */}

                </div>)
        })}

        </div >

    )


}







export default FilmCharacter;




