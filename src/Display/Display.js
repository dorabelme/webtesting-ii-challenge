import React from 'react'

function Display(props) {
    return (
        <div className="display">
            <div className="balls-count" title="balls-count">{props.ballCount} balls out of 4</div>
            <div className="strikes-count" title="strikes-count">{props.strikeCount} strikes out of 3</div>
        </div>
    )
}

export default Display;
