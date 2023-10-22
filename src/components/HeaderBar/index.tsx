import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './index.scoped.css';
import { useNavigate } from 'react-router-dom';

const HeaderBar = (props) => {
  const { title } = props;
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  return <div className='header-wrap'>
    <ArrowBackIosIcon className="icon" fontSize="small" onClick={goBack} />
    <h3>{title}</h3>
  </div>
}

export default HeaderBar;