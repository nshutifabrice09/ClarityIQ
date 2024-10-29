// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GoogleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GoogleIcon(props: GoogleIconProps) {
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
          "M13.753 6.91H8.026v2.454h3.246C10.752 11 9.472 11.546 8 11.546a3.545 3.545 0 112.276-6.26l1.784-1.7A6 6 0 108 14c3.308 0 6.299-2.182 5.753-7.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GoogleIcon;
/* prettier-ignore-end */
