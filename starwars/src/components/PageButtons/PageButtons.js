import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PageButtons = (props) => {


    return (
        <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={0}
            totalPages={props.pageNum}

        />
    )
}

export default PageButtons