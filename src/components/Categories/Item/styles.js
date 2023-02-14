import { COLOURS } from "../../../assets/COLOURS"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listCategoryContainer:{
        backgroundColor: COLOURS.light.violet,
        borderRadius: 50,
        width: '95%',
        padding: 20,
        margin: 10,
        alignSelf: 'center',
    },
    categoryItem:{
        alignSelf:'center',
        color: COLOURS.light.grey,
    },
});