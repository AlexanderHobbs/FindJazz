import { StyleSheet } from 'react-native';

const globalStyle = StyleSheet.create({
container: {
    flex: 1,
},
header: {
    marginBottom: 24
},
subtitle: {
    color: 'white',
    opacity: .7,
    alignSelf: 'center'
},
title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#E5E7EB',
    paddingVertical: 10,
    alignSelf: 'center',
},
toggle: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
    alignSelf: 'center',

},
active:{
    color: 'white',
    fontSize: 18,
},
inactive: {
    color: '#6B7280',
    fontSize: 17,
},
card: {
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
  shadowColor: 'gray',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.5,
  shadowRadius: 10,
},
venueName: {
    color: '#black',
    fontSize: 18,
},
meta: {
    color: '#9CA3AF',
    marginTop: 4,
},
map: {
    flex: 1,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    margin: 5
}
});

export default globalStyle;