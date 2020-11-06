import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import {AppBar} from 'material-ui';
import * as photoActions from '../actions/photoBrowserActions';
import PhotoList from './PhotoList';
import InfiniteScroll from 'react-infinite-scroll-component';

const mapDispatchToProps = dispatch => ({
    getTopPhotos: page => dispatch(photoActions.getTopPhotos(page))
})

const mapStateToProps = state => ({
    photos: state.photoGallery.topPhotos
})

class PhotoListContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentPage: 1,
        }
    }
    componentDidMount() {
        this.props.getTopPhotos(1);
    }

    handleScroll = () => {
        const { currentPage } = this.state;
        this.setState({
            currentPage: currentPage + 1
        }, () => {
            setTimeout(() => {
            this.props.getTopPhotos(this.state.currentPage);
            }, 500)
        });
        
    }

    render() {
        const { photos } = this.props;
        const { response } = photos || {};
        const { result } = response || {};
        const totalLength = result ? result.length : 0;
        return (
            <div>
                <AppBar title="Image Browser" style={{ zIndex: -1}} />
                <Container>
                    <Row>
                        <InfiniteScroll
                            dataLength={totalLength}
                            next={this.handleScroll}
                            hasMore={true}
                        >
                            {photos &&  <PhotoList photos={photos} isLoading={photos.isLoading}/>}
                        </InfiniteScroll>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListContainer);