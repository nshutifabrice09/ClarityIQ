// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group10Icon(props: Group10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.055 25.188H0V0h4.36l9.625 14.436 2.69 4.024h.304V0h4.055v25.188h-4.36L7.095 10.98 4.33 6.883h-.267v18.305h-.008z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
