import './index.scoped.css';
import React from 'react';
import Yao from '../Yao';
import Link from '@mui/material/Link';

interface PD {
  title: string;
  content: any;
}

const DeitalItem = (props: PD) => {
  const { title, content } = props;

  return <div className='detail-wrap'>
    <div className='detail-title flex-center'>{title}</div>
    <div className='detail-content flex-center'>{content}</div>
  </div>
}

interface P {
  title: string;
  subtitle: string;
  gua: any;
  dongyao: string;
  showDongyao?: boolean;
}

const ResultCard = (props: P) => {
  const { title, gua, subtitle, dongyao, showDongyao } = props;
  const { wai, nei, jx, yao6 } = gua;

  if (!wai || !nei) {
    return null;
  }

  const dongyaoNum = Number(dongyao) || 0;
  const dongyaoItem = showDongyao ? yao6.yaociArray[dongyaoNum - 1] : null

  return <div className='result-card'>
    <div className='result-header'>
      <h3 className='result-title'><span>{title}</span>-{yao6.name}</h3>
    </div>
    <div className='result-gua-wrap'>
      <div className='wai gua-wrap flex-center'>
        <div className='gua'>
          外卦({wai.name}为{wai.xiang})
        </div>
        <div className='img'>
          {wai.img.map((v: any, i: number) =>
            <Yao status={v} key={i} hl={dongyaoNum === 6 - i} />
          )}
        </div>
        <div className='ming'>
          用
        </div>
      </div>
      <div className='nei gua-wrap flex-center'>
        <div className='gua'>
          内卦({nei.name}为{nei.xiang})
        </div>
        <div className='img'>
          {nei.img.map((v: any, i: number) =>
            <Yao status={v} key={i} hl={dongyaoNum === 3 - i} />
          )}
        </div>
        <div className='ming'>
          体
        </div>
      </div>
    </div>
    <div className='result-detail-wrap'>
      <DeitalItem title="卦" content={
        <Link href={yao6.url} target='_blank'>{yao6.yuanwen}</Link>
      } />
      <DeitalItem title="象" content={
        <Link href={yao6.url} target='_blank'>{yao6.xiangyue}</Link>
      } />
      {dongyaoItem ?
        <DeitalItem title="动爻辞" content={
          <Link href={yao6.url} target='_blank'>{dongyaoItem.text}</Link>
        } /> : null
      }
      {dongyaoItem ?
        <DeitalItem title="动爻象" content={
          <Link href={yao6.url} target='_blank'>{dongyaoItem.xiangyue}</Link>
        } /> : null
      }
      <DeitalItem title={subtitle} content={
        <span style={{ color: jx.color }}>{jx.title}({jx.desc})</span>}
      />
      <DeitalItem title="含义" content={jx.mean} />
    </div>
  </div>
}
export default ResultCard;