import getConfig from "./getConfig";

export const apiUrl = getConfig('REACT_APP_API_URL') || 'http://localhost:1708'
export const imageUrl = getConfig("REACT_APP_IMAGE_URL") || 'https://api.cloudinary.com/v1_1/hunghamhoc/image/upload'


// 'https://ktx-be.herokuapp.com'
// 'http://localhost:1708'