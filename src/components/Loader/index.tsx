import styles from "./Loader.module.css";

export interface ILoaderProps {
  height?: number;
}

const Loader = (props: ILoaderProps) => {
  return (
    <div
      className={styles.spinner}
      style={{
        height: `${props.height || 20}px`,
        width: `${props.height || 20}px`,
      }}
    />
  );
};

export default Loader;
