import React, {PropTypes} from 'react'

import style from './message-list.css'
import Message from '../Message'

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRetweet: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onReplyTweet: PropTypes.func.isRequired
}

function MessageList (props) {
  return (
    <div className={style.root}>
      {props.messages.map(msg => {
        return (
          <Message
            key={msg.id}
            text={msg.text}
            picture={msg.picture}
            displayName={msg.displayName}
            username={msg.username}
            date={msg.date}
            numRetweets={msg.retweets}
            numFavorites={msg.favorites}
            onRetweet={() => props.onRetweet(msg.id)}
            onFavorite={() => props.onFavorite(msg.id)}
            onReplyTweet={() => props.onReplyTweet(msg.id, msg.username)}
          />
        )
      }).reverse()}
    </div>
  )
}

MessageList.propTypes = propTypes

export default MessageList
