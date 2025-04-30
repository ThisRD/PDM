import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    label: {
        fontSize: 18,
    },
    picker: {
        height: 50,
        width: 150,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    logoutButton: {
        marginTop: 30,
        alignSelf: 'center',
        width: '50%',
    },
    aboutContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    aboutText: {
        color: '#777',
        fontSize: 14,
    },
});

export default styles;