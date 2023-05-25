import React from 'react';
import { Box, Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

interface Event {
  id: string;
  title: string;
  date: Date;
}

interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Calendar
      </Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Event</Th>
          </Tr>
        </Thead>
        <Tbody>
          {events.map((event) => (
            <Tr key={event.id}>
              <Td>{event.date.toDateString()}</Td>
              <Td>{event.title}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Calendar;
