import './sass/main.scss';
import classes from './App.module.scss';

import classnames from 'classnames';

import hero from 'assets/hero.png';
import rocket from 'assets/rocket.png';

import InfoCard from 'components/InfoCard/InfoCard'
import Timer from 'components/Timer/Timer'

function App() {
  return (
    <div className={classes.container}>
      <img className={classnames(classes.container__header, 'animated animated--infinite animated--wiggle')} src={rocket} alt="Rocket" />
      <InfoCard
        title="Get your seat to Mars!"
        description="Earth is doomed, but don't worry! The last rocket is leaving for more soon, so hurry up and book your flight!"
        img={{ src: hero, alt: "Hero" }}
        className={classes.container__body}
      />
      <div className={classes.container__actions}>
        <h2 className={classes.container__actions__title}>Countdown to lift off</h2>
      </div>
      <div className={classes.container__actions__timers}>
        <Timer timerId="300" title="5min" durationSeconds={300} />
        <Timer timerId="10" title="10sec" durationSeconds={10} />
        <Timer timerId="5" title="5sec" durationSeconds={5} />
      </div>
    </div>
  );
}

export default App;
