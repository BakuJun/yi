import './index.scoped.css';

interface P {
  status: boolean,
  hl?: boolean,
}

const Yao = (props: P) => {
  const status = props.status;

  return <div className={`${props.hl ? 'yao-hl' : ''} yao-wrap`}>
    {status ? null : <div className='yin'></div>}
  </div>
}
export default Yao;