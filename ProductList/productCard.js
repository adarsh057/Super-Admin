import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const MediaControlCard = (props) => {
  const { allProducts } = props;

  const formatTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
  };


  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  
  const productChunks = chunkArray(allProducts, 4);

  return (
    <View style={styles.container}>
      <ScrollView>
        {productChunks.map((chunk, index) => (
          <View key={index} style={styles.row}>
            {chunk.map((eachProduct, idx) => (
              <View key={idx} style={styles.productContainer}>
                <Image
                  style={styles.thumbnail}
                  source={{ uri: `http://localhost:9000/${eachProduct.thumbnail.split(",")[0]}` }}
                />
                <View style={styles.content}>
                  <View style={styles.productRow}>
                    <Text style={{...styles.productContent,fontWeight:'500'}}>Product Name</Text>
                    <Text style={styles.productContent}>:</Text>
                    <Text style={styles.productContent}>{eachProduct.title}</Text>
                  </View>
                  <View style={styles.productRow}>
                    <Text style={{...styles.productContent,fontWeight:'500'}}>Product Price</Text>
                    <Text style={styles.productContent}>:</Text>
                    <Text style={styles.productContent}>{eachProduct.price}</Text>
                  </View>
                  <View style={styles.productRow}>
                    <Text style={{...styles.productContent,fontWeight:'500'}}>Status</Text>
                    <Text style={styles.productContent}>:</Text>
                    <Text style={styles.productContent}>{eachProduct.status}</Text>
                  </View>
                  <View style={styles.productRow}>
                    <Text style={{...styles.productContent,fontWeight:'500'}}>Time</Text>
                    <Text style={styles.productContent}>:</Text>
                    <Text style={styles.productContent}>{formatTimestampToDate(eachProduct.createdAt)}</Text>
                  </View>
                  <View style={styles.productRow}>
                    <Text style={{...styles.productContent,fontWeight:'500'}}>Quantity</Text>
                    <Text style={styles.productContent}>:</Text>
                    <Text style={styles.productContent}>{eachProduct.quantity}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding:20,
  },
  thumbnail: {
    width: 250,
    height: 200,
    marginBottom: 10,
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  productContent: {
    marginRight: 5,
  },
});

export default MediaControlCard;
