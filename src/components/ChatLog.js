import React from 'react';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const {entries, updateLikes} = props;
  // entries 

  return (
    <div className="chat-entry local">
      {
        entries.map(entry => (
          <ChatEntry key={entry.id} id={entry.id} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} liked={entry.liked} updateLikes={updateLikes}></ChatEntry>
        ))
      }
    </div>
  );
};

ChatLog.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool
    })
  ).isRequired,
  updateLikes: PropTypes.func

};

export default ChatLog;
