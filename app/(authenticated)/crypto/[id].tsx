import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { Ticker } from "@/interfaces/cryptoTickers";
import { Circle, useFont } from "@shopify/react-native-skia";
import { format } from "date-fns";
import * as Haptics from "expo-haptics";
import Animated, {
  SharedValue,
  useAnimatedProps,
} from "react-native-reanimated";

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const categories = ["Overview", "News", "Orders", "Transactions"];

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={6} color={Colors.primary} />;
}

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: coin } = useQuery<Record<string, CryptoInfo>>({
    queryKey: ["coin-info", id],
    queryFn: () => fetch(`/api/info?ids=${id}`).then((res) => res.json()),
    enabled: !!id,
  });
  const [activeIndex, setActiveIndex] = useState<number>();

  const font = useFont(require("@/assets/fonts/SpaceMono-Regular.ttf"), 12);

  const { data: tickers } = useQuery<Ticker[]>({
    queryKey: ["tickers", id],
    queryFn: () => fetch(`/api/tickers?id=${id}`).then((res) => res.json()),
    enabled: !!id,
  });

  const { isActive, state } = useChartPressState({ x: 0, y: { price: 0 } });

  useEffect(() => {
    console.log(isActive);
    if (isActive) Haptics.selectionAsync();
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

  return (
    <ScrollView style={{ marginBottom: 30 }}>
      <View>
        <View style={{ marginHorizontal: 16 }}>
          <Text style={defaultStyles.header}>{coin?.[id].name}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.subtitle}>{coin?.[id].symbol}</Text>
            <Image
              source={{ uri: coin?.[id].logo }}
              style={{ width: 60, height: 60 }}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 10, margin: 12 }}>
          <TouchableOpacity
            style={[
              defaultStyles.pillButtonSmall,
              {
                backgroundColor: Colors.primary,
                flexDirection: "row",
                gap: 16,
              },
            ]}
          >
            <Ionicons name="add" size={24} color={"#fff"} />
            <Text style={[defaultStyles.buttonText, { color: "#fff" }]}>
              Buy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              defaultStyles.pillButtonSmall,
              {
                backgroundColor: Colors.primaryMuted,
                flexDirection: "row",
                gap: 16,
              },
            ]}
          >
            <Ionicons name="arrow-back" size={24} color={Colors.primary} />
            <Text style={[defaultStyles.buttonText, { color: Colors.primary }]}>
              Receive
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingBottom: 8,
            backgroundColor: Colors.background,
            borderBottomColor: Colors.lightGray,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        >
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveIndex(index)}
              style={
                activeIndex === index
                  ? styles.categoriesBtnActive
                  : styles.categoriesBtn
              }
            >
              <Text
                style={
                  activeIndex === index
                    ? styles.categoryTextActive
                    : styles.categoryText
                }
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={[defaultStyles.block, { height: 500 }]}>
          {tickers && (
            <>
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
                    <Text style={{ fontSize: 18, color: Colors.gray }}>
                      Today
                    </Text>
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
                      color={Colors.primary}
                      strokeWidth={3}
                    />
                    {isActive && (
                      <ToolTip
                        x={state.x.position}
                        y={state.y.price.position}
                      />
                    )}
                  </>
                )}
              </CartesianChart>
            </>
          )}
        </View>

        <View
          style={StyleSheet.compose(defaultStyles.block, { marginTop: 20 })}
        >
          <Text style={styles.subtitle}>Overview</Text>
          <Text style={{ color: Colors.gray }}>{coin?.[id].description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.gray,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.gray,
  },
  categoryTextActive: {
    fontSize: 14,
    color: "#000",
  },
  categoriesBtn: {
    padding: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  categoriesBtnActive: {
    padding: 10,
    paddingHorizontal: 14,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
});
