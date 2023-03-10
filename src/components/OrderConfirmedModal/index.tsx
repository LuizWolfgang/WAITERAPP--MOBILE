import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';

import {
  Container,
  OkButton
} from './styles';

 interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
 }

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps){
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <StatusBar style="light"/>
      <Container>
        <CheckCircle/>

        <Text color="#fff" weight="600" opacity={0.9} style={{ marginTop: 12}}>
          Pedido confirmado
        </Text>
        <Text color="#fff" opacity={0.9} style={{ marginTop: 12}}>
          O pedido já entrou na fila de produção!
        </Text>

        <OkButton onPress={onOk}>
          <Text color="#D73035" weight="600">
            OK
          </Text>
        </OkButton>
      </Container>

    </Modal>
  );
}
