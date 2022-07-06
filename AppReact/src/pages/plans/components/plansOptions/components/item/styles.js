import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  useAngle: true,
  angle: 120,
  locations: [0, 0.8],
})`
  flex-direction: column;
  display: flex;
  flex: 1;
  border-radius: 10px;
  margin-top: 40px;
  padding: 40px 20px;
`;
