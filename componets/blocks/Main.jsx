/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { YOUTUBE_URL } from '../../constants'

const Main = () => {
  const [muted, setMuted] = useState(true)
  const toggleSound = () => setMuted(!muted)
  return (
    <div className="main-block">
      <video
        src="/main.mp4"
        alt="video"
        className="video"
        autoPlay
        muted={muted}
        loop
        volume={0}
      />

      <img
        className="sound-toggle"
        src={muted ? '/assets/sound-off.svg' : '/assets/sound-on.svg'}
        alt={muted ? 'sound-off' : 'sound-on'}
        title={muted ? 'Turn sound off' : 'Turn sound on'}
        onClick={toggleSound}
      />

      <a
        href={YOUTUBE_URL}
        target="_blank"
        className="youtube-btn"
        rel="noreferrer"
      >
        <img
          src="/assets/youtubeButton.svg"
          alt="sound"
          title="Turn sound on"
        />
      </a>
    </div>
  )
}

export default Main
