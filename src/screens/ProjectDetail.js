import React from 'react'

const ProjectDetail = ({ match }) => {
    const { id } = match.params
    return (
        <div>
            <h1>Project {id} Detail</h1>
        </div>
    )
}

export default ProjectDetail
