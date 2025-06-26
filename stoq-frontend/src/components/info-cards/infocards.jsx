import { Card, Header, IconWrapper, Title, Value, SubText } from './infocards.styles';

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
          {title === "Itens Com Estoque Baixo" && (
            <SubText>Clique para ver detalhes</SubText>
          )}
        </div>

      </Header>
      <Value>{value}</Value>

    </Card>
  );
};

export default InfoCards;
