import React, { useEffect, useState } from 'react';

import { Image } from 'cloudinary-react'; // Import the Cloudinary Image component [2, 3, 13]



function GalleryComponent() {

    const [images, setImages] = useState([]);



    useEffect(() => {

        const fetchImages = async () => {

            const response = await fetch(`https://api.cloudinary.com/v1_1/dowgufc1f/resources/image`, {

                headers: {

                    Authorization: `Basic ${btoa("319873711389225" + ':' + "V-l-0SqPm7Afs9Zb6g0YKwi9QYc")}`

                }

            });

            const imageData = await response.json();

            setImages(imageData.resources); // Update state with image data

        };



        fetchImages();

    }, []);



    return (

        <div className="gallery-images">

            {images.map(image => (

                <Image 

                    key={image.public_id} 

                    cloudName="dowgufc1f" 

                    publicId={image.public_id} 

                    width="200" 

                />

            ))}

        </div>

    );

}



export default GalleryComponent;

// Cors error fixing! 