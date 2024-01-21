import { TouchableOpacity } from 'react-native';
import Text from '@kaloraat/react-native-text';

const SubmitButton = ({ title, handleSubmit, loading }) => {
  return (
    <TouchableOpacity
      onPress={handleSubmit}
      style={{
        backgroundColor: "#ff9900",
        height: 50,
        justifyContent: "center",
        marginHorizontal: 10,
        borderRadius: 24,
      }}
    >
      <Text bold medium center>
        {loading ? "Please wait..." : title }
      </Text>
    </TouchableOpacity>
  )
};

export default SubmitButton;