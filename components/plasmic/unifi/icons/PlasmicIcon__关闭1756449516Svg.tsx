/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 关闭1756449516SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 关闭1756449516SvgIcon(props: 关闭1756449516SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeDasharray={"12"}
        strokeDashoffset={"12"}
        strokeLinecap={"round"}
        strokeWidth={"2"}
        d={"m12 12 7 7m-7-7L5 5m7 7-7 7m7-7 7-7"}
        data-swindex={"0"}
      >
        <animate
          fill={"freeze"}
          attributeName={"stroke-dashoffset"}
          dur={"0.4s"}
          values={"12;0"}
        ></animate>
      </path>
    </svg>
  );
}

export default 关闭1756449516SvgIcon;
/* prettier-ignore-end */
