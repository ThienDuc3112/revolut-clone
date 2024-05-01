import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ticker } from "@/interfaces/cryptoTickers";
import { Circle, useFont } from "@shopify/react-native-skia";
import { format } from "date-fns";
import { selectionAsync } from "expo-haptics";
import { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedProps,
} from "react-native-reanimated";
import { CartesianChart, Line, useChartPressState } from "victory-native";

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={6} color={Colors.primary} />;
}

const Chart = ({ tickers }: { tickers?: Ticker[] }) => {
  const { isActive, state } = useChartPressState({ x: 0, y: { price: 0 } });
  const font = useFont(require("@/assets/fonts/SpaceMono-Regular.ttf"), 12);

  useEffect(() => {
    console.log(isActive);
    if (isActive) selectionAsync();
  }, [isActive]);

  const animatedText = useAnimatedProps(() => ({
    text: `${state.y.price.value.value} $`,
    defaultValue: `${state.y.price.value.value} $`,
  }));

  const animatedDateText = useAnimatedProps(() => {
    const date = new Date(state.x.value.value);
    return {
      text: date.toLocaleString(),
      defaultValue: date.toLocaleString(),
    };
  });
  if (!tickers) return <View style={[defaultStyles.block, { height: 500 }]} />;

  return (
    <View style={[defaultStyles.block, { height: 500 }]}>
      <View>
        {isActive ? (
          <>
            <AnimatedTextInput
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: Colors.dark,
              }}
              editable={false}
              underlineColorAndroid={"transparent"}
              animatedProps={animatedText}
            />
            <AnimatedTextInput
              style={{ fontSize: 18, color: Colors.gray }}
              animatedProps={animatedDateText}
            >
              {animatedDateText.text}
            </AnimatedTextInput>
          </>
        ) : (
          <>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: Colors.dark,
              }}
            >
              {tickers[tickers.length - 1].price} $
            </Text>
            <Text style={{ fontSize: 18, color: Colors.gray }}>Today</Text>
          </>
        )}
      </View>
      <CartesianChart
        data={tickers as any[]}
        xKey="timestamp"
        yKeys={["price"]}
        chartPressState={state}
        axisOptions={{
          font,
          tickCount: 5,
          labelOffset: { x: -2, y: 0 },
          labelColor: Colors.gray,
          formatYLabel: (v) => `${v}$`,
          formatXLabel: (ms) => format(new Date(ms), "MM/yy"),
        }}
      >
        {({ points }) => (
          <>
            <Line
              points={points.price}
              color={isActive ? Colors.primaryMuted : Colors.primary}
              strokeWidth={3}
            />
            {isActive && (
              <ToolTip x={state.x.position} y={state.y.price.position} />
            )}
          </>
        )}
      </CartesianChart>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});
