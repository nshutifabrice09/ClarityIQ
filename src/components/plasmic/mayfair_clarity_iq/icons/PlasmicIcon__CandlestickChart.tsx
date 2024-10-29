// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CandlestickChartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CandlestickChartIcon(props: CandlestickChartIconProps) {
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
          "M6 3.429H2.571v12H6v-12zm7.714 6.857h-3.428v6.857h3.428v-6.857zm7.715-1.715H18v12h3.429v-12zM4.286 15.429v5.142M12 17.143v3.428m0-10.285V6m7.714 2.571V3.43"
        }
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default CandlestickChartIcon;
/* prettier-ignore-end */
