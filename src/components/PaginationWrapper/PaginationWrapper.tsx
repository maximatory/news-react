import { IPaginationProps } from "../../interfaces/interfaxes";
import Pagination from "../Pagination/Pagination";

interface Props {
  children: React.ReactNode
  top?: boolean
  bottom?: boolean
}

export default function PaginationWrapper({top, bottom, children, ...paginationProps}:Props & IPaginationProps) {
  return (
    <>
        {top && <Pagination {...paginationProps}/>}
        {children}
        {bottom && <Pagination {...paginationProps}/>}
    </>
  )
}