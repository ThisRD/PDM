import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    
        // paddingHorizontal: 20,
    },

    aboutContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    aboutTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#3C2415',
    },
    aboutText: {
        // color: '#777',
        fontSize: 14,
    },
});

export default styles;