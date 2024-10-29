// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group24Icon(props: Group24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.396 0c1.183 0 2.215.237 3.096.71.902.473 1.593 1.095 2.074 1.864 0-1.291 1.064-2.337 2.375-2.337h2.766v16.477c0 1.518-.31 2.89-.932 4.112-.601 1.242-1.532 2.228-2.795 2.958-1.243.73-2.796 1.095-4.66 1.095-2.485 0-4.5-.582-6.043-1.746C1.734 21.99.852 20.431.632 18.46h5.08c.16.631.541 1.124 1.142 1.48.602.374 1.343.561 2.225.561 1.063 0 1.904-.305 2.525-.917.642-.591.962-1.548.962-2.87v-2.336c-.5.769-1.192 1.4-2.074 1.893-.881.474-1.913.71-3.096.71-1.383 0-2.636-.345-3.758-1.035-1.123-.71-2.015-1.706-2.676-2.988C.32 11.655 0 10.157 0 8.46c0-1.696.32-3.185.962-4.466.661-1.282 1.553-2.268 2.676-2.959C4.76.345 6.013 0 7.396 0zm5.17 8.49c0-1.262-.36-2.258-1.082-2.988-.701-.73-1.563-1.094-2.585-1.094s-1.894.365-2.615 1.094c-.702.71-1.053 1.696-1.053 2.958 0 1.263.35 2.268 1.053 3.018a3.538 3.538 0 002.615 1.094c1.022 0 1.884-.364 2.585-1.094.722-.73 1.082-1.726 1.082-2.988z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group24Icon;
/* prettier-ignore-end */
