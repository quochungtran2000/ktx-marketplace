import getConfig from "./getConfig";

export const apiUrl = getConfig('REACT_APP_API_URL') || 'http://localhost:1708'



// 'https://ktx-be.herokuapp.com'