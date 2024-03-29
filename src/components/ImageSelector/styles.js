import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalBack:{
        alignSelf:'center',
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#0002'
    },
    modalContainer:{
        borderRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        aspectRatio: 0.7,
        elevation: 24,
        width: "95%",
        display: "flex",
        backgroundColor: "white",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        bottom: Dimensions.get('window').height * 0.2,
    },
    previewBox: {
        flex: 6,
        width: "100%",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    },
    noImage:{
        flex: 6,
        aspectRatio: 1.5,
        justifyContent: "center",
        alignItems: "center",
    },
    previewText:{
        fontFamily: 'Regular'
    },
    previewImage:{
        width: '100%',
        height: '100%'
    },
    buttonsContainer:{
        flex: 1,
        width: "100%",
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cancelIcon:{
        position:"absolute",
        top: 10,
        right: 10
    },
    textInput:{
      paddingBottom: -5,
      width: '100%',
      height: 40,
      opacity: 0.7,
      borderBottomWidth:2,
      fontFamily: "Italic",
    }
})