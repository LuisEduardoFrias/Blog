//
import ShowSvg, { TSize } from './show_svg';

type TArrowProos = {
  id: string,
  fill: string | null,
  size: TSize | null,
}

export default function ArrowIndicatorSvg({ id, fill, size }: TArrowProos) {
  return (
    <ShowSvg size={size} id={id} fill={fill} >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </ShowSvg >
  )
}