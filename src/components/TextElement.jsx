const TextElement = ({currentSymbol, text, danger}) => {

    const textStyles = {
      textSuccess: 'text-success bg-light',
      textDark: 'text-dark bg-light',
      textWhite: 'text-white bg-success p-1 rounded',
      textWhiteDanger: 'text-white bg-danger p-1 rounded'
    }
  
    const createClassName = (index) => {
      let className = ''
      if (index === currentSymbol) {
        className += danger? textStyles.textWhiteDanger : textStyles.textWhite
      } else if (index > currentSymbol) {
        className += textStyles.textDark
      } else {
        className += textStyles.textSuccess
      }
      return className
    }
  
    const textSymbols = text.split('').map((symbol, index) => {
      return (
        <span 
          className={`symbol ${createClassName(index)}`}
          key={index}>{symbol}
        </span>
      )
    })
  
    return (
      <p>
        {textSymbols}
      </p>
    )
  }

export default TextElement