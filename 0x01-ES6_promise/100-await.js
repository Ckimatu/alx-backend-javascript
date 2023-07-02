import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    console.error(error);
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
