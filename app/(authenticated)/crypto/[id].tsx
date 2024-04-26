import {
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useHeaderHeight } from "@react-navigation/elements";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const categories = ["Overview", "News", "Orders", "Transactions"];

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: coin } = useQuery<Record<string, CryptoInfo>>({
    queryKey: ["coin-info", id],
    queryFn: () => fetch(`/api/info?ids=${id}`).then((res) => res.json()),
    enabled: !!id,
  });
  const [activeIndex, setActiveIndex] = useState<number>();
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView style={{ marginBottom: 30 }}>
      {/* <Stack.Screen options={{ title: coin?.[id].name }} /> */}
      {/* <SectionList
        style={{ paddingTop: headerHeight }}
        stickyHeaderIndices={[0]}
        // scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
        sections={[{ data: [coin?.[id], coin?.[id], coin?.[id], coin?.[id]] }]}
        keyExtractor={(_, i) => i.toString()}
        ListHeaderComponent={() => (
          <View style={{ backgroundColor: "red" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 16,
              }}
            >
              <Text style={styles.subtitle}>{coin?.[id].symbol}</Text>
              <Image
                source={{ uri: coin?.[id].logo }}
                style={{ width: 60, height: 60 }}
              />
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
                <Text
                  style={[defaultStyles.buttonText, { color: Colors.primary }]}
                >
                  Receive
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        renderItem={({ item }) => (
          <>
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
            <View
              style={StyleSheet.compose(defaultStyles.block, { marginTop: 20 })}
            >
              <Text style={styles.subtitle}>Overview</Text>
              <Text style={{ color: Colors.gray }}>
                {item?.description}
              </Text>
            </View>
          </>
        )}
      /> */}
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

        {/** TODO: CHARTS HERE */}
        <View style={{ height: 500, backgroundColor: "green" }}></View>
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
