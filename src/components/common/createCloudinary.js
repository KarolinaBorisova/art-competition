
export const crateCloudinary = (imageSelected) => {

const formData = new FormData();
formData.append("file", imageSelected);
formData.append("upload_preset", "jjsb6cnx");

return formData;
}