import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    paddingHorizontal: 20,
  },

  /* PAGE HEADER */
  header: {
    paddingTop: 18,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  pageTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#202735',
  },

  settingsButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  settingsText: {
    color: '#6d7685',
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: 2,
  },

  /* PROFILE HEADER */
  profileHeader: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#dbeafe',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#2563eb',
    fontSize: 26,
    fontWeight: '700',
  },

  profileDetails: {
    marginLeft: 14,
    flex: 1,
  },

  name: {
    fontSize: 19,
    fontWeight: '700',
    color: '#202735',
  },

  username: {
    marginTop: 3,
    fontSize: 13,
    color: '#7c8797',
  },

  location: {
    marginTop: 7,
    fontSize: 12,
    color: '#9aa3af',
  },

  /* STATS */
  statsContainer: {
    marginTop: 14,
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  stat: {
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#202735',
  },

  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#8b95a3',
  },

  /* CARDS */
  card: {
    marginTop: 14,
    padding: 17,
    borderRadius: 14,
    backgroundColor: '#ffffff',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#202735',
    marginBottom: 10,
  },

  description: {
    color: '#6f7988',
    fontSize: 13,
    lineHeight: 20,
  },

  /* CONTACT */
  infoRow: {
    paddingVertical: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f1f3',
  },

  infoLabel: {
    color: '#969eaa',
    fontSize: 13,
  },

  infoValue: {
    color: '#343c49',
    fontSize: 13,
    flex: 1,
    textAlign: 'right',
    marginLeft: 10,
  },

  /* INTERESTS */
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  interest: {
    marginRight: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 16,
    backgroundColor: '#eff6ff',
    overflow: 'hidden',
    color: '#2563eb',
    fontSize: 12,
    fontWeight: '600',
  },

  /* RECENT ACTIVITY */
  activity: {
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f1f3',
  },

  activityIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activityIconText: {
    fontSize: 18,
    color: '#64748b',
  },

  activityDetails: {
    marginLeft: 12,
  },

  activityTitle: {
    fontSize: 13,
    color: '#343c49',
    fontWeight: '600',
  },

  activityDate: {
    marginTop: 4,
    fontSize: 12,
    color: '#9aa3af',
  },

  /* EDIT PROFILE */
  editButton: {
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#2563eb',
    alignItems: 'center',
  },

  editButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },

  bottomSpace: {
    height: 30,
  },

  /* THREE-DOT MENU */
  modalOverlay: {
    flex: 1,
  },

  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
  },

  menu: {
    position: 'absolute',
    top: 70,
    right: 18,
    width: 220,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    paddingTop: 8,
    paddingBottom: 8,
    elevation: 10,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.20,
    shadowRadius: 8,
  },

  menuTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#202735',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  menuItem: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f1f3',
  },

  menuIcon: {
    width: 30,
    fontSize: 18,
    color: '#64748b',
  },

  menuText: {
    fontSize: 15,
    color: '#343c49',
    fontWeight: '600',
  },

  logoutIcon: {
    width: 30,
    fontSize: 18,
    color: '#dc2626',
  },

  logoutText: {
    fontSize: 15,
    color: '#dc2626',
    fontWeight: '600',
  },

  cancelButton: {
    height: 45,
    marginHorizontal: 10,
    marginTop: 6,
    borderRadius: 9,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '600',
  },
});