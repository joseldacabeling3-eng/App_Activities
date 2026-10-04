import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/profileStyles';

export default function ProfileStat({
  number,
  label,
}) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statNumber}>
        {number}
      </Text>

      <Text style={styles.statLabel}>
        {label}
      </Text>
    </View>
  );
}