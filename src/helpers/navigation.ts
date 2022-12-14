export const getRouteFromNavItem = (page: string) => {
  switch (page) {
    case "Home":
      return "/";
    case "About Us":
      return "/about";
    case "Services":
      return "/services";
    case "Delivery Methods":
      return "/delivery";
    case "Fees and Funding":
      return "/fees";
    case "Resources":
      return "/resources";
    case "FAQs":
      return "/faqs";
    case "Enquire Now":
      return "/enquire";
    default:
      return "/";
  }
};
