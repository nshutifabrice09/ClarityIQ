// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoFacebook2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoFacebook2Icon(props: LogoFacebook2IconProps) {
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
          "M18 10a8 8 0 10-9.25 7.903v-5.59H6.719V10H8.75V8.238c0-2.005 1.194-3.113 3.021-3.113.6.008 1.2.06 1.791.156V7.25h-1.008A1.156 1.156 0 0011.25 8.5V10h2.219l-.355 2.313H11.25v5.59A8 8 0 0018 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoFacebook2Icon;
/* prettier-ignore-end */
