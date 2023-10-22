import './index.scoped.css';
import React, { useCallback, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

import { useInject } from '@/hooks/inject';

import { DIVINATION_TYPES } from '@/common/constants';


const InputArea = useInject(['divination'])((props: any) => {
  const { divination } = props;
  const { dongyao, n1, n2, type } = divination

  const handleChange = useCallback((e: SelectChangeEvent) => {
    const value = e.target.value;
    divination.clear();
    divination.setType(value);
  }, [])

  const handleChangeNumber = useCallback((v: string, fn: string) => {
    let num = Number(v)
    if (v === '' || num && num > 0) {
      // @ts-ignore
      divination[fn](Number(v || 0))
    }
  }, [])

  const handleSubmit = function () {
    divination.submit();
  }

  useEffect(() => {
    divination.setType(DIVINATION_TYPES.NUMBERS);
  }, [])

  return <div className='input-area'>
    <FormControl variant="standard" sx={{ m: 1, width: '100%' }}>
      <InputLabel id="demo-multiple-name-label">占卦类型</InputLabel>
      <Select
        value={type}
        onChange={handleChange}
        disabled
      >
        <MenuItem key={1} value={DIVINATION_TYPES.YMDH}>年月日时</MenuItem>
        <MenuItem key={2} value={DIVINATION_TYPES.NUMBERS}>输入2个数字(有先后)</MenuItem>
      </Select>
    </FormControl>
    {type === DIVINATION_TYPES.NUMBERS ?
      <>
        <FormControl sx={{ m: 1, width: '100%' }}>
          <TextField id="number1" label="第一个数字" placeholder="1-8的一个数字" type="number"
            value={n1 || ''}
            onChange={e => handleChangeNumber(e.target.value, 'setN1')}
            InputProps={{
              inputMode: 'numeric',
              inputProps: { min: "0", max: "10", step: "1" }
            }} required variant="standard" />
        </FormControl>
        <FormControl sx={{ m: 1, width: '100%' }}>
          <TextField id="number2" label="第二个数字" placeholder="1-8的一个数字" type="number"
            value={n2 || ''}
            onChange={e => handleChangeNumber(e.target.value, 'setN2')}
            InputProps={{
              inputMode: 'numeric',
              inputProps: { min: "0", max: "10", step: "1" }
            }} required variant="standard" />
        </FormControl>
      </> :
      null
    }
    <FormControl sx={{ m: 1, width: '100%' }}>
      <TextField id="number-result" label="动爻" type="number" value={dongyao}
        InputProps={{
          readOnly: true,
        }} variant="standard" />
    </FormControl>
    <div className='btn-wrap'>
      <Button variant="contained" onClick={handleSubmit}>开始占卜</Button>
    </div>
  </div>
})
export default InputArea;