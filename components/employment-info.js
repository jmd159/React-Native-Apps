import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const currentRoles = [
  {
    role:
      "Build and maintain two mobile applications, one is an app used by parents and the other is used by admins." +
      "I work in a 2 person team to develop and maintain a highly-responsive and user friendly application to satisfy the client's needs." +
      "Both applications are in production available on both Android and iOS platforms.",
    key: 0
  },
  {
    role:
      "Report daily tasks, as well as those completed or if there are any blockers or concerns that could delay a project from" +
      "being completed this sprint during the daily Stand Up.",
    key: 1
  },
  {
    key: 2,
    role:
      "Code Review - Peer Reviews, not always a daily taks but is a big part of how we maintain organization and prevent any bugs from making it to staging, which in turn prevents bugs from occuring in production."
  },
  {
    role:
      "Create QA plans for testers, we currently have no dedicated testers, so tests are spread among Bunk1 employees.",
    key: 3
  },
  { role: "Update API to satisfy the front end, mvc....", key: 4 }
];

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 20
  },
  text: { fontSize: 24, fontWeight: "400" },
  flexContainer: { flexDirection: "row" },
  titleContainer: { marginRight: 20, marginTop: 20 },
  rollTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  bulletsContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  rollBody: {
    flexShrink: 1,
    marginLeft: 5,
    marginTop: 1,
    color: "#ffffff"
  }
});

export default function EmploymentInfo({
  currentStatus,
  currentJobTitle,
  currentCompanyName
}) {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text style={styles.text}>{"Current Employer: "}</Text>
        <Text style={[styles.text, { color: "#ffffff" }]}>
          {currentCompanyName}
        </Text>
      </View>
      <View style={styles.flexContainer}>
        <Text style={styles.text}>{"Current Title: "}</Text>
        <Text style={[styles.text, { color: "#ffffff" }]}>{currentJobTitle}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.rollTitle}>CURRENT ROLES</Text>
        <View style={{ flexDirection: "column" }}>
          {currentRoles.map(item => {
            return (
              <View style={styles.bulletsContainer} key={item.key}>
                <Ionicons
                  name={"ios-radio-button-on"}
                  size={20}
                  color={"#ffffff"}
                />
                <Text style={styles.rollBody}>
                  {item.role}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
