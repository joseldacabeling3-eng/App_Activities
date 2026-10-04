import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/profileStyles';

export default function ProfileActivity({
  icon,
  title,
  date,
}) {
  return (
    <View style={styles.activity}>
      <View style={styles.activityIcon}>
        <Text style={styles.activityIconText}>
          {icon}
        </Text>
      </View>

      <View style={styles.activityDetails}>
        <Text style={styles.activityTitle}>
          {title}
        </Text>

        <Text style={styles.activityDate}>
          {date}
        </Text>
      </View>
    </View>
  );
}