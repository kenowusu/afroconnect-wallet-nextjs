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
import { useMemo } from 'react'
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
