import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import styles from './style';

const box = ({
  icon,
  title,
  texts,
  boxStyles,
  anchorText,
  url,
  beforeAnchor,
  afterAnchor,
  anchorStyles,
  restAnchorStyles,
}) => {
  const renderText =
    texts && texts.length
      ? texts.map((item, idx) => (
          <Text key={idx} style={styles.boxTextDefaultStyles}>
            {item}
          </Text>
        ))
      : null;
  const linkingText = anchorText ? (
    <View style={styles.anchorContainer}>
      <Text style={[styles.boxTitleDefaultStyles, { ...restAnchorStyles }]}>
        {beforeAnchor}
      </Text>
      <Text
        style={[styles.boxTitleDefaultStyles, { ...anchorStyles }]}
        onPress={() => Linking.openURL(url)}>
        {anchorText}
      </Text>
      <Text style={[styles.boxTitleDefaultStyles, { ...restAnchorStyles }]}>
        {afterAnchor}
      </Text>
    </View>
  ) : null;
  return (
    <View style={[styles.boxDefaultStyles, { ...boxStyles }]}>
      <Image source={icon} style={styles.loaderIcon} />
      <Text style={styles.boxTitleDefaultStyles}>{title}</Text>
      {linkingText}
      {renderText}
    </View>
  );
};

export default box;
