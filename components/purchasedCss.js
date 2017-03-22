/**
 * Created by admin on 2017/3/18.
 */

import {StyleSheet} from 'react-native';

const purchasedStyle = StyleSheet.create({
    main: {
        flex: 0,
        flexDirection: 'row',
        // alignSelf: 'flex-start',
        flexWrap: 'wrap',
        // marginLeft: 12,
        width: 368,
        paddingHorizontal: 25
        // position: 'absolute',
        // top: 53,
        // zIndex: 0,
        // opacity:0,
        // backfaceVisibility : 'hidden'

    },
    show: {
        // opacity: 1,
        // zIndex: 10
    },
    mainItemWrap: {
        width: 84,
        height: 161,
        marginHorizontal: 10,
        // marginRight: 20,
        marginBottom: 14
    },

    mainItem: {
        width: 84,
        height: 120,
        backgroundColor: 'yellow',
    },

    mainItemText: {
        marginTop: 6
    }
});

export default purchasedStyle;