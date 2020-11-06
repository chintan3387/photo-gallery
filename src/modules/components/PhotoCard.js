import React from 'react';

class PhotoCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMouseOver: false
        };
    }
    render() {
        const { photo, clickHandler, photoIndex } = this.props;

        return (
                <img src={photo.urls.thumb} className="masonry-img" key={`photo-${photoIndex}`} alt={photo.alt_description} onClick={clickHandler} />
        )
    }
} 

export default PhotoCard;