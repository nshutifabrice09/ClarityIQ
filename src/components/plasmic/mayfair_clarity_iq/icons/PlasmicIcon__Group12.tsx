// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group12Icon(props: Group12IconProps) {
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
          "M1.96 10.17V7.42h12.835l-.49.819v-.39c0-.878-.193-1.688-.572-2.433-.379-.744-.95-1.34-1.716-1.79-.757-.45-1.708-.678-2.844-.678-1.137 0-2.14.243-2.994.722a5.045 5.045 0 00-2.005 2.048c-.475.885-.713 1.946-.713 3.184 0 1.238.23 2.343.69 3.25a4.884 4.884 0 001.984 2.093c.861.486 1.901.737 3.104.737.84 0 1.575-.082 2.191-.251.617-.17 1.13-.39 1.53-.678.401-.287.706-.59.914-.921a2.33 2.33 0 00.364-.988h3.543c-.067.708-.297 1.4-.698 2.093-.401.693-.966 1.312-1.694 1.872s-1.612 1.002-2.659 1.334c-1.047.331-2.243.494-3.602.494-1.812 0-3.41-.384-4.776-1.143a8.14 8.14 0 01-3.2-3.168C.385 12.27 0 10.722 0 8.976 0 7.229.386 5.63 1.166 4.289c.772-1.349 1.857-2.395 3.23-3.154C5.779.383 7.354 0 9.137 0c1.782 0 3.386.383 4.716 1.142a7.816 7.816 0 013.075 3.147c.72 1.334 1.084 2.874 1.084 4.606 0 .206 0 .45-.015.714-.007.273-.03.457-.052.553H1.961v.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
