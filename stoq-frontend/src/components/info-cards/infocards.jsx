import { Card, Header, IconWrapper, Title, Value } from './infocards.styles';

const InfoCards = ({ Icon, title, value }) => {
  return (
    <Card>
      <Header>
        {Icon && (
          <IconWrapper>
            <Icon size="30" />
          </IconWrapper>
        )}
        <div>
           <Title>{title}</Title>
          {title === "Itens Com Estoque Baixo"  && <strong style={{color:""}}>Clique para ver detalhes</strong>}
        </div>
       
      </Header>
      <Value>{value}</Value>
      
    </Card>
  );
};

export default InfoCards;
