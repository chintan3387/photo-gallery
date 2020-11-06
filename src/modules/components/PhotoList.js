import React from 'react';
import PhotoCard from './PhotoCard';
import Loader from './Loader';
import './PhotoGallery.css';
import LightBox from 'react-image-lightbox';
import Masonry from 'react-masonry-css'

class PhotoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        const { photos, isLoading } = this.props;
        const { isOpen, photoIndex } = this.state;
        const { response } = photos;
        const { result } = response || {};
        const breakpointColumnsObj = {
            default: 5,
            1100: 4,
            700: 2,
            500: 1
        };

        const photoColumns = result ? result.map((photo, index) => (
            <PhotoCard key={`photocard-${index}`} photo={photo} id={photo.id} photoIndex={index} clickHandler={() => this.setState({isOpen: true, photoIndex: index})} />
        )) : null;

        return (
            <>
                <Masonry 
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {photoColumns}
                </Masonry>
                <Loader isLoading={isLoading} />
                {isOpen && (
                    <LightBox
                        mainSrc={result && result[photoIndex] ? result[photoIndex].urls.small : ""}
                        nextSrc={result[(photoIndex + 1) % result.length].urls.small}
                        prevSrc={result[(photoIndex + result.length - 1) % result.length].urls.small}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMoveNextRequest={() => this.setState({ photoIndex : (photoIndex + 1) % result.length})}
                        onMovePrevRequest={() => this.setState({ photoIndex: (photoIndex + result.length - 1) % result.length})}
                        clickOutsideToClose={true}
                        reactModalStyle={{margin: 'auto'}}
                        imageCaption={result[photoIndex].alt_description}
                    />
                )}
            </>
        );
    }
}

export default PhotoList;