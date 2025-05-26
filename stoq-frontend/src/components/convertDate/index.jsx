function ConvertDate({data}) {
    
        const [ano,mes,dia] = data.split('-')
        return <span>{`${dia}/${mes}/${ano}`}</span>
    
}



export default ConvertDate