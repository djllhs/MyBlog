/**
 * Created by admin on 2017/3/17.
 */
import {StyleSheet} from 'react-native';

const bookshelfStyle = StyleSheet.create({
    body: {
      // flex: 1
    },
    _navigator: { // 导航器
        width: 368,
        height: 50,
        backgroundColor: '#1f1d1d',
        flex:0,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'center'
    },

    back: {
        color: '#fff',
        fontSize: 18,
    },
    titleContent: {
        color: '#fff',
        fontSize: 18,
        flex: 0.8,
        textAlign: 'center',
    },
    right: {
        flex: 0.1
    },

    container: {
        paddingTop: 12,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    itemWrap: {
        width: 85,
        height: 155,
        borderColor: 'red',
        marginLeft: 22,
        marginRight: 11,
        marginBottom: 22,
    },

    itemImg: {
        width: 85,
        height: 120,
        backgroundColor: 'red',
    }
});

export default bookshelfStyle;
