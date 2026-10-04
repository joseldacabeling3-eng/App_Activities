import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/profileStyles';

export default function ProfileHeader() {
  return (
    <View style={styles.profileHeader}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          J
        </Text>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.name}>
          Joselda Cabeling
        </Text>

        <Text style={styles.username}>
          @joselda_cabeling
        </Text>

        <Text style={styles.location}>
          Calbayog City, Philippines
        </Text>
      </View>
    </View>
  );
}