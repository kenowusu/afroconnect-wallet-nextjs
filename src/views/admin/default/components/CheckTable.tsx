import axios from 'axios'
const apiUrl = process.env.NEXT_PUBLIC_API_URL


import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  TableContainer,
  Tfoot,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect, useMemo } from 'react'
import {
  ColumnInstance,
  HeaderGroup,
  Row,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
  UseTableColumnProps
} from 'react-table'

// Custom components
import Card from 'components/card/Card'
import Menu from 'components/menu/MainMenu'
import {} from 'components/charts/LineAreaChart'
import { TableProps } from '../variables/columnsData'


export default function CheckTable () {


useEffect( async()=>{
  
  try {
    const users =  await axios({
      url:`${apiUrl}/transact/credit`,
      method:'post',
      data:{
        email:'johndoe3@gmail.com',
        creditAmount:'40.00'
      }
    })

    console.log(users)
  } catch (error) {
    console.log(error)
  }
 
},[])

  return (
    <Card
      flexDirection='column'
      w='100%'
      px='0px'
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      {/* <Flex px='25px' justify='space-between' align='center'>
        <Text
         
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'
        >
          Check Table
        </Text>
        <Menu />
      </Flex>
     */}


<TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Email</Th>
        <Th>Balance</Th>
        <Th >Firstname</Th>
        <Th>Lastname</Th>

      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>johndoe@gmail.com</Td>
        <Td >30.00</Td>
        <Td>John</Td>
        <Td>Doe</Td>
      </Tr>

    </Tbody>

  </Table>
</TableContainer>
    </Card>
  )
}
