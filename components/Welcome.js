import { Text, View } from 'react-native';

const Welcome = ({ name }) => {
  return (
     <View>
      <Text>Hello {name}</Text>
    </View>
  )
};

export default Welcome;