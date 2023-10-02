import React, { useEffect } from 'react';
import './index.scoped.css';
import { useInject } from '@/hooks/inject';
import { Link } from 'react-router-dom';

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
  }, []);

  const { currentShichen, solarTerms, time } = clock;

  return <div className='page-wrap'>
    <img src='https://app-static-1306115679.file.myqcloud.com/temp_imgs/1.jpg' className='bg-img' />
    <div className='clock-wrap'>
      <canvas width={700} height={700} className='clock' id="shi-chen-clock"></canvas>
    </div>
    <div className='clock-detail'>
      <div>
        <span>{solarTerms}</span>
        <span> {currentShichen?.name}时({currentShichen?.times?.[0]}:00 ~ {currentShichen?.times?.[1] + 1}:00)</span>
        <br />
        <span> {time} </span>
      </div>
      <div>
        <span> {currentShichen?.action} </span>
      </div>
      <Link to={`/jingluo/${currentShichen?.jingluo?.pName}`}>
        {currentShichen?.jingluo?.name}
      </Link>
    </div>
  </div>
})

export default Clock;