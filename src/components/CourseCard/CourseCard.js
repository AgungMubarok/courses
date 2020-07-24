import React from 'react';
import './courseCard.css'
import ReactPlayer from 'react-player'

const CourseCard = ({ data }) => {
    return (
        <>
            {
                data.map((element) => (
                    <div className="main">
                        <ReactPlayer url='https://www.youtube.com/watch?v=eQalyysnMDE' width="320" height="240"/>
                        <div className="content2">
                            <h4>{element.title}</h4>
                            <p>{element.description}</p>
                        </div>
                        <img className="avatar1" src={element.Image} alt={element.Image}/>
                    </div>
                    
                ))
            }
        </>
    );
};

export default CourseCard;