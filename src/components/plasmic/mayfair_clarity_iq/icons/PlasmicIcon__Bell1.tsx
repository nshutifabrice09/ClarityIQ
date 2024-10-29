// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Bell1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Bell1Icon(props: Bell1IconProps) {
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
          "M18 11.143V8.57a6 6 0 10-12 0v2.572c0 2.828-2.571 3.514-2.571 5.143 0 1.457 3.342 2.571 8.571 2.571 5.229 0 8.571-1.114 8.571-2.571 0-1.629-2.571-2.315-2.571-5.143z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={
          "M12 20.571c-.867 0-1.68-.029-2.447-.085a2.565 2.565 0 004.894 0c-.766.056-1.58.085-2.447.085z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Bell1Icon;
/* prettier-ignore-end */
