import React from 'react';
import PropTypes from "prop-types";
import './Card.scss'

function Card(props) {
    const {imgUrl,title, content} = props

    let limitedContent = null;
    if (content.length < 100){
        limitedContent = content
    }else{
        limitedContent = content.slice(0, 100).concat('...')
    }

    let limitedTitle = null;
    if (title.length < 100){
        limitedTitle = title
    }else{
        limitedTitle = title.slice(0, 50).concat('...')
    }

    return (
        <div className={`cardWrapper`}>

            <div style={{ backgroundImage:  `url(${imgUrl})` }} className={`cardWrapper_imageContainer`}>

            </div>

            <div className={`cardWrapper_textContainer`}>
                <h3>{limitedTitle}</h3>
                <p>{limitedContent}</p>
            </div>
            <div className={`cardWrapper_footerContainer`}>
                <div className={`cardWrapper_leftContent`}>
                    <span>Left Content</span> <br/>
                    <span>Some more texts</span>
                </div>
                <div className={`cardWrapper_rightContent`}>Right Content</div>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl:PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: "width then you can  the printing and typeseing industryLorem Ipsum has",
    imgUrl:'https://source.unsplash.com/800x900/?hiking',
    content : 'Lorem Ipsum is simply dummy text andwidth then you can  the printing and typesetting industry. Lorem Ipsum has been the'
}


export default Card;