import { UilArrowUp, UilArrowDown } from '@iconscout/react-unicons';
import { Th } from './th-sortable.styles';

function ThSortable({ column, label, sortColumn, sortDirection, onSort }) {
  const isActive = sortColumn === column;

  const handleClick = () => {
    onSort(column);
  };

  return (
    <Th onClick={handleClick} style={{ cursor: 'pointer', userSelect: 'none' }}>
      {label} {isActive && (sortDirection === 'asc' ? <UilArrowUp size={14} /> : <UilArrowDown size={14} />)}
    </Th>
  );
}

export default ThSortable;
