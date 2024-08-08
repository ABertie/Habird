import TackerNavigation from './TackerNavgation';
import Wrapper from './ScreenStyle';

export default function WeeklyScreen({ navigation, route }) {
  return (
    <Wrapper>
      <TackerNavigation
        navigation={navigation}
        route={route}
      />
    </Wrapper>
  )
}
