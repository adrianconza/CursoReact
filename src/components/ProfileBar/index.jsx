import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import styles from './profile-bar.css'

const propTypes = {
  picture: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onOpenText: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
}

function ProfileBar (props) {
  return (
    <div className={styles.root}>
      <Link to='/profile'>
        <figure>
          <img className={styles.avatar} src={props.picture} />
        </figure>
      </Link>
      <span className={styles.username}>Hola @{props.username}!</span>
      <button onClick={props.onOpenText} className={styles.button}>
        <span className="fa fa-lg fa-edit"></span> Tweet!
      </button>
      <button onClick={props.onLogout} className={styles.button}>
        <span className="fa fa-sign-out"></span> Salir
      </button>
    </div>
  )
}

ProfileBar.propTypes = propTypes

export default ProfileBar
