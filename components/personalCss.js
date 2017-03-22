import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    _navigator: { // 导航
        width: 368,
        height: 50,
        backgroundColor: '#1f1d1d',
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        textAlignVertical: 'center'
    },

    container: {
        backgroundColor: '#eee',
        height:667,

    },

    listItem: {
        width: 368,
        height: 44,
        backgroundColor: '#fff',
        paddingLeft:10,
        marginTop: 10,
        flex:1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center'
    },

    listItemText: {
        marginLeft: 10
    },

    listItemRightImgView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-end',
        marginRight: 20
    }


})

export default styles;
