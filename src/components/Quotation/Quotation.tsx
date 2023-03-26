import classNames from 'classnames'
import { Parallax } from 'react-scroll-parallax'
import classes from './Quotation.module.scss'

interface QuotationProps {
  quote: string
  citation: string
  colorCode: 'bou' | 'chum' | 'none'
}

const Quotation = (props: QuotationProps) => {
  return (
    <Parallax speed={-3}>
      <div className={classes.outerWrapper}>
        <p
          className={classNames(classes.quotationMark, {
            chum: props.colorCode === 'chum',
            bou: props.colorCode === 'bou',
          })}
        >
          „
        </p>
        <p className={classNames(classes.quote)}>{props.quote}</p>
        <p
          className={classNames(classes.quotationMark, {
            chum: props.colorCode === 'chum',
            bou: props.colorCode === 'bou',
          })}
        >
          “
        </p>
      </div>
      {props.citation && props.citation.trim() != '' && (
        <p className={classNames(classes.citation)}>{`- ${props.citation}`}</p>
      )}
    </Parallax>
  )
}

export default Quotation
