export const featureEmailServiceDisabled = () => {
  if (process.env.NEXT_PUBLIC_EMAIL_SERVICE_UNAVAILALE === "true") return true;
  return false;
};

export const featureEnquiryFormDisabled = () => {
  if (featureEmailServiceDisabled()) return true;
  if (process.env.NEXT_PUBLIC_ENQUIRY_FORM_DISABLED === "true") return true;
  return false;
};
