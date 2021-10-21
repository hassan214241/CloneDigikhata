import React from 'react'
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Customer } from "../customer";
import { Supplier } from "../supplier";


const renderScene = SceneMap({
    customer: Customer,
    supplier: Supplier,
});
export const Home = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'customer', title: 'Customer' },
        { key: 'supplier', title: 'Supplier' },
    ]);
    return (
        <TabView

            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => <TabBar {...props} style={{ backgroundColor: 'tomato' }} />}
        />
    )
}
