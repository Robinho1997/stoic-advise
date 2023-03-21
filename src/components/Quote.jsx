import React from "react";
import { data } from "../data";

export default function Quote(props) {
    return (
        <div className="quote-div">
            <h2 className="quote-text">{data[props.number].quote}</h2>
            <p className="quote-author">{data[props.number].name}</p>
            <button className="new-quote-btn" onClick={props.changeQuote}>
                <i className="fa-solid fa-dice fa-2x"></i>
            </button>
        </div>
    )
}