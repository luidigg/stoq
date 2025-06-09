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
        <Title>{title}</Title>
      </Header>
      <Value>{value}</Value>
    </Card>
  );
};

export default InfoCards;
