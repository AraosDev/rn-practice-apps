const MAP_API_KEY = 'AIzaSyCitpvbGvMFOk8MgorpMoxNQspT8W2uyNI';
export const getMapPreview = ({ latitude, longitude }) => {
    const imagePreviewUri = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${MAP_API_KEY}`;

    return imagePreviewUri;
}

export async function getAddress({ latitude, longitude }) {
    console.log({ latitude, longitude })
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${MAP_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch address!');
    }

    const data = await response.json();
    console.log(data, 'address');
    const address = data.results[0].formatted_address;
    return address;
}