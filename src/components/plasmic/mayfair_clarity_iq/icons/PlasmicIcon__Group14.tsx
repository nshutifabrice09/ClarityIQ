// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group14Icon(props: Group14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.158 17.922c-1.753 0-3.32-.369-4.702-1.098a8.137 8.137 0 01-3.268-3.14C.394 12.33 0 10.73 0 8.895 0 7.06.394 5.476 1.188 4.15a8.123 8.123 0 013.268-3.073C5.838.36 7.405 0 9.158 0c1.322 0 2.503.199 3.528.597 1.032.398 1.901.921 2.614 1.57a6.945 6.945 0 011.627 2.151c.371.781.557 1.563.557 2.344v.11h-3.528c0-.051 0-.118-.015-.191-.015-.067-.022-.14-.03-.207a3.346 3.346 0 00-.757-1.71c-.416-.5-.966-.898-1.642-1.186-.676-.294-1.47-.442-2.384-.442a5.96 5.96 0 00-2.748.641c-.84.428-1.508 1.076-2.013 1.946-.505.87-.757 1.953-.757 3.257s.252 2.395.75 3.28c.497.883 1.166 1.554 1.998 2.01.84.458 1.76.686 2.763.686 1.084 0 1.968-.162 2.659-.493.69-.332 1.21-.774 1.56-1.334.348-.56.549-1.165.608-1.813h3.528c0 .781-.178 1.57-.542 2.365-.357.796-.891 1.526-1.59 2.174-.697.649-1.566 1.172-2.599 1.563-1.032.39-2.228.59-3.587.59v.014z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group14Icon;
/* prettier-ignore-end */
