import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { Card } from 'react-native-elements'; 
import MediaControlCard from './productCard';

const LabTabs = (props) => {
  const { allProducts,  } = props; 
  console.log("LabTabs - allProducts:", allProducts);
 
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'all', title: 'All' },
    
  ]);
  
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'all':
        return (
          <ScrollView contentContainerStyle={styles.tabContent}>
         
            <MediaControlCard allProducts={allProducts} />
            
           
          </ScrollView>
        );
        case 'active':
  console.log('Rendering ActiveProducts:', activeProducts);
  return (
    <ScrollView contentContainerStyle={styles.tabContent}>
      <allProducts activeProducts={allProducts} detailView={detailView} />
    </ScrollView>
  );
   default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={styles.indicator}
          style={styles.tabBar}
          labelStyle={styles.label}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  tabContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: 'white', 
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
  },
  indicator: {
    backgroundColor: 'white',
  },
});

export default LabTabs;
