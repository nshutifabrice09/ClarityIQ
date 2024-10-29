// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppleIcon(props: AppleIconProps) {
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
          "M13.143 11.099c-.281.623-.416.9-.778 1.451-.504.769-1.216 1.726-2.099 1.734-.784.007-.985-.51-2.049-.504-1.063.006-1.286.513-2.07.506-.882-.008-1.556-.872-2.061-1.641-1.412-2.15-1.56-4.672-.688-6.013.619-.953 1.595-1.51 2.513-1.51.935 0 1.523.512 2.296.512.75 0 1.207-.513 2.287-.513.817 0 1.683.445 2.3 1.213-2.02 1.108-1.693 3.993.349 4.765z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={
          "M9.771 3.114c.372-.476.654-1.149.551-1.836-.607.041-1.315.427-1.73.93-.375.457-.686 1.133-.565 1.791.662.021 1.347-.374 1.744-.885z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppleIcon;
/* prettier-ignore-end */
