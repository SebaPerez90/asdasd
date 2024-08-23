'use server';

export const signup = async (formData: FormData) => {
  const newUser = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  };
};
