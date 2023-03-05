import classNames from 'classnames'
import { Parallax } from 'react-scroll-parallax'
import classes from './Quotation.module.scss'

interface QuotationProps {
  quote: string
  citation: string
}

const Quotation = (props: QuotationProps) => {
  return (
    <Parallax speed={-5}>
      <div className={classes.outerWrapper}>
        <p className={classNames(classes.quotationMark)}>„</p>
        <p className={classNames(classes.quote)}>{props.quote}</p>
        <p className={classNames(classes.quotationMark)}>“</p>
      </div>
      {props.citation && props.citation.trim() != '' && (
        <p className={classNames(classes.citation)}>{`- ${props.citation}`}</p>
      )}
    </Parallax>
  )
}

export default Quotation
