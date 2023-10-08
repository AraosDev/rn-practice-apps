const MAP_API_KEY = 'AIzaSyDcmJ_0Jbm7ftCuvO1juAG1fYrtE8SGX9g';
export const getMapPreview = ({ latitude, longitude }) => {
    const imagePreviewUri = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${MAP_API_KEY}`;

    return imagePreviewUri;
}