import React from 'react';

function Dashboard(props) {
    return (
        <div className="dashboard">
            <button className="ballIncBtn" title="ballBtn" onClick={props.ballAction}>Ball</button>
            <button className="strikeIncBtn" title="strikeBtn" onClick={props.strikeAction}>Strike</button>
            <button className="foulIncBtn" onClick={props.foulAction}>Foul</button>
            <button className="hitIncBtn" onClick={props.hitAction}>Hit!</button>
        </div>
    )
}

export default Dashboard;