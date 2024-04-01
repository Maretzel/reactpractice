import axios from "axios";


const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID qu04XKwTEU6U1NThib3ry21UesdPCViTlA5b76STOvo'
        },
        params: {
            query: term,
        }
    });

    console.log(response);

    return response.data.results;
};


export default searchImages;