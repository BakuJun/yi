import React, { useEffect } from 'react';
import './index.scoped.css';
import './index.css';
import { useInject } from '@/hooks/inject';
import { Link } from 'react-router-dom';
import { setPageTitle } from '@/common/utils';

setPageTitle('养生钟')

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

  const { currentShichen, time } = clock;
  const { imgUrl } = clock.jieqiObj();

  return <div className='page-wrap flex-center'>
    <div className='clock-wrap'>
      <img src={imgUrl} className='bg-img' />
      <canvas width={700} height={700} className='clock' id="shi-chen-clock"></canvas>
    </div>
    <div className='clock-detail'>
      <div className='detail-item'>
        <label className='flex-center'>时辰</label>
        <div className='flex-center'> {currentShichen?.name}时({currentShichen?.times?.[0]}:00 ~ {(currentShichen?.times?.[1] || 0) + 1}:00)</div>
      </div>
      <div className='detail-item'>
        <label className='flex-center'>时间</label>
        <div className='flex-center'> {time} </div>
      </div>
      <div className='detail-item'>
        <label className='flex-center'>养生小建议</label>
        <div className='flex-center'> {currentShichen?.action} </div>
      </div>
      <div className='detail-item'>
        <label className='flex-center'>当令经络</label>
        <Link to={`/jingluo/${currentShichen?.jingluo?.pName}`}>
          {currentShichen?.jingluo?.name}
        </Link>
      </div>
    </div>
  </div>
})

export default Clock;