import React from 'react';
import GalleryItem from './GalleryItem';// Ensure this import is correct

const Gallery = (props) => {
    const data = props.data;

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        );
    });

    return (
        <div>
            {display}
        </div>
    );
};

export default Gallery;