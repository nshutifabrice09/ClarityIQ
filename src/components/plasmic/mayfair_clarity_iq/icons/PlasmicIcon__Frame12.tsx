// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame12Icon(props: Frame12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 604 105"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 19.09s72.212-4.754 120.4-6.839c48.132-2.082 78.058-19.707 120.4-3.58 53.978 20.56 72.255 95.332 120.4 95.301 48.175-.031 69.896-90.165 120.4-95.455C528.416 3.718 603 78.75 603 78.75"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Frame12Icon;
/* prettier-ignore-end */
