//
import ShowSvg, { TSize } from './show_svg';

type TArrowProos = {
  id: string,
  fill: string | null,
  size: TSize | null,
}

export default function CloseSvg({ id, fill, size }: TArrowProos) {
  return (
    <ShowSvg size={size} id={id} fill={fill} >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </ShowSvg >
  )
}