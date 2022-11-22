import './index.css';
import React from 'react';
import Yao from '../Yao';

interface P {
  title: string;
  subtitle: string;
  gua: any;
}

const ResultCard = (props: P) => {
  const { title, gua, subtitle } = props;
  const { shang, xia, jx } = gua;

  if (!shang || !xia) {
    return null;
  }

  return <div className='result-card'>
    <div className='result-header'>
      <h3 className='result-title'>{title}{`(${shang.xiang}${xia.xiang})`}</h3>
    </div>
    <div className='result-gua-wrap'>
      <div className='shang gua-wrap flex-center'>
        <div className='gua'>
          上卦({shang.name},{shang.nature})
        </div>
        <div className='img'>
          {shang.img.map((v: any, i: number) =>
            <Yao status={v} key={i} />
          )}
        </div>
        <div className='ming'>
          用
        </div>
      </div>
      <div className='xia gua-wrap flex-center'>
        <div className='gua'>
          下卦({xia.name},{xia.nature})
        </div>
        <div className='img'>
          {xia.img.map((v:any, i:number) =>
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