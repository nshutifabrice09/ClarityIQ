// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group17Icon(props: Group17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.96 10.17V7.42h12.834l-.49.819v-.39c0-.878-.193-1.688-.572-2.433-.378-.744-.95-1.34-1.715-1.79-.758-.45-1.708-.678-2.845-.678-1.136 0-2.138.243-2.993.722a5.042 5.042 0 00-2.005 2.048c-.476.885-.713 1.946-.713 3.184 0 1.238.23 2.343.69 3.25a4.887 4.887 0 001.983 2.093c.862.486 1.902.737 3.105.737.84 0 1.574-.082 2.191-.251.616-.17 1.13-.39 1.53-.678.4-.287.705-.59.914-.921.207-.332.326-.656.364-.988h3.543c-.067.708-.297 1.4-.7 2.093-.4.693-.965 1.312-1.693 1.872-.727.56-1.611 1.002-2.658 1.334-1.047.331-2.243.494-3.602.494-1.813 0-3.409-.384-4.776-1.143a8.14 8.14 0 01-3.201-3.168C.385 12.27 0 10.722 0 8.976 0 7.229.385 5.63 1.166 4.289c.772-1.349 1.856-2.395 3.23-3.154C5.779.383 7.353 0 9.137 0c1.781 0 3.386.383 4.715 1.142a7.816 7.816 0 013.076 3.147c.72 1.334 1.084 2.874 1.084 4.606 0 .206 0 .45-.015.714a3.06 3.06 0 01-.053.553H1.96v.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group17Icon;
/* prettier-ignore-end */
