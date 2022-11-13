export const ASPECT_RATIO_LOGO = 926 / 540;
export const ASPECT_RATIO_SERVICES_SPEECH_THERAPY = 2000 / 1331;
export const ASPECT_RATIO_ICON = 1;
export const ASPECT_RATIO_FEES_AND_FUNDING_MEDICARE = 1024 / 255;
export const ASPECT_RATIO_FEES_AND_FUNDING_NDIS = 1200 / 638;
export const ASPECT_RATIO_BOOK_SESSION_MAP = 613 / 537;

export const calculateScaledHeight = (
  width: number,
  aspectRatio: number
): number => {
  return width / aspectRatio;
};

export const calculateScaledWidth = (
  height: number,
  aspectRatio: number
): number => {
  return aspectRatio * height;
};
