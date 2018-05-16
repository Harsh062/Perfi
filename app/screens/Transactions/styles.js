import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes, scalingUtils, fontWeights } from '../../styles';

const { indent } = dimensions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subtitle: {
    marginHorizontal: dimensions.indent,
    paddingTop: dimensions.indent,
    paddingBottom: 0,
  },
  separator: {
    opacity: 0.2,
  },
});

export default styles;