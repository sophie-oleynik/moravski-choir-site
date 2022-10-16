import { useText } from '../../locales'
import { PATREON_URL } from '../../constants'

const Support = () => {
  const t = useText()
  return (
    <div className="support-block" id="support">
      <div className="support-block-content">
        <h3 className="title">{t('support')}</h3>

        <a
          href={PATREON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <PatreonSvg /> Patreon
        </a>
      </div>
    </div>
  )
}

export default Support

const PatreonSvg = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_301_311)">
      <path
        d="M4.7315 0.421875V23.5172H0.5V0.421875H4.7315ZM15.8428 0.421875C20.6241 0.421875 24.5 4.29778 24.5 9.07903C24.5 13.8603 20.6241 17.7362 15.8428 17.7362C11.0616 17.7362 7.18569 13.8602 7.18569 9.07903C7.18569 4.29778 11.0617 0.421875 15.8428 0.421875Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_301_311">
        <rect
          width="24"
          height="23.1562"
          fill="white"
          transform="translate(0.5 0.421875)"
        />
      </clipPath>
    </defs>
  </svg>
)
