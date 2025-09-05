/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 三个点跳跃的动画1756270660SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function 三个点跳跃的动画1756270660SvgIcon(
  props: 三个点跳跃的动画1756270660SvgIconProps
) {
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

      <circle cx={"4"} cy={"12"} r={"3"} fill={"currentColor"}>
        <animate
          id={"b"}
          attributeName={"cy"}
          begin={"0;a.end+0.25s"}
          calcMode={"spline"}
          dur={"0.6s"}
          keySplines={".33,.66,.66,1;.33,0,.66,.33"}
          values={"12;6;12"}
        ></animate>
      </circle>

      <circle cx={"12"} cy={"12"} r={"3"} fill={"currentColor"}>
        <animate
          attributeName={"cy"}
          begin={"b.begin+0.1s"}
          calcMode={"spline"}
          dur={"0.6s"}
          keySplines={".33,.66,.66,1;.33,0,.66,.33"}
          values={"12;6;12"}
        ></animate>
      </circle>

      <circle cx={"20"} cy={"12"} r={"3"} fill={"currentColor"}>
        <animate
          id={"a"}
          attributeName={"cy"}
          begin={"b.begin+0.2s"}
          calcMode={"spline"}
          dur={"0.6s"}
          keySplines={".33,.66,.66,1;.33,0,.66,.33"}
          values={"12;6;12"}
        ></animate>
      </circle>
    </svg>
  );
}

export default 三个点跳跃的动画1756270660SvgIcon;
/* prettier-ignore-end */
