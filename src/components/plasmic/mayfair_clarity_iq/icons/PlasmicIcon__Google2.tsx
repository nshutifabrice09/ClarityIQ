// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Google2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Google2Icon(props: Google2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.192 8.636h-7.16v3.069h4.058c-.65 2.045-2.25 2.727-4.09 2.727a4.432 4.432 0 112.845-7.825l2.23-2.123A7.5 7.5 0 1010 17.5c4.136 0 7.873-2.727 7.192-8.864z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Google2Icon;
/* prettier-ignore-end */
