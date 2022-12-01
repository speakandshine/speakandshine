import Image from "next/image";
import {
  calculateScaledHeight,
  calculateScaledWidth,
} from "src/shared/helpers/aspectRatios";

export interface IFilledImageProps {
  height?: number;
  width?: number;
  src: string;
  alt: string;
  containerStyle?: any;
  containerClass?: any;
  imageStyle?: any;
  imageClass?: any;
  aspectRatio: number;
}

const FilledImage = (props: IFilledImageProps) => {
  return (
    <div
      className={`relative ${props.containerClass ? props.containerClass : ""}`}
      style={{
        ...props.containerStyle,
        height: `${
          props.height
            ? props.height
            : calculateScaledHeight(
                props.width as number,
                props.aspectRatio as number
              )
        }px`,
        width: `${
          props.width
            ? props.width
            : calculateScaledWidth(
                props.height as number,
                props.aspectRatio as number
              )
        }px`,
      }}
    >
      <Image
        src={props.src}
        alt={props.alt}
        layout="fill"
        priority={false}
        objectFit="contain"
        style={props.imageStyle}
      />
    </div>
  );
};

export default FilledImage;
