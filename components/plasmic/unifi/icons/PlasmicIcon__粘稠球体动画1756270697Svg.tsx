/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 粘稠球体动画1756270697SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 粘稠球体动画1756270697SvgIcon(
  props: 粘稠球体动画1756270697SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <filter id={"a"}>
          <feGaussianBlur
            in={"SourceGraphic"}
            result={"y"}
            stdDeviation={"1.5"}
          ></feGaussianBlur>

          <feColorMatrix
            in={"y"}
            result={"z"}
            values={"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"}
          ></feColorMatrix>

          <feBlend in={"SourceGraphic"} in2={"z"}></feBlend>
        </filter>
      </defs>

      <g fill={"currentColor"} filter={"url(#a)"}>
        <circle cx={"4"} cy={"12"} r={"3"}>
          <animate
            attributeName={"cx"}
            calcMode={"spline"}
            dur={"0.75s"}
            keySplines={".56,.52,.17,.98;.56,.52,.17,.98"}
            repeatCount={"indefinite"}
            values={"4;9;4"}
          ></animate>

          <animate
            attributeName={"r"}
            calcMode={"spline"}
            dur={"0.75s"}
            keySplines={".56,.52,.17,.98;.56,.52,.17,.98"}
            repeatCount={"indefinite"}
            values={"3;8;3"}
          ></animate>
        </circle>

        <circle cx={"15"} cy={"12"} r={"8"}>
          <animate
            attributeName={"cx"}
            calcMode={"spline"}
            dur={"0.75s"}
            keySplines={".56,.52,.17,.98;.56,.52,.17,.98"}
            repeatCount={"indefinite"}
            values={"15;20;15"}
          ></animate>

          <animate
            attributeName={"r"}
            calcMode={"spline"}
            dur={"0.75s"}
            keySplines={".56,.52,.17,.98;.56,.52,.17,.98"}
            repeatCount={"indefinite"}
            values={"8;3;8"}
          ></animate>
        </circle>
      </g>
    </svg>
  );
}

export default 粘稠球体动画1756270697SvgIcon;
/* prettier-ignore-end */
