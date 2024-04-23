import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as DM from "zeego/dropdown-menu"; // DM stand for DropdownMenu
import RoundBtn from "./roundBtn";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Dropdown = () => {
  return (
    <DM.Root>
      <DM.Trigger>
        <RoundBtn title="More" icon="ellipsis-horizontal" />
      </DM.Trigger>

      <DM.Content>
        <DM.Item key="statment">
          <DM.ItemTitle>Statement</DM.ItemTitle>
          <DM.ItemIcon
            ios={{ name: "list.bullet.rectangle.fill", pointSize: 24 }}
          />
        </DM.Item>

        <DM.Item key="converter">
          <DM.ItemTitle>Converter</DM.ItemTitle>
          <DM.ItemIcon
            ios={{ name: "coloncurrencysign.arrow.circlepath", pointSize: 24 }}
          />
        </DM.Item>

        <DM.Item key="background">
          <DM.ItemTitle>Background</DM.ItemTitle>
          <DM.ItemIcon ios={{ name: "photo.fill", pointSize: 24 }} />
        </DM.Item>

        <DM.Item key="account">
          <DM.ItemTitle>Add new account</DM.ItemTitle>
          <DM.ItemIcon
            ios={{ name: "plus.rectangle.on.folder.fill", pointSize: 24 }}
          />
        </DM.Item>
      </DM.Content>
    </DM.Root>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
