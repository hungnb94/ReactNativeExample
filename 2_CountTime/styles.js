import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red',
    },
    header: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    textHeader: {
        paddingTop: 20,
        color: 'white',
        fontSize: 40,
    },
    content: {
        flex: 4,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center',
    },
    wrapperButtons: {
        flex: 2,
        backgroundColor: 'gray',
        flexDirection: 'row',
    },
    viewButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: 'white',
        justifyContent: 'center',
        fontSize: 50,
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'purple',
        justifyContent: 'center',
    },
});

export default styles;