import './index.css';
import React from 'react';
import { useInject } from '@/hooks/inject';
import { DIVINATION_TYPES } from '@/common/constants';

const InputArea = useInject(['divination'])((props) => {
  const { divination } = props;

  return <div>
    <div>
      <select>
        <option value={DIVINATION_TYPES.YMDH}>年月日时</option>
        <option value={DIVINATION_TYPES.NUMBERS}>输入2个数字(有先后)</option>
      </select>
      <div className="user-box">
        <input type="text" name="" required />
        <label>Username</label>
      </div>
      <div className="user-box">
        <input type="password" name="" required />
        <label>Password</label>
      </div>
    </div>
  </div>
})
export default InputArea;