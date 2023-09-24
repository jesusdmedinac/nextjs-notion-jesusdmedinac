import * as React from 'react'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'

import { useDarkMode } from 'lib/use-dark-mode'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2023 {config.author}</div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div>
        <a href='https://www.linkedin.com/in/jesusdmedinac/'>
          Linkedin
        </a>
        <strong> • </strong>
        <a href='https://www.facebook.com/jesusdmedinac'>
          Facebook
        </a>
        <strong> • </strong>
        <a href='https://www.instagram.com/jesusdmedinac/'>
        Instagram
        </a>
        <strong> • </strong>
        <a href='https://twitter.com/JesusDMedinaC'>
        X
        </a>
        <strong> • </strong>
        <a href='https://github.com/jesusdmedinac'>
        Github
        </a>
        <strong> • </strong>
        <a href='https://medium.com/jesus-medina'>
        Medium
        </a>
        <strong> • </strong>
        <a href='https://discord.gg/YnxksHvybq'>
        Discord
        </a>
        <strong> • </strong>
        <a href='https://www.twitch.tv/jesusdmedinac'>
        Twitch
        </a>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
