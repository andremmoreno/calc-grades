import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'


type StringOrNumber = {valueAsString: string, valueAsNumber: number};

type Props = {
  textContent: string;
  handleChange: (valueAsString: string, valueAsNumber: number) => void
}

const GradeInput: React.FC<Props> = ({
  textContent,
  handleChange
}) => {

  return (
    <FormControl variant="floating" id="first-name">
      <FormLabel>{ textContent }</FormLabel>
      <NumberInput 
        onChange={handleChange}
        focusInputOnChange
        inputMode='none'
        defaultValue={6}
        precision={2}
        step={0.1}
        max={10}
        min={0}
        allowMouseWheel
      >
        <NumberInputField/>
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>

  )
}

export default GradeInput
