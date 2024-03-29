import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalBack:{
    alignSelf:'center',
    alignItems: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#0005'
  },
  modalContainer:{
    borderRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    aspectRatio: 1,
    elevation: 24,
    width: "95%",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: Dimensions.get('window').height * 0.25,
  },
  modalTitle:{
    textAlign:'center',
    fontSize: 19,
    fontFamily: 'Medium'
  },
  modalSelectedItem:{
    textAlign:'center',
    fontFamily: 'Italic'
  },  
  modalButtonsContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  previewBox: {
    width: "90%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  previewImage:{
      width: "100%",
      height: "100%"
  },
});