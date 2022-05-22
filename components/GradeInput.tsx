import { 
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel
} from '@chakra-ui/react'

type Props = {
  textContent: string;
  handleChange: (valueAsString: string, valueAsNumber: number) => void
}

const GradeInput: React.FC<Props> = ({
  textContent,
  handleChange
}) => {
  
  return (
    <FormControl variant="floating">
      <FormLabel>{ textContent }</FormLabel>
      <NumberInput 
        onChange={handleChange}
        focusInputOnChange
        inputMode='text'
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
