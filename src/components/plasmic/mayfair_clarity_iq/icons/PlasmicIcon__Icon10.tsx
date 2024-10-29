// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        d={
          "M11 23a1 1 0 01-1-1V10a1 1 0 011.447-.894l12 6a1 1 0 010 1.788l-12 6A1.001 1.001 0 0111 23z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M16 2a14 14 0 1014 14A14 14 0 0016 2zm7.447 14.895l-12 6A1 1 0 0110 22V10a1 1 0 011.447-.894l12 6a1 1 0 010 1.788z"
        }
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
