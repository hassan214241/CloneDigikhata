import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { List, Text } from "react-native-paper";

const MainContainer = styled.View`
flex: 1;

`
const ContentList = styled.View`
 flex: 1;
 /* justify-content: center; */

 margin: 30px;

 `

export const More = () => {
    return (
        <MainContainer>
            <ContentList>
                <List.AccordionGroup>
                    <List.Accordion title="Accordion 1" id="1">
                        <List.Item title="Item 1" />
                    </List.Accordion>
                    <List.Accordion title="Accordion 2" id="2">
                        <List.Item title="Item 2" />
                    </List.Accordion>
                    <View>
                        {/* <Text>
                            List.Accordion can be wrapped because implementation uses React.Context.
                        </Text> */}
                        <List.Accordion title="Accordion 3" id="3">
                            <List.Item title="Item 3" />
                        </List.Accordion>
                    </View>
                </List.AccordionGroup>
            </ContentList>

        </MainContainer>
    )
}
