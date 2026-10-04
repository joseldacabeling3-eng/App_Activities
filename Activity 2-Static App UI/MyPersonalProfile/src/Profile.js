import React, { useState } from 'react';

import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';

import ProfileHeader from './components/ProfileHeader';
import ProfileStat from './components/ProfileStat';
import ProfileActivity from './components/ProfileActivity';

import styles from './styles/profileStyles';

export default function Profile() {
  const [menuVisible, setMenuVisible] = useState(false);

  const showEditProfile = () => {
    setMenuVisible(false);

    Alert.alert(
      'Edit Profile',
      'This is a static profile UI. Edit Profile is included as part of the design.'
    );
  };

  const showSettings = () => {
    setMenuVisible(false);

    Alert.alert(
      'Settings',
      'Settings is included as part of the Profile UI design.'
    );
  };

  const showLogout = () => {
    setMenuVisible(false);

    Alert.alert(
      'Log Out',
      'Log Out is included as part of the Profile UI design.'
    );
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* PAGE HEADER */}
        <View style={styles.header}>
          <Text style={styles.pageTitle}>
            Profile
          </Text>

          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => setMenuVisible(true)}
            activeOpacity={0.7}
          >
            <Text style={styles.settingsText}>
              •••
            </Text>
          </TouchableOpacity>
        </View>

        {/* PROFILE HEADER */}
        <ProfileHeader />

        {/* PROFILE STATS */}
        <View style={styles.statsContainer}>
          <ProfileStat
            number="24"
            label="Posts"
          />

          <ProfileStat
            number="1.2k"
            label="Followers"
          />

          <ProfileStat
            number="286"
            label="Following"
          />
        </View>

        {/* ABOUT ME */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            About me
          </Text>

          <Text style={styles.description}>
            I'm a third-year Computer Science student
            at Northwest Samar State University. I also
            like coffee, music, traveling and acting.
          </Text>
        </View>

        {/* CONTACT INFORMATION */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Contact information
          </Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Email
            </Text>

            <Text style={styles.infoValue}>
              joselda_cabeling@example.com
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Location
            </Text>

            <Text style={styles.infoValue}>
              Calbayog City, Philippines
            </Text>
          </View>
        </View>

        {/* MY INTERESTS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            My interests
          </Text>

          <View style={styles.interestsContainer}>
            <Text style={styles.interest}>
              Design
            </Text>

            <Text style={styles.interest}>
              Travel
            </Text>

            <Text style={styles.interest}>
              Music
            </Text>

            <Text style={styles.interest}>
              Acting
            </Text>
          </View>
        </View>

        {/* RECENT ACTIVITY */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Recent activity
          </Text>

          <ProfileActivity
            icon="✎"
            title="Updated profile information"
            date="Today"
          />

          <ProfileActivity
            icon="♡"
            title="Liked a new post"
            date="Yesterday"
          />

          <ProfileActivity
            icon="＋"
            title="Created a new post"
            date="3 days ago"
          />
        </View>

        {/* EDIT PROFILE BUTTON */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={showEditProfile}
          activeOpacity={0.8}
        >
          <Text style={styles.editButtonText}>
            Edit Profile
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* THREE-DOT MENU */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalOverlay}>

          {/* OUTSIDE AREA */}
          <TouchableOpacity
            style={styles.modalBackground}
            activeOpacity={1}
            onPress={() => setMenuVisible(false)}
          />

          {/* MENU */}
          <View style={styles.menu}>

            <Text style={styles.menuTitle}>
              Profile Menu
            </Text>

            {/* EDIT PROFILE */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={showEditProfile}
              activeOpacity={0.7}
            >
              <Text style={styles.menuIcon}>
                ✎
              </Text>

              <Text style={styles.menuText}>
                Edit Profile
              </Text>
            </TouchableOpacity>

            {/* SETTINGS */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={showSettings}
              activeOpacity={0.7}
            >
              <Text style={styles.menuIcon}>
                ⚙
              </Text>

              <Text style={styles.menuText}>
                Settings
              </Text>
            </TouchableOpacity>

            {/* LOG OUT */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={showLogout}
              activeOpacity={0.7}
            >
              <Text style={styles.logoutIcon}>
                ⇥
              </Text>

              <Text style={styles.logoutText}>
                Log Out
              </Text>
            </TouchableOpacity>

            {/* CANCEL */}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setMenuVisible(false)}
              activeOpacity={0.7}
            >
              <Text style={styles.cancelText}>
                Cancel
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </>
  );
}