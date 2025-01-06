

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";

function CloudinaryComponent() {
  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "dowgufc1f" 
    }
  });

  const handleUploadSuccess = (result) => {
    // Handle the successful upload, e.g., update state with the new image URL
    console.log("Upload Success:", result.info.public_id);
  };

  return (
    <div>
      <WidgetLoader />
      <Widget 
        cloudName="dowgufc1f"
        uploadPreset="ml_default"
        onSuccess={handleUploadSuccess}
      />
      {/* <AdvancedImage cldImg={cloudinary.image(image.public_id)} /> */}
    </div>
  );
}

export default CloudinaryComponent

