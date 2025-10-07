import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButtonContainer: {
        padding: 5,
    },
    bottomButton: {
        backgroundColor: '#174038',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },

    myProfileButton: {
        backgroundColor: '#174038',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    logoutButton: {
        backgroundColor: '#adadadff',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    viewButton: {
        backgroundColor: '#174038',
        borderRadius: 8,
        alignItems: 'center',
        width: 55,
    },

    myProfileButtonTop: {
        backgroundColor: '#174038',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 40,
    },
    logoutButtonTop: {
        backgroundColor: '#adadadff',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 40,
    },

    bottomButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },

    tabBarContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
    },

    tabBarButton: {
        justifyContent: 'center',
        paddingTop: 4,
        paddingRight: 12,
        paddingBottom: 4,
        paddingLeft: 12,
        display: 'flex',
        minHeight: 36,
        backgroundColor: '#adadadff',
        borderRadius: 8,
        cursor: 'pointer',
    },
    
    tabBarButtonText: {
        fontWeight: '600',
    },
});