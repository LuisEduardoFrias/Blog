//
import { ReactElement } from 'react'

export type TSize = {
  width: number,
  height: number
}

type TShowSvgProos = {
  id: string,
  fill: string | null,
  size: TSize | null,
  children: ReactElement
}

export default function ShowSvg({ id, size, fill, children }: TShowSvgProos) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={`${size?.width ?? 24}px`}
      height={`${size?.height ?? 24}px`}
      viewBox="0 -960 960 960" >
      <g id={id} fill={fill ?? "#ffffff"} >
        {children}
      </g>
    </svg>
  )
}