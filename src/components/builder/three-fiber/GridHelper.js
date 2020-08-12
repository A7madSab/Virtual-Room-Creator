import React from "react"

const GridHelper = (props) => {
    return (
        <gridHelper args={[props.size, props.divid, 0xff1744]} visible={props.visible}/>
    );
}

export default GridHelper