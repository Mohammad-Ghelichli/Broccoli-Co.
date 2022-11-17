export const validation = (data) => {
  const errors = {};
 if(data.fullName.trim().length<3){
    errors.fullName = "Name is INVALID !";
 }
  else {
      delete errors.fullName;
  }
  if (!data.confirmEmail) {
    errors.confirmEmail = "Confirm your Email";
  } else if (data.confirmEmail !== data.email) {
    errors.confirmEmail = "Your Email not match !";
  } else {
    delete errors.confirmEmail;
  }

  if (!data.email) {
    errors.email = "Email is Required";
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
  ) {
    errors.email = "Email is INVALID !";
  } else {
    delete errors.email;
  }
  return errors;
};
