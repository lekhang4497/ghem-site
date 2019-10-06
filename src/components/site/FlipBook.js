import React from "react";

const FlipBook = (props) =>
    <div>
        <figure className='book'>
            <ul className='hardcover_front'>
                {/*<li>*/}
                {/*    <div className={"coverDesign " + props.color}>*/}
                {/*        <span className="ribbon">{props.ribbon}</span>*/}
                {/*        <h1>{props.title}</h1>*/}
                {/*        <p>{props.subtitle}</p>*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li></li>*/}
                <li>
                    <img src={props.imgSrc} alt="" width="100%" height="100%"/>
                </li>
                <li></li>
            </ul>
            <ul className='page'>
                <li></li>
                <li>
                    <a className="btn" href={props.textLink}>{props.text}</a>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>


            <ul className='hardcover_back'>
                <li></li>
                <li></li>
            </ul>
            <ul className='book_spine'>
                <li></li>
                <li></li>
            </ul>
            <div className="hidden-xs">
                <figcaption>
                    <h1>{props.capTitle}</h1>
                    <span>{props.capSubtitle}</span>
                    <p>{props.description}</p>
                </figcaption>
            </div>
        </figure>
    </div>;

export default FlipBook;
