import React from 'react'
import { Button } from 'semantic-ui-react'

const PageButtons = (props) => (
    <div>
        <Button content='Prev' icon='left arrow' labelPosition='left' onClick={props.prevPage} floated='left' />
        <Button content='Next' icon='right arrow' labelPosition='right' onClick={props.nextPage} floated='right' />
    </div>
)

export default PageButtons