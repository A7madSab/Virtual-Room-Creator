import React from 'react'

const ProjectDetail = ({ match }) => {
    const { id } = match.params
    return (
        <div>
            <h1>ProjectDetail {id}</h1>
        </div>
    )
}

export default ProjectDetail
