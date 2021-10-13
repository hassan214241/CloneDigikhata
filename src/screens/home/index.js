import React from 'react';
import styled from 'styled-components';
import { Button, Avatar, Text } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const MainContainer = styled.View`
flex: 1;
`;
const CardContanier = styled.View`
flex: 3;
background-color: red;
`;
const CustomerCard = styled.View`
flex: 2;
justify-content: center;
align-items: center;
flex-direction: column;

`;
const AddBtn = styled.View`
flex: 1;
justify-content: center;
align-items: flex-end;
margin-right: 15px;
`;

const CardInfo = styled.View`
 flex: 3;
 display: flex;
 background-color: white;
 margin-top: 80px;
 margin-bottom: 10px;
 margin-left: 10px;
 margin-right: 10px;
 border-radius: 10px;
`;

const CashRegister = styled.View`
flex: 1;
background-color: white;
margin-left: 10px;
 margin-right: 10px;
 margin-bottom: 10px;
 border-radius: 10px;
 justify-content: center;
 align-items: center;
`;

const RepusDetials = styled.View`
 flex: 2;
 flex-direction: row;
 justify-content: space-around;
 border-radius: 10px;
 
`;
const Detials1 = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
const ReportBtn = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  
`;

export const Home = () => {
    return (
        <MainContainer>
            <CardContanier>
                <CardInfo>
                    <RepusDetials>
                        <Detials1>
                            <Text style={{ color: "green", fontSize: 16, fontWeight: "bold", }}>RS 0</Text>
                            <Text>Aapko dene hain</Text>
                        </Detials1>
                        <Detials1>
                            <Text style={{ color: "red", fontSize: 16, fontWeight: "bold", }}>RS 0</Text>
                            <Text>Aapko Milenge</Text>
                        </Detials1>
                    </RepusDetials>
                    <ReportBtn>
                        <Button
                            contentStyle={{
                                borderTopWidth: 0.5,
                                width: 300,
                                borderRadius: 10,
                                borderColor: 'gray',
                                flexDirection: "row-reverse",
                                backgroundColor: '#fff',
                            }}
                            labelStyle={{ color: 'red' }}
                            icon={({ color, size }) => (
                                <MaterialIcons name="chevron-right" size={24} color="red" />
                            )}
                        >Report</Button>
                    </ReportBtn>
                </CardInfo>
                <CashRegister>
                    <Button
                        contentStyle={{

                            width: 200,
                            borderRadius: 10,
                            borderColor: 'red',

                            backgroundColor: '#fff',
                        }}
                        labelStyle={{ color: 'red' }}

                    >Cash Register</Button>
                </CashRegister>

            </CardContanier>

            <CustomerCard>
                <Avatar.Image size={60} source={require('../../assests/user.png')} />
                <Text></Text>
                <Text>Customer add krein aur apna daily khata</Text>
                <Text>barqrar rakhein</Text>
            </CustomerCard>
            <AddBtn>
                <Button
                    contentStyle={{
                        borderWidth: 2,
                        width: 200,
                        borderRadius: 25,
                        borderColor: 'red',
                        backgroundColor: 'red',

                    }}
                    labelStyle={{ color: '#fff' }}
                    icon={({ color, size }) => (
                        <Feather name="user-plus" size={24} color="#fff" />
                    )}
                >ADD CUSTOMER</Button>
            </AddBtn>

        </MainContainer>
    )
}
