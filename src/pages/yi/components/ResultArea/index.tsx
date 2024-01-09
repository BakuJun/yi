import './index.scoped.css';
import React from 'react';
import ResultCard from '../ResultCard';
import { useInject } from '@/hooks/inject';

const ResultArea = useInject(['divination'])((props: any) => {
  const { divination } = props;
  const { yuanGua, bianGua } = divination;

  return <div>
    {yuanGua ? <ResultCard title='原卦' subtitle="当下" gua={yuanGua} dongyao={divination.dongyao} showDongyao/> : null}
    <div className='line'></div>
    {bianGua ? <ResultCard title='变卦' subtitle="未来" gua={bianGua} dongyao={divination.dongyao}/> : null}
  </div>
})
export default ResultArea;