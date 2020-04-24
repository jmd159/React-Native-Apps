import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

class ProfileImageContainer extends React.Component {
  //replace with hooks what was i thinking
  constructor(props) {
    super(props);
  }

  renderImage = () => {
    const { image, imageStyle } = this.props;
    return <Image source={this.props.image} style={this.props.imageStyle} />;
  };

  render() {
    return <View style={this.props.style}>{this.renderImage()}</View>;
  }
}

export default ProfileImageContainer;
