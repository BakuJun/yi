import './index.scoped.css';
import React from 'react';
import Yao from '../Yao';

interface P {
  title: string;
  subtitle: string;
  gua: any;
}

const ResultCard = (props: P) => {
  const { title, gua, subtitle } = props;
  const { wai, nei, jx } = gua;

  if (!wai || !nei) {
    return null;
  }

  return <div className='result-card'>
    <div className='result-header'>
      <h3 className='result-title'>{title}{`(${wai.xiang}${nei.xiang})`}</h3>
    </div>
    <div className='result-gua-wrap'>
      <div className='wai gua-wrap flex-center'>
        <div className='gua'>
          上卦({wai.name}为{wai.xiang})
        </div>
        <div className='img'>
          {wai.img.map((v: any, i: number) =>
            <Yao status={v} key={i} />
          )}
        </div>
        <div className='ming'>
          用
        </div>
      </div>
      <div className='nei gua-wrap flex-center'>
        <div className='gua'>
          下卦({nei.name}为{nei.xiang})
        </div>
        <div className='img'>
          {nei.img.map((v:any, i:number) =>
            <Yao status={v} key={i} />
          )}
        </div>
        <div className='ming'>
          体
        </div>
      </div>
    </div>
    <div className='result-jx-wrap'>
      <div className='jx-title' style={{ color: jx.color }}>
        {subtitle}: {jx.title}({jx.desc})
      </div>
      <div>
        含义:{jx.mean}
      </div>
    </div>
  </div>
}
export default ResultCard;