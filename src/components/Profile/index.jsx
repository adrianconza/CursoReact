import React, { PropTypes } from 'react'

import styles from './profile.css'

const propTypes = {
  picture: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

function Profile (props) {
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={props.picture} />
      <span className={styles.name}>{props.displayName}</span>
      <ul className={styles.data}>
        <li>
          <span className='fa fa-user'></span> {props.username}
        </li>
        <li>
          <span className='fa fa-envelope'></span> {props.emailAddress}
        </li>
        <li>
          <span className='fa fa-map-marker'></span> {props.location}
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = propTypes

export default Profile
