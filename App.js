import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, Button, Alert, ActivityIndicator, Vibration } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => (
  <View style={styles.container}>
    <ScrollView nestedScrollEnabled={true}>
      <Image source={require('./assets/konexio-logo_1.png')} />      
      <Text style={styles.first}>Hello native world</Text>
      <Text style={styles.second}>Hello again native world</Text>
      <ActivityIndicator />
      <Text style={styles.third}>Bye native world</Text>
      
      <Image 
        source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
        style={styles.logo}
      />

      <View style={styles.fixToText}>
        <Button
          onPress={() => {
            Vibration.vibrate();
            Alert.alert('Shh!', "It wasn't a button, ok?") 
          }}          
          title="Not a button at all"
          color="lightblue"
          style={styles.button}
        />
      </View>

      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      
      <ScrollView nestedScrollEnabled={true}>        
        <WebView source={{ uri: 'https://www.konexio.eu/' }} style={styles.webview}></WebView>
      </ScrollView>      
    </ScrollView>
  </View>  
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',    
    paddingTop: 50,
    flex: 1    
  },  
  first: {
    fontSize: 30,    
  },
  second: {
    textAlign: 'center'
  },
  third: {
    fontWeight: 'bold'
  },
  logo: {
    height: 100,
    marginBottom: 20,    
    resizeMode: 'contain'
  },
  fixToText: {
    alignItems: 'center'
  },
  webview : {
    marginVertical: 20,
    flex: 0,
    height: 400,    
  }
});

export default App;