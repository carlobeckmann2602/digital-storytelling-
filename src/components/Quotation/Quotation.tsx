import classNames from 'classnames'
import { Parallax } from 'react-scroll-parallax'
import classes from './Quotation.module.scss'

interface QuotationProps {
  quote: string
  citation: string
  colorCode: 'bou' | 'chum' | 'none'
  paralax?: number
}

const Quotation = ({ quote, citation, colorCode = 'none', paralax = -3 }: QuotationProps) => {
  return (
    <Parallax speed={paralax}>
      <div className={classes.outerWrapper}>
        <p
          className={classNames(classes.quotationMark, {
            [classes.chum]: colorCode === 'chum',
            [classes.bou]: colorCode === 'bou',
          })}
        >
          „
        </p>
        <p className={classNames(classes.quote)}>{quote}</p>
        <p
          className={classNames(classes.quotationMark, {
            [classes.chum]: colorCode === 'chum',
            [classes.bou]: colorCode === 'bou',
          })}
        >
          “
        </p>
      </div>
      {citation && citation.trim() != '' && (
        <p className={classNames(classes.citation)}>{`- ${citation}`}</p>
      )}
    </Parallax>
  )
}

export default Quotation
