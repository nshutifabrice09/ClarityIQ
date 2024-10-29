// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type QuestionMark1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function QuestionMark1Icon(props: QuestionMark1IconProps) {
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
          "M9.429 4.963c2.395-1.059 5.496-.934 6.555.78 1.059 1.714.328 3.707-1.487 5.246C12.68 12.527 12 13.362 12 14.57"
        }
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M12 20.571a1.286 1.286 0 100-2.57 1.286 1.286 0 000 2.57z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default QuestionMark1Icon;
/* prettier-ignore-end */
