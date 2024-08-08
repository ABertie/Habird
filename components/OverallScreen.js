import TackerNavigation from './TackerNavgation';
import Wrapper from './ScreenStyle';

export default function OverallScreen({ navigation, route }) {
  return (
    <Wrapper>
      <TackerNavigation
        navigation={navigation}
        route={route}
      />
    </Wrapper>
  )
}
