import {Button, Flex, Heading, HStack, Input, useNumberInput, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Stack} from '@chakra-ui/react';
import type {NextPage} from 'next';
import Head from 'next/head';
import { useCallback, useState } from 'react';
import Footer from '../components/Footer';
import GradeInput from '../components/GradeInput';

const Baiana: NextPage = () => {
  const [grade, setGrade] = useState(6)
  const [secondGrade, setSecondGrade] = useState(6)

  const result = (Math.round(((6 - ((0.4*grade) + (0.2*secondGrade))) / 0.4) * 100) / 100) || 0


  const handleChange = useCallback((str: string, num: number) => {
    setGrade(num);  
  }, [setGrade])

  const handleSecondChange = useCallback((str: string, num: number) => {
    setSecondGrade(num);
  }, [setSecondGrade])
  
  return (
    <div>
      <Head>
        <title>Baiana</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      <Flex height="90vh" alignItems="center" justifyContent="center">
        <Flex direction="column" backgroundColor="gray.100" p={12} rounded={6}>
          <Heading mb={6} alignSelf="center">
            BAIANA
          </Heading>
          <Stack spacing={5} mb={10}>
            <GradeInput textContent={'Primeira Nota'} handleChange={handleChange}/>
            <GradeInput textContent={'Nota Provão'} handleChange={handleSecondChange}/>
          </Stack>
          <HStack alignSelf="center">
            <Text>
              {
                `Nota para segunda prova é: ${result.toLocaleString('pt-BR',
                { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
              }
            </Text>
          </HStack>
        </Flex>
      </Flex>
      <Footer />
    </div>
  );
};

export default Baiana;
