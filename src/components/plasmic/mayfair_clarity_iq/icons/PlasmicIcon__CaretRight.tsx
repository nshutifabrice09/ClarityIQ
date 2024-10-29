// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaretRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaretRightIcon(props: CaretRightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M35.48 26.105L19.856 41.73a1.565 1.565 0 01-2.55-.507 1.565 1.565 0 01.338-1.703L32.166 25 17.645 10.48a1.563 1.563 0 012.21-2.21L35.48 23.895a1.563 1.563 0 010 2.21z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CaretRightIcon;
/* prettier-ignore-end */
