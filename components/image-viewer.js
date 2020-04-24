import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageView from "react-native-image-view";

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 80
  },
  footerText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18
  }
});

export default function ImageViewer(props) {
  return (
    <ImageView
      images={props.images}
      imageIndex={0}
      isVisible={props.isVisible}
      onClose={() => props.setVisibility()}
      renderFooter={currentImage => <Footer currentImage={currentImage} />}
    />
  );
}

function Footer(props) {
  const { currentImage } = props;
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>{currentImage.title.toUpperCase()}</Text>
    </View>
  );
}
