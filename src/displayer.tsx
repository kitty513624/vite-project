import { useState } from 'react';
import './displayer.css';
export function Displayer(props: { name: string; content: string }) {
    const name = props.name;
    const [hidden, setHidden] = useState(false);
    const [content, setContent] = useState(props.content);
    function handleClick() {
        setHidden(true);
    }
    async function handleRequest() {
        const result = await fetch('https://api.backend.dev/getSth');
        const j = await result.json();
        setContent(JSON.stringify(j));
    }
    return (
        <div className="container">
            <div className="nav">
                <span className="btn-red"></span>
                <button className="btn-yellow" data-testid="yellow" onClick={handleRequest}></button>
                <button className="btn-gray" data-testid="gray" onClick={handleClick}></button>
            </div>
            {hidden || (
                <div className="body" role="displayer-content">
                    <div>{name}</div>
                    <div>{content}</div>
                </div>
            )}
        </div>
    );
}
