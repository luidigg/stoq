function ConvertDate({ data }) {
  if (!data) return null;

  const [ano, mes, dia] = data.split('T')[0].split('-');
  return <span>{`${dia}/${mes}/${ano}`}</span>;
}

export default ConvertDate;
