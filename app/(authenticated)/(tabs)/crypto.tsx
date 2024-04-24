import { Image, StyleSheet, Text, View } from "react-native";
import { CryptoListingsItem } from "@/interfaces/crytoListings";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
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
    <View>
      {c.data?.map((currency) => {
        // console.log(data?.[currency.id].logo);
        return (
          <View style={{ flexDirection: "row" }} key={currency.id}>
            <Image
              source={{ uri: data?.[currency.id].logo }}
              style={{ width: 32, height: 32 }}
            />
            <Text>{currency.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
