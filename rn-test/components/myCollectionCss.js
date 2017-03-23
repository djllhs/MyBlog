/**
 * Created by admin on 2017/3/18.
 */

import {StyleSheet} from 'react-native';

const myCollectionStyle = StyleSheet.create({

    main: {
        flex: 0,
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    show: {
        opacity: 1
    },
    mainItemWrap: {
        flex: 0,
        flexDirection: 'row',
    },

    mainItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    mainItemText: {
        marginRight: 15,
        fontSize: 13,
        color: '#222'
    },
    mainItemInfoWrap: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    mainItemInfo: {
        flex: 0,
        flexDirection: 'row',
        marginTop: 15,
    },
    mainItemInfoImg: {
        width: 18,
        height: 18,
        marginRight: 6
    },
    mainItemInfoText: {
        marginRight: 15,
        fontSize: 13,
        color: '#999'
    },

    /*--------------video---------------*/


    mainVideoItem: {
        height: 100
    },

    mainVideoItemImg: {
        width: 105,
        height: 70,
        flexDirection: 'column',
        marginHorizontal: 12,
    },

    mainVideoItemInfoWrap: {
        width: 240,
        height: 100,
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },

/*----------audio----------*/
    mainAudio: {
        flex: 0,
        flexWrap: 'wrap',
        flexDirection: 'column',
    },

    mainAudioItemWrap: {
        flex: 0,
        flexDirection: 'row',

    },

    mainAudioItemImg: {
        width: 50,
        height: 50,
        marginHorizontal: 12
    },

    mainAudioItemInfoWrap: {
        width: 290,
        height: 71,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,

    },

});

export default myCollectionStyle;