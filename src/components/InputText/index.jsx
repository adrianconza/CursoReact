import React, { PropTypes } from 'react'

import styles from './input-text.css'

const propTypes = {
  usernameToReply: PropTypes.string.isRequired,
  onSendText: PropTypes.func.isRequired,
  onCloseText: PropTypes.func.isRequired
}

function InputText (props) {
  return (
    <form className={styles.form} onSubmit={props.onSendText}>
      <textarea className={styles.text} name='text'>
        {(props.usernameToReply) ? `@${props.usernameToReply} ` : ''}
      </textarea>
      <div className={styles.buttons}>
        <button className={styles.close} onClick={props.onCloseText}>Cerrar</button>
        <button className={styles.send} type='submit'>Enviar</button>
      </div>
    </form>
  )
}

InputText.propTypes = propTypes

export default InputText
