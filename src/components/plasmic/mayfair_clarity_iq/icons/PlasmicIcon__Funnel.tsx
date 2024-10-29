// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FunnelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FunnelIcon(props: FunnelIconProps) {
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
          "M14.412 3.096A.989.989 0 0013.5 2.5h-11a1 1 0 00-.738 1.673l.005.005L6 8.698V13.5a1 1 0 001.554.832l2-1.333a1 1 0 00.446-.833V8.698l4.234-4.52.005-.005a.988.988 0 00.173-1.077zm-5.14 4.921A.995.995 0 009 8.698v3.468L7 13.5V8.698a.995.995 0 00-.27-.684L2.5 3.5h11L9.271 8.018z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FunnelIcon;
/* prettier-ignore-end */
