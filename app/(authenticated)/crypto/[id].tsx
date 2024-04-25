import { Image, SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useHeaderHeight } from "@react-navigation/elements";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: coin } = useQuery<Record<string, CryptoInfo>>({
    queryKey: ["coin-info", id],
    queryFn: () => fetch(`/api/info?ids=${id}`).then((res) => res.json()),
    enabled: !!id,
  });
  const headerHeight = useHeaderHeight();
  if (!coin) return <></>;
  return (
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
      <View style={StyleSheet.compose(defaultStyles.block, { marginTop: 20 })}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={{ color: Colors.gray }}>{coin?.[id].description}</Text>
      </View>
    </View>
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
});
