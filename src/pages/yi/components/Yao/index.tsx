import './index.scoped.css';

interface P {
  status: boolean
}

const Yao = (props: P) => {
  const status = props.status;

  return <div className='yao-wrap'>
    {status ? null : <div className='yin'></div>}
  </div>
}
export default Yao;