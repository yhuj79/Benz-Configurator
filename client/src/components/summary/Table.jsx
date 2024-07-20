import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  useBreakpointValue,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";

import dataAll from "../../assets/data.json";

function Table({ options }) {
  const configs = dataAll.configs;
  const isMobile = useBreakpointValue({ base: true, md: false });

  const items = configs.map((m) => ({
    name: m.name,
    value: options[m.choices],
    price: options.prices[m.choices][options[m.choices]],
  }));

  const renderTable = () => (
    <ChakraTable variant="simple" size="sm">
      <Thead>
        <Tr>
          <Th color="#F8F8F7">Option</Th>
          <Th color="#F8F8F7">Selected</Th>
          <Th color="#F8F8F7">Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items.map((m, index) => (
          <Tr key={index}>
            <Td color="#D9D9D9">{m.name}</Td>
            <Td color="#D9D9D9">{m.value}</Td>
            <Td color="#D9D9D9">{m.price.toLocaleString()}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );

  const renderCards = () => (
    <Stack spacing={4}>
      {items.map((m, index) => (
        <Box key={index} p={3} borderWidth="1px" borderRadius="md">
          <Text fontSize='sm' fontWeight="bold">{m.name}</Text>
          <Divider my={2} />
          <Text fontSize='xs'>Selected: {m.value}</Text>
          <Text fontSize='xs'>Price: {m.price.toLocaleString()}</Text>
        </Box>
      ))}
    </Stack>
  );

  return <Box>{isMobile ? renderCards() : renderTable()}</Box>;
}

export default Table;
