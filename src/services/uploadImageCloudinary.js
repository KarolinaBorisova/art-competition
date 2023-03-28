
const baseUrl = "https://api.cloudinary.com/v1_1/dbk16pp6v/image/upload";


const url = "https://api.cloudinary.com/v1_1/dbk16pp6v/image/upload";

export const uploadImage = (imgData) => fetch(baseUrl, {
            method: "POST",
            body: imgData,
          }).then(response => response.json());