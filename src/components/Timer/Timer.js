import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import Button from 'components/UI/Button/Button'
import Time from 'components/Time/Time'

import { TIMER_LOCAL_STORAGE_PREFIX } from 'utils/constants'

import classes from './Timer.module.scss'

const Timer = ({ timerId, durationSeconds, title }) => {
    const [session, setSession] = useState(0)
    const [time, setTime] = useState({ minutes: 0, seconds: 0 })

    useEffect(() => {
        const key = TIMER_LOCAL_STORAGE_PREFIX + timerId
        const now = new Date().getTime()

        let deadline = localStorage.getItem(key)
        if (deadline === null) {
            deadline = now + durationSeconds * 1000
            localStorage.setItem(key, deadline)
        }
        
        const updateTime = () => {
            const timeLeft = Math.max(0, deadline - new Date().getTime())

            setTime({
                minutes: Math.floor((timeLeft / 1000 / 60) % 60),
                seconds: Math.floor((timeLeft / 1000) % 60)
            })
        }

        let interval
        if (deadline > now) {
            // Initital update
            updateTime()

            // Timed updates
            interval = setInterval(() => {
                updateTime()
                
                if (deadline < new Date().getTime()) {
                    alert(`You missed the last rocket to mars! Timer ${timerId}`)
                    clearInterval(interval)
                }
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [timerId, session])

    const handleResetTimer = () => {
        const key = TIMER_LOCAL_STORAGE_PREFIX + timerId
        const deadline = new Date().getTime() + durationSeconds * 1000
        localStorage.setItem(key, deadline)

        // Increase session to re-run the effect that updates the state and creates the interval
        setSession(prevSession => prevSession + 1)
    }

    return (
        <div className={classes.timer}>
            {title && <h6>{title}</h6>}
            <Time {...time} />
            <Button className={classes.timer__action} onClick={handleResetTimer}>Reset timer</Button>
        </div>
    )
}

Timer.propTypes = {
    timerId: PropTypes.string.isRequired,
    durationSeconds: PropTypes.number,
    title: PropTypes.string
}

Timer.defaultProps = {
    durationSeconds: 5
}

export default Timer
