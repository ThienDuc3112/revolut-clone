import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Ticker } from "@/interfaces/cryptoTickers";
import Chart from "@/components/cryptoPage/chart";
import CategoryBar from "@/components/cryptoPage/categoryBar";
import ActionButtons from "@/components/cryptoPage/actionButtons";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: coin } = useQuery<Record<string, CryptoInfo>>({
    queryKey: ["coin-info", id],
    queryFn: () => fetch(`/api/info?ids=${id}`).then((res) => res.json()),
    enabled: !!id,
  });

  const { data: tickers } = useQuery<Ticker[]>({
    queryKey: ["tickers", id],
    queryFn: () => fetch(`/api/tickers?id=${id}`).then((res) => res.json()),
    enabled: !!id,
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

        <ActionButtons />
        <CategoryBar />
        <Chart tickers={tickers} />

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
});
