import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import AnimatedCircularProgress from 'react-native-animated-circular-progress';

interface ScoreCardProps {
  refreshing: boolean;
}

export const ScoreCard: FunctionComponent<ScoreCardProps> = props => {
  const { refreshing } = props;
  return (
    <View style={styles.main}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
        <Text style={{ fontSize: 16, color: 'black' }}>Weekly score</Text>
        <Text style={{ color: 'orange', marginLeft: 10, fontSize: 12 }}>LIVE</Text>
      </View>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 10 }}>
        <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'space-around', marginLeft: 0 }}>
          {renderDay('We', 64, 7, refreshing)}
          {renderDay('Th', 45, 6, refreshing)}
          {renderDay('Fr', 55, 5, refreshing)}
          {renderDay('Sa', 70, 4, refreshing)}
          {renderDay('Su', 50, 3, refreshing)}
          {renderDay('Mo', 55, 2, refreshing)}
          {renderDay('Tu', 65, 1, refreshing, true)}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <AnimatedCircularProgress
            startDeg={45}
            endDeg={250}
            innerRadius={38}
            color={'orange'}
            radius={49}
            duration={1000}
            innerBackgroundColor={'white'}
            style={{ marginTop: 100, marginLeft: 60, justifyContent: 'center', alignItems: 'flex-end' }}
            children={
              <Text style={{ fontSize: 34, alignSelf: 'center', marginTop: 18, color: 'black' }}>89</Text>
            }
          />
        </View>
      </View>
    </View>
  );
};

const renderDay = (day, height, index, refreshing, currentDay = false) => {
  const heightAnim = new Animated.Value(0);

  if (!refreshing) {
    Animated.timing(heightAnim, {
      toValue: height,
      duration: 200 * index,
      useNativeDriver: false
    }).start();
  }

  return (
    <View>
      <View style={{ height: 200, justifyContent: 'flex-end', alignItems: 'center' }}>
        <Animated.View style={[{ height: heightAnim }, { backgroundColor: currentDay ? 'orange' : 'black', width: 6, borderRadius: 3 }]} />
        <Text style={{ alignSelf: 'flex-end', marginTop: 5, fontSize: 12 }}>{day}</Text>
      </View>
      {currentDay && <View style={{ backgroundColor: 'orange', height: 4, width: 4, borderRadius: 2, alignSelf: 'center' }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12
  },
});
