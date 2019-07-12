import React from 'react'
import { Table, Box } from '@material-ui/core'
const Character = props => {
    return (
        <div>
        <Box bgcolor="error.main" border={1} borderColor="primary.main" boxShadow={3}>
            <Table>
            <h2>Name: {props.character.name}</h2>
            <h4>Birth Year: {props.character.birth_year}</h4>
            <h4>Height: {props.character.height}</h4>
            </Table>
        </Box>
        </div>    
        )
}
export default Character 