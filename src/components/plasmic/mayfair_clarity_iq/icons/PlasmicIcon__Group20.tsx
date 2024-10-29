// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group20Icon(props: Group20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 54"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M42.051 6.537L25.117 26.25l.088 1.058 3.047 2.576 1.066-.087 11.248-13.27.058.022c.146 5.995-.902 14.277-10.654 18.727-3.622 1.654-7.215 1.853-10.4.574-1.733-.697-3.375-1.87-4.66-3.326l.04-.127a9.597 9.597 0 001.198-.447c2.93-1.34 4.929-4.06 5.213-7.105.233-2.5-.718-4.756-2.541-6.039-1.118-.78-3.528-1.849-7.157-.191-3.378 1.539-5.089 4.796-4.688 8.939.09.94 1.172 9.293 10.513 13.36 2.376 1.033 4.84 1.448 7.182 1.448 3.166 0 6.104-.755 8.303-1.759 5.336-2.434 9.046-6.53 11.667-12.887 1.3-3.153 1.903-7.515 1.536-10.994l.04-.021 7.338 7.469v2.438c0 14.696-12.005 26.611-26.817 26.611-13.458 0-24.6-9.835-26.526-22.653.466.199.968.42 1.507.661A71.75 71.75 0 015.1 32.852a.748.748 0 00.837-.105.716.716 0 00.193-.812c-.364-.935-.298-2.5.153-3.561a1.275 1.275 0 00-.004-1.008 1.36 1.36 0 00-.753-.733c-1.267-.498-2.315-.9-3.185-1.232A82.49 82.49 0 010 24.488c.517-6.505 3.389-12.345 7.772-16.694A26.841 26.841 0 0126.737 0h26.817v16.657L43.162 6.49l-1.11.047z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group20Icon;
/* prettier-ignore-end */
