//
import ShowSvg, { TSize } from './show_svg';

type TArrowProos = {
  id: string,
  fill: string | null,
  size: TSize | null,
}

export default function MenuSvg({ id, fill, size }: TArrowProos) {
  return (
    <ShowSvg size={size} id={id} fill={fill} >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </ShowSvg >
  )
}