import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;

  align-items: flex-end; //por padrao vem flex start, flex ajusta na horizontal
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  margin:24px;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.View`
  flex:1;
  background: #fafafa;

  padding: 32px 24px 0;
`;

export const Header = styled.View`

`;

export const IngredinetsContainer = styled.View`
  margin-top: 32px;
  flex:1;
`;

export const Ingredient = styled.View`
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;

  padding: 16px;
  margin-bottom: 4px;

  flex-direction: row;
  align-items: center;

`;

export const Footer = styled.View`
  min-height: 110px;
  background:#fff;
  padding: 16px 24px;
`;

export const FooterContent = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content:space-between ;
`;

export const PriceContent = styled.View`


`;
