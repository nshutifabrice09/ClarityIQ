// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyDollar1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyDollar1Icon(props: CurrencyDollar1IconProps) {
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
          "M12 2.571V21.43m3.857-16.287A9.677 9.677 0 0012 4.286c-2.169 0-4.714.857-4.714 3.428 0 5.143 9.428 2.572 9.428 7.715 0 2.571-2.156 3.408-4.714 3.428-1.75.008-3.49-.282-5.143-.857"
        }
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default CurrencyDollar1Icon;
/* prettier-ignore-end */
