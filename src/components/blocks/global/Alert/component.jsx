import React, { useEffect } from 'react'
import { useIntl } from 'react-intl'
import pt from 'prop-types'

import AlertStyle, { Colors } from './styles'

const Alert = ({ type, text, time, callback }) => {
  const intl = useIntl()
  const alertSuccess = intl.formatMessage({ id: 'alert_success_text' })
  const alertInfo = intl.formatMessage({ id: 'alert_info_text' })
  const alertWarning = intl.formatMessage({ id: 'alert_warning_text' })
  const alertError = intl.formatMessage({ id: 'alert_error_text' })

  let style, typeText, timerID

  const onToggleAlert = () => {
    callback()
  }

  switch (type) {
    case 'error':
      style = null
      typeText = alertError
      break
    case 'warning':
      style = 'warning'
      typeText = alertWarning
      break
    case 'info':
      style = 'info'
      typeText = alertInfo
      break
    case 'success':
      style = 'success'
      typeText = alertSuccess
      break
    default:
      style = null
      break
  }

  if (time) {
    timerID = setTimeout(() => {
      onToggleAlert()
    }, time)
  }

  useEffect(() => {
    return () => {
      clearTimeout(timerID)
    }
  }, [timerID])

  return (
    <Colors>
      <AlertStyle className={style}>
        <span className="close-btn" onClick={onToggleAlert}>&times;</span>
        <strong>{typeText}!</strong> {text}
      </AlertStyle>
    </Colors>
  )
}

Alert.propTypes = {
  type: pt.string.isRequired,
  text: pt.string.isRequired,
  time: pt.number,
  callback: pt.func.isRequired,
}

export default Alert
