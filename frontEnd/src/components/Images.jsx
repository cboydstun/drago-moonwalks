// function AppIm() {
//     const containerRef = useRef(null); 
//     useEffect(() => {
//       if(window && containerRef.current) {
//         window.Cloudinary.galleryWidget({
//           container: containerRef.current, 
//           cloudName: "dowgufc1f",
//           mediaAssets: [{tag: "gallary-images"}],
  
//         }).render();
//       }
//     }, []);
  
//     return <div ref={containerRef} style={{ width: "1200px", margin: "auto"}} />;
//   }
//   export default AppIm

  cloudinary.uploader.image_upload_tag(
    'gallary-images', { html: { multiple: 1 } });