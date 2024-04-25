import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CryptoListingsItem } from "@/interfaces/crytoListings";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const c = useQuery<CryptoListingsItem[]>({
    queryKey: ["currencies"],
    queryFn: () => fetch(`/api/listings?limit=${20}`).then((res) => res.json()),
  });

  const ids = c.data?.map((cur) => cur.id).join(",");

  const { data } = useQuery<Record<string, CryptoInfo>>({
    queryKey: ["info", ids],
    queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}
    >
      <Text style={defaultStyles.sectionHeader}>Latest Crypto</Text>
      <View style={defaultStyles.block}>
        {c.data?.map((currency) => {
          const up = currency.quote.SGD.percent_change_24h >= 0;
          return (
            <Link href={`/crypto/${currency.id}`} asChild key={currency.id}>
              <TouchableOpacity
                style={{ flexDirection: "row", gap: 14, alignItems: "center" }}
              >
                {data && (
                  <Image
                    source={{ uri: data?.[currency.id].logo }}
                    style={{ width: 40, height: 40 }}
                  />
                )}

                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "600", color: Colors.dark }}>
                    {currency.name}
                  </Text>
                  <Text style={{ color: Colors.gray }}>{currency.symbol}</Text>
                </View>

                <View>
                  <Text>{currency.quote.SGD.price.toFixed(2)} $</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Ionicons
                      name={up ? "caret-up" : "caret-down"}
                      color={up ? "green" : "red"}
                    />
                    <Text style={{ color: up ? "green" : "red" }}>
                      {currency.quote.SGD.percent_change_24h.toFixed(2)} %
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({});
