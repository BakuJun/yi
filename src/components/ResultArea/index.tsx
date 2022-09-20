import './index.css';
import React from 'react';
import ResultCard from '../ResultCard';
import { useInject } from '@/hooks/inject';

const ResultArea = useInject(['divination'])((props: any) => {
  const { divination } = props;
  const { yuanGua, bianGua } = divination;

  return <div>
    {yuanGua ? <ResultCard title='原卦' subtitle="当下" gua={yuanGua} /> : null}
    {bianGua ? <ResultCard title='变卦' subtitle="未来" gua={bianGua} /> : null}
  </div>
})
export default ResultArea;