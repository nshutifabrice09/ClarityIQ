// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoFacebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoFacebookIcon(props: LogoFacebookIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.4 8A6.4 6.4 0 107 14.322V9.85H5.375V8H7V6.59c0-1.604.956-2.49 2.417-2.49.48.007.96.048 1.433.125V5.8h-.807A.925.925 0 009 6.8V8h1.775l-.284 1.85H9v4.472A6.4 6.4 0 0014.4 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoFacebookIcon;
/* prettier-ignore-end */
