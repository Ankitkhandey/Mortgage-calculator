import React from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

const SliderComponent = ({ defaultValue , min , max, step , onChange, label, minAmount, maxAmount, currency, amount }) => {
  return (
    <Stack my={3}>
    <Stack gap={1}>
      <Typography variant="subtitle2">{label}</Typography>
      <Typography variant="h5">{currency} {amount}</Typography>
    </Stack>
    <Slider defaultValue={defaultValue} min={min} max={max} aria-label="Default" valueLabelDisplay="auto"
    marks
    step={step} 
    onChange={onChange}
    />
    <Stack direction="row" justifyContent="space-between">
      <Typography color="text.secondary" variant="caption">{currency} {minAmount}</Typography>
      <Typography color="text.secondary" variant="caption">{currency} {maxAmount}</Typography>
    </Stack>
    </Stack>

  )
}

export default SliderComponent
