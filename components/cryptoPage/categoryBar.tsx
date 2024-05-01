import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
const categories = ["Overview", "News", "Orders", "Transactions"];

const CategoryBar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
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
  );
};

export default CategoryBar;

const styles = StyleSheet.create({
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
