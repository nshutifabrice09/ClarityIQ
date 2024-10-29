// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layout11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layout11Icon(props: Layout11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.286 2.571h-6v10.286h6V2.571zm0 13.715h-6v5.143h6v-5.143zm9.428-13.715h-6v5.143h6V2.571zm0 8.572h-6v10.286h6V11.143z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Layout11Icon;
/* prettier-ignore-end */
