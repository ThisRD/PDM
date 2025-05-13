import { StyleSheet } from "react-native";

const getStyles = (theme) => StyleSheet.create({
    containerSettings: {
        flex: 1,
        padding: 20,
        backgroundColor: theme === 'dark' ? '#000' : '#fff',
    },
    titleSettings: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
        color: theme === 'dark' ? '#fff' : '#000'
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        color: theme === 'dark' ? '#fff' : '#000'
    },
    label: {
        fontSize: 18,
        color: theme === 'dark' ? '#fff' : '#000'

    },
    picker: {
        height: 50,
        width: 150,
        color: theme === 'dark' ? '#fff' : '#000',
        backgroundColor: theme === 'dark' ? '#000' : '#fff'


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
    
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    bubbleContainer: {
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        top: 30,
        left: 20,
        flexDirection: 'column',
        // alignItems: 'flex-start',
    },
    bubble: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#F8F4EC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        width: '90%',
        alignItems: 'center',
        elevation: 5,
        // shadowColor: '#000',
        // shadowOpacity: 0.1,
        // shadowRadius: 5,
        // shadowOffset: { width: 0, height: 4 },
    },
    bubbleText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    titleLogin: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: '#3C2415',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    loginButton: {
        backgroundColor: '#0092FF',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: '#3C2415',
        textAlign: 'center',
        marginTop: 10,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
    containerHome: {
        flex: 1,
        backgroundColor:theme === 'dark' ? '#000': '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40, //Espaço para o status bar
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    newsItem: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        color: '#555',
    },

});

export default getStyles;