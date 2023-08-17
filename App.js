import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';


export default function App() {
  return (
    <ScrollView style={styles.topArea}>
    {/* <SafeAreaView> */}
    <View style={styles.container}
    >
      <View style={styles.logoBloc}> 
      <Image
            source={require("./assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
      />
      </View>

      <Text style={styles.title}> Interstellar</Text>
      <Text style={styles.info}> 2014 PG-13 2h49min Adventure, Drama, Sci-Fi</Text>

      <View style={styles.rowDirection}>
        <Image 
        source={require("./assets/film.jpg")}
        style={styles.affiche}
        />
        <View style={styles.text}>
          <Text style={styles.description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque. Inventore ut suscipit dignissimos totam unde provident beatae  </Text>
          <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>+ ADD TO WATCHLIST</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.note}>
        <View style={styles.noteItem}>
        <Ionicons name="ios-star" size={24} color="yellow" />
        <Text style={styles.noteText}>8.6/10</Text>
        <Text style={styles.rateNumber}>1.1M</Text>
        </View>
        <View style={styles.noteItem}>
        <Ionicons name="ios-star-outline" size={24} color="white" />
        <Text style={styles.noteText}>RATE THIS</Text>
        <Text></Text>
        </View>
        <View style={styles.noteItem}>
          <Text style={styles.num}>74</Text>
          <Text style={styles.noteText}>Metascore</Text>
          <Text style={styles.rateNumber}>46 critic reviewq</Text>
        </View>
      </View>

      <View style={styles.picsTop}>
        <Text style={styles.picsTitle}>TopBilled Cast</Text>
        <Text style={styles.seeAll}>SEE ALL</Text>
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.actorBloc}>
          <Image 
          source={require("./assets/matthew.jpg")}
          style={styles.actorPics}
          />
          <Text style={styles.actorName}>Matthew</Text>
          <Text style={styles.filmName}>cooper</Text>
        </View>
        <View style={styles.actorBloc}>
          <Image
          source={require("./assets/anne.jpg")}
          style={styles.actorPics}
          />
          <Text style={styles.actorName}>Anne</Text>
          <Text style={styles.filmName}>Brand</Text>
        </View>
        <View style={styles.actorBloc}>
          <Image
          source={require("./assets/jessica.jpg")}
          style={styles.actorPics}
          />
          <Text style={styles.actorName}>Jessica</Text>
          <Text style={styles.filmName}>Murph</Text>
        </View>
        <View style={styles.actorBloc}>
          <Image
          source={require("./assets/mackenzie.jpg")}
          style={styles.actorPics}
          />
          <Text style={styles.actorName}>Mackenzie</Text>
          <Text style={styles.filmName}>...</Text>
        </View>
      </ScrollView>

      <View style={styles.picsBottom}>
        <Text style={styles.stafTitle}>Director</Text>
        <Text style={styles.stafName}>Christopher Nolan</Text>
      </View>
      <View style={styles.picsBottom}>
        <Text style={styles.stafTitle}>Writers</Text>
        <Text style={styles.stafName}>Christopher Nolan & Jonathan Nolan</Text>
      </View>

      <StatusBar style="auto" />
    </View>
    {/* </SafeAreaView> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingStart:10,
    paddingEnd:10,
  },
  topArea:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
    height:"100%"
  },
  logoBloc:{
    backgroundColor:"grey",
    width:"100%",
    height:40,
    justifyContent:"center"
  },
  logo: {
    height: 30,
    width: 60,
    margin:10
  },
  title: {
  color:"white",
  fontSize:30,
  paddingTop:5,
  paddingBottom:5,
  },
  info:{
    color:"white",
    fontSize:12,
    paddingBottom:20,
  },
  affiche:{
    height:150,
    width:100,
  },
  rowDirection:{
    flexDirection:"row"
  },
  text:{
    width:250,
    alignItems:"center"
  },
  description:{
    color:"white",
    paddingBottom:20
  },
  btn:{
    backgroundColor:"#0177BD",
    width:"90%",
    height:30,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
  },
  btnText:{
    color:"white",
    fontSize:12,
    fontWeight:"bold"
  },
  note:{
    flexDirection:"row",
    width:"100%",
    height:100,
    justifyContent:"space-around",
    alignItems:"center"
  },
  num:{
    color:"white",
    backgroundColor:"#61C84F",
    fontSize:20,
    fontWeight:"bold"
  },
  noteText:{
    color:"white",
    fontWeight:"bold"
  },
  noteItem:{
    alignItems:"center"
  },
  rateNumber:{
    color:"grey",
    fontSize:12
  },
  picsTop:{
    alignItems:"center",
    flexDirection:"row",
    paddingBottom:15,
    justifyContent:"space-between"
  },
  picsTitle:{
    fontSize:20,
    fontWeight:"bold",
    color:"white",
  },
  seeAll:{
    color:"#07A9F5",
    fontSize:15,
    fontWeight:"bold"
  },
  actorBloc:{
    width:150,
    height:250,
    backgroundColor:"#2A2A2A",
    margin:10, 
 },
  actorPics:{
    width:150,
    height:200,
    resizeMode:"cover"
  },
  actorName:{
    fontWeight:"bold",
    color:"white",
    marginLeft:5
  },
  filmName:{
    color:"#8B8B8B",
    marginLeft:5
  },
  picsBottom:{
    padding:10,
    height:60
  },
  stafTitle:{
    color:"white",
    fontSize:18
  },
  stafName:{
    color:"#8B8B8B",
    fontSize:15
  },
});
