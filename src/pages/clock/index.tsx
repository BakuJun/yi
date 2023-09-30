import React, { useEffect } from 'react';
import './index.scoped.css';
import { useInject } from '@/hooks/inject';

const Clock = useInject(['clock'])(props => {
  const { clock } = props;
  useEffect(() => {
    const el = document.getElementById('shi-chen-clock');

    if (el) {
      clock.drawClock(el);
      clock.runClock();
    }

    return () => {
      clock.destoryClock();
    }
  }, [])

  return <>
    <div className='clock-wrap'>
      <canvas width={700} height={700} className='clock' id="shi-chen-clock"></canvas>
    </div>
    <div className='clock-detail'>
      <div>
        <span>{clock.solarTerms}</span>
        <span> {clock.currentShichen?.name}时({clock.currentShichen?.times?.[0]}:00 ~ {clock.currentShichen?.times?.[1] + 1}:00)</span>
        <br />
        <span> {clock.time} </span>
      </div>
      <div>
        <span> {clock.currentShichen?.action} </span>
      </div>
    </div>
  </>
})

export default Clock;