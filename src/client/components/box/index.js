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
  loader,
}) => {
  const renderText =
    texts && texts.length ? (
      <View style={styles.textContainer}>
        {texts.map((item, idx) => (
          <Text key={idx} style={styles.boxTextDefaultStyles}>
            {item}
          </Text>
        ))}
      </View>
    ) : null;
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
  const renderIcon = icon ? (
    <Image source={icon} style={styles.loaderIcon} />
  ) : (
    loader
  );

  return (
    <View style={[styles.boxDefaultStyles, { ...boxStyles }]}>
      {renderIcon}
      <Text style={styles.boxTitleDefaultStyles}>{title}</Text>
      {linkingText}
      {renderText}
    </View>
  );
};

export default box;
