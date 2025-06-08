function ConvertDate({ data }) {
  if (!data) return null;

  const [ano, mes, dia] = data.split('-');
  return <span>{`${dia}/${mes}/${ano}`}</span>;
}

export default ConvertDate;
