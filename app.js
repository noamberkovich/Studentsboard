const PREVIEW_USER_ID = 'preview-user';

const STORAGE_KEY = 'student-dashboard-data';
const LANG_KEY = 'student-dashboard-lang';
const THEME_KEY = 'student-dashboard-theme';
const ACCENT_KEY = 'student-dashboard-accent';
const WIDGET_KEY = 'student-dashboard-widget';
const USERS_KEY = 'student-dashboard-users';
const CURRENT_USER_KEY = 'student-dashboard-current-user-id';
const LEGACY_KEY = 'student-notebook-tasks';
const MAX_FILE_BYTES = 3 * 1024 * 1024;
const MAX_FRIEND_IMAGE_BYTES = 800 * 1024;
const STATS_ANIM_DURATION = 900;

const ALLOWED_TASK_MIMES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
]);

const ALLOWED_TASK_EXTENSIONS = ['.pdf', '.doc', '.docx', '.ppt', '.pptx'];
const EXAM_TYPES = ['a', 'b', 'special'];
const REMINDER_HOUR_OPTIONS = [1, 2, 3, 6, 12];
const SCHEDULE_DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];
const SCHEDULE_COLORS = [
  'blue',
  'indigo',
  'purple',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'cyan',
  'gray',
  'slate',
];
const SCHEDULE_COLOR_VALUES = {
  blue: '#7cb8f7',
  indigo: '#9aa7f5',
  purple: '#b794f6',
  pink: '#f0a8d0',
  red: '#f5a5a5',
  orange: '#f5b07a',
  yellow: '#f0d078',
  green: '#86d9a8',
  teal: '#7ee0d0',
  cyan: '#7dd9ef',
  gray: '#b0bec9',
  slate: '#94a3b8',
};
const SCHEDULE_DAY_START_MIN = 8 * 60;
const SCHEDULE_DAY_END_MIN = 20 * 60;
const SCHEDULE_DRAG_SNAP_MIN = 1;
const SCHEDULE_ROW_HEIGHT = 56;
const SCHEDULE_MIN_BLOCK_HEIGHT = 22;
const SCHEDULE_HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const FRIEND_ACTIVITY_DAYS = 21;
const FRIEND_STATUSES = ['studying', 'offline', 'completed'];

const DEFAULT_CATEGORIES = ['אלגוריתמים', 'פייתון', 'מתמטיקה', 'כללי'];
const DEFAULT_GENERAL_HE = 'כללי';
const DEFAULT_GENERAL_EN = 'General';
const CATEGORY_ALL_ID = 'all';

const i18n = {
  he: {
    pageTitle: 'לוח משימות',
    dateLabel: 'תאריך',
    timeLabel: 'שעה',
    navTasks: 'משימות',
    navExams: 'מבחנים',
    navSchedule: 'מערכת שעות',
    navFriends: 'חברים',
    coursesTitle: 'קורסים',
    tasksTitle: 'משימות',
    examsTitle: 'מבחנים',
    scheduleTitle: 'מערכת שעות',
    scheduleAddCourse: 'הוספת קורס',
    scheduleEditCourse: 'עריכת קורס',
    scheduleCourseName: 'שם קורס',
    scheduleDay: 'יום',
    scheduleStartTime: 'שעת התחלה',
    scheduleEndTime: 'שעת סיום',
    scheduleColor: 'צבע',
    scheduleDeleteCourse: 'מחיקת קורס',
    confirmDeleteScheduleCourse: (name) => `למחוק את "${name}" מהמערכת?`,
    scheduleTimeInvalid: 'שעת הסיום חייבת להיות אחרי שעת ההתחלה',
    scheduleDays: {
      sunday: 'ראשון',
      monday: 'שני',
      tuesday: 'שלישי',
      wednesday: 'רביעי',
      thursday: 'חמישי',
    },
    friendsTitle: 'חברים',
    filterAll: 'הכל',
    filterUrgent: 'דחוף',
    filterToday: 'היום',
    filterWeek: 'השבוע',
    filterDone: 'בוצע',
    categoryAll: 'הכל',
    emptyState: 'אין משימות להצגה',
    emptyAddTask: 'הוספת משימה ראשונה',
    emptyAddExam: 'הוספת מבחן ראשון',
    emptyAddFriend: 'הוספת חבר ראשון',
    emptyAddCourse: 'הוספת קורס ראשון',
    scheduleEmpty: 'אין קורסים במערכת השעות',
    examsEmpty: 'אין מבחנים עדיין',
    examsCount: (n) => `${n} מבחנים`,
    friendsEmpty: 'אין חברים עדיין',
    modalTitle: 'משימה חדשה',
    friendModalAdd: 'הוספת חבר',
    friendModalEdit: 'עריכת חבר',
    labelTitle: 'שם המשימה',
    labelDue: 'תאריך יעד',
    taskNoDueLabel: 'משימה כללית',
    noDueDate: 'ללא תאריך',
    labelUrgency: 'דחיפות',
    labelDifficulty: 'קושי',
    labelCategory: 'קורס',
    labelNewCategory: 'קורס חדש (אופציונלי)',
    labelReminder: 'שלח לי תזכורת יום לפני',
    attachmentsLegend: 'קבצים מצורפים (אופציונלי)',
    labelLink: 'קישור',
    labelImage: 'צירוף קובץ',
    labelFriendName: 'שם',
    labelFriendImage: 'תמונת פרופיל',
    labelTotalTasks: 'סה״כ משימות',
    labelCompletedTasks: 'משימות שהושלמו',
    fileHint: 'עד 3MB · תמונה, PDF, Word, PowerPoint · נשמר במכשיר',
    imageHint: 'עד 800KB · נשמר במכשיר',
    removeImage: 'הסרת קובץ',
    removeFriendImage: 'הסרת תמונה',
    btnCancel: 'ביטול',
    btnSave: 'שמירה',
    urgency: { 1: 'נמוך', 2: 'בינוני', 3: 'גבוה' },
    difficulty: { 1: 'קל', 2: 'בינוני', 3: 'קשה' },
    urgencyPlaceholder: 'בחר דחיפות',
    difficultyPlaceholder: 'בחר קושי',
    metaCategory: 'קורס',
    metaDue: 'יעד',
    metaUrgency: 'דחיפות',
    metaDifficulty: 'קושי',
    taskLink: 'קישור למשימה',
    imageAlt: 'קובץ מצורף',
    fileTypePdf: 'PDF',
    fileTypeWord: 'Word',
    fileTypePpt: 'PowerPoint',
    fileTypeFile: 'קובץ',
    previewAlt: 'תצוגה מקדימה',
    reminderLabel: 'תזכורת',
    reminderSettings: 'הגדרות תזכורת',
    reminderHoursBefore: 'כמה שעות לפני',
    reminderOneDayBefore: 'יום לפני',
    reminderOneWeekBefore: 'שבוע לפני',
    reminderChooseTime: 'בחר זמן תזכורת',
    reminderBeforeBadge: 'תזכורת',
    reminderHoursBadge: (n) => `${n} שעות לפני`,
    reminderHourUnit: 'שע׳',
    openCount: (n) => `${n} פתוחים`,
    friendsCount: (n) => `${n} חברים`,
    allDone: 'הכל הושלם',
    fabTask: 'הוספת משימה',
    fabExam: 'הוספת מבחן',
    fabFriend: 'הוספת חבר',
    closeLabel: 'סגירה',
    doneLabel: 'הושלם',
    deleteLabel: 'מחיקה',
    editLabel: 'עריכה',
    errImageSize: 'הקובץ גדול מדי. מקסימום 3MB.',
    errImageType: 'סוג קובץ לא נתמך. ניתן לצרף תמונה, PDF, Word או PowerPoint.',
    errFriendImageSize: 'התמונה גדולה מדי. מקסימום 800KB.',
    errFriendImageType: 'יש לבחור קובץ תמונה בלבד.',
    errImageRead: 'לא ניתן לקרוא את הקובץ.',
    errCompletedExceeds: 'מספר המשימות שהושלמו לא יכול לעבור את הסה״כ.',
    notificationTitle: 'תזכורת למשימה',
    notificationBody: (title) => `המשימה "${title}" מגיעה מחר`,
    notificationBodyWeek: (title) => `המשימה "${title}" מגיעה בעוד שבוע`,
    notificationBodyHours: (title, hours) => `המשימה "${title}" מגיעה בעוד ${hours} שעות`,
    friendProgress: (done, total) => `${done} מתוך ${total} משימות הושלמו`,
    friendOpen: (n) => `${n} פתוחים`,
    friendDone: (n) => `${n} הושלמו`,
    friendPercent: (p) => `${p}%`,
    friendRecentActivity: 'פעילות אחרונה',
    friendLeaderboardTitle: 'דירוג התקדמות',
    friendActivityFeedTitle: 'עדכונים אחרונים',
    friendActivityDisclaimer: 'נתוני החברים מוצגים לצורך תצוגה מקומית בלבד.',
    friendStatusStudying: 'לומד/ת עכשיו',
    friendStatusOffline: 'לא פעיל/ה',
    friendStatusCompleted: 'סיים/ה משימות היום',
    friendFeedCompleted: (name, n) => `${name} השלימ/ה ${n} משימות היום`,
    friendFeedStudying: (name) => `${name} התחיל/ה ללמוד`,
    friendFeedStreak: (name, n) => `${name} שמר/ה על רצף של ${n} ימים`,
    friendStreakDays: (n) => `רצף ${n} ימים`,
    appearanceLabel: 'מצב תצוגה',
    settingsTitle: 'הגדרות תצוגה',
    themeModeLabel: 'מצב',
    themeLight: 'בהיר',
    themeDark: 'כהה',
    accentLabel: 'צבע ראשי',
    deleteCategoryLabel: 'מחיקת קורס',
    confirmDeleteCategory: (name) => `למחוק את הקורס "${name}"? המשימות יועברו ל"כללי".`,
    statsTitle: 'סטטיסטיקה',
    statsAddWidget: 'הוספת ווידג׳ט סטטיסטיקה',
    statsShow: 'הצג סטטיסטיקה',
    statsHide: 'הסתר',
    statsSwitchType: 'החלף תצוגה',
    statsRemove: 'הסר ווידג׳ט',
    statsTypePie: 'עוגה',
    statsTypeBars: 'פסים',
    statCompleted: 'הושלמו',
    statOpen: 'פתוחים',
    statUrgent: 'דחופים',
    statWeek: 'השבוע',
    statCompletedPctSuffix: 'הושלמו',
    statCount: (n) => `${n}`,
    statsEmpty: 'אין משימות עדיין',
    categoryHint: 'בחר קורס קיים או צור קורס חדש',
    calendarBtn: 'לוח שנה',
    dockSettings: 'הגדרות',
    calendarTitle: 'לוח שנה',
    calendarPrev: 'חודש קודם',
    calendarNext: 'חודש הבא',
    calendarToday: 'היום',
    calendarNoTasks: 'אין משימות ביום זה',
    calendarNoItems: 'אין פריטים ביום זה',
    calendarDayItems: (date) => `${date}`,
    calendarTasksSection: 'משימות',
    calendarExamsSection: 'מבחנים',
    calendarBadgeExam: 'מבחן',
    calendarMore: (n) => `+${n}`,
    calendarExportTitle: 'ייצוא ללוח שנה',
    calendarExportButton: 'ייצוא משימות ומבחנים',
    calendarExportAdd: 'הוספה ליומן',
    calendarExportHelp: 'יומן באייפון / Apple Calendar ולייבוא ל-Google Calendar.',
    calendarExportNote: 'זה ייצוא חד־פעמי. אם שינית משימות או מבחנים, צריך לייצא שוב.',
    calendarExportTypeTask: 'משימה',
    calendarExportTypeExam: 'מבחן',
    calendarExportEmpty: 'אין משימות פתוחות או מבחנים לייצוא.',
    examModalAdd: 'הוספת מבחן',
    examModalEdit: 'עריכת מבחן',
    labelExamCourse: 'קורס',
    labelExamTitle: 'שם המבחן',
    labelExamDate: 'תאריך',
    labelExamType: 'מועד',
    examFilesLegend: 'קבצים מצורפים (אופציונלי)',
    examFilesHint: 'עד 3MB לקובץ · תמונה, PDF, Word, PowerPoint',
    metaExamType: 'מועד',
    metaExamDate: 'תאריך',
    examType: { a: 'מועד א', b: 'מועד ב', special: 'מועד מיוחד' },
    confirmDeleteExam: (title) => `למחוק את המבחן "${title}"?`,
    removeFile: 'הסרת קובץ',
    authLogin: 'התחברות',
    authCreateAccount: 'צור חשבון',
    authUsername: 'שם משתמש',
    authPassword: 'סיסמה',
    passwordShow: 'הצג סיסמה',
    passwordHide: 'הסתר סיסמה',
    authFirstName: 'שם פרטי',
    authLastName: 'שם משפחה',
    authEmail: 'מייל',
    authProfileImage: 'תמונת פרופיל (אופציונלי)',
    authLogout: 'התנתקות',
    authWrongCredentials: 'שם משתמש או סיסמה שגויים',
    authUsernameExists: 'שם המשתמש כבר קיים',
    authRequiredField: 'שדה חובה',
    authBackToLogin: 'חזרה להתחברות',
    authStorageNotice: 'כרגע החשבון נשמר רק במכשיר ובדפדפן הזה.',
    authStorageNoticeHint: 'אם תיכנסו ממכשיר אחר, תצטרכו ליצור חשבון חדש.',
    settingsPageTitle: 'הגדרות',
    settingsAccountMgmt: 'ניהול חשבון',
    settingsChangeName: 'שינוי שם',
    settingsChangeProfileImage: 'שינוי תמונת פרופיל',
    settingsChangePassword: 'שינוי סיסמה',
    settingsCurrentPassword: 'סיסמה נוכחית',
    settingsNewPassword: 'סיסמה חדשה',
    settingsSaveProfile: 'שמירת פרופיל',
    settingsUpdatePassword: 'עדכון סיסמה',
    settingsDeleteAccount: 'מחיקת חשבון',
    confirmDeleteAccount: (name) => `למחוק את החשבון של "${name}"? פעולה זו לא ניתנת לביטול.`,
    authWrongCurrentPassword: 'הסיסמה הנוכחית שגויה',
    settingsProfileSaved: 'הפרופיל עודכן בהצלחה',
    settingsPasswordUpdated: 'הסיסמה עודכנה בהצלחה',
    previewWorkspace: 'כניסה בלי יצירת חשבון',
    resetPreviewWorkspace: 'איפוס סביבת תצוגה',
    previewUser: 'סביבת תצוגה',
  },
  en: {
    pageTitle: 'Task Board',
    dateLabel: 'Date',
    timeLabel: 'Time',
    navTasks: 'Tasks',
    navExams: 'Exams',
    navSchedule: 'Schedule',
    navFriends: 'Friends',
    coursesTitle: 'Courses',
    tasksTitle: 'Tasks',
    examsTitle: 'Exams',
    scheduleTitle: 'Schedule',
    scheduleAddCourse: 'Add course',
    scheduleEditCourse: 'Edit course',
    scheduleCourseName: 'Course name',
    scheduleDay: 'Day',
    scheduleStartTime: 'Start time',
    scheduleEndTime: 'End time',
    scheduleColor: 'Color',
    scheduleDeleteCourse: 'Delete course',
    confirmDeleteScheduleCourse: (name) => `Remove "${name}" from the schedule?`,
    scheduleTimeInvalid: 'End time must be after start time',
    scheduleDays: {
      sunday: 'Sunday',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
    },
    friendsTitle: 'Friends',
    filterAll: 'All',
    filterUrgent: 'Urgent',
    filterToday: 'Today',
    filterWeek: 'This Week',
    filterDone: 'Done',
    categoryAll: 'All',
    emptyState: 'No tasks to show',
    emptyAddTask: 'Add first task',
    emptyAddExam: 'Add first exam',
    emptyAddFriend: 'Add first friend',
    emptyAddCourse: 'Add first course',
    scheduleEmpty: 'No courses in your schedule yet',
    examsEmpty: 'No exams yet',
    examsCount: (n) => `${n} exams`,
    friendsEmpty: 'No friends yet',
    modalTitle: 'New Task',
    friendModalAdd: 'Add friend',
    friendModalEdit: 'Edit friend',
    labelTitle: 'Task name',
    labelDue: 'Due date',
    taskNoDueLabel: 'General task',
    noDueDate: 'No due date',
    labelUrgency: 'Urgency',
    labelDifficulty: 'Difficulty',
    labelCategory: 'Category',
    labelNewCategory: 'New category (optional)',
    labelReminder: 'Remind me one day before',
    attachmentsLegend: 'Attachments (optional)',
    labelLink: 'Link',
    labelImage: 'Attach file',
    labelFriendName: 'Name',
    labelFriendImage: 'Profile image',
    labelTotalTasks: 'Total tasks',
    labelCompletedTasks: 'Completed tasks',
    fileHint: 'Up to 3MB · image, PDF, Word, PowerPoint · saved on this device',
    imageHint: 'Up to 800KB · saved on this device',
    removeImage: 'Remove file',
    removeFriendImage: 'Remove image',
    btnCancel: 'Cancel',
    btnSave: 'Save',
    urgency: { 1: 'Low', 2: 'Medium', 3: 'High' },
    difficulty: { 1: 'Low', 2: 'Medium', 3: 'High' },
    urgencyPlaceholder: 'Choose urgency',
    difficultyPlaceholder: 'Choose difficulty',
    metaCategory: 'Course',
    metaDue: 'Due',
    metaUrgency: 'Urgency',
    metaDifficulty: 'Difficulty',
    taskLink: 'Open link',
    imageAlt: 'Attached file',
    fileTypePdf: 'PDF',
    fileTypeWord: 'Word',
    fileTypePpt: 'PowerPoint',
    fileTypeFile: 'File',
    previewAlt: 'Preview',
    reminderLabel: 'Reminder',
    reminderSettings: 'Reminder settings',
    reminderHoursBefore: 'Hours before',
    reminderOneDayBefore: 'One day before',
    reminderOneWeekBefore: 'One week before',
    reminderChooseTime: 'Choose reminder time',
    reminderBeforeBadge: 'Reminder',
    reminderHoursBadge: (n) => `${n} hours before`,
    reminderHourUnit: 'h',
    openCount: (n) => `${n} open`,
    friendsCount: (n) => `${n} friends`,
    allDone: 'All done',
    fabTask: 'Add task',
    fabExam: 'Add exam',
    fabFriend: 'Add friend',
    closeLabel: 'Close',
    doneLabel: 'Done',
    deleteLabel: 'Delete',
    editLabel: 'Edit',
    errImageSize: 'File is too large. Max 3MB.',
    errImageType: 'Unsupported file type. Attach an image, PDF, Word, or PowerPoint file.',
    errFriendImageSize: 'Image is too large. Max 800KB.',
    errFriendImageType: 'Please select an image file only.',
    errImageRead: 'Could not read the file.',
    errCompletedExceeds: 'Completed tasks cannot exceed total tasks.',
    notificationTitle: 'Task reminder',
    notificationBody: (title) => `Task "${title}" is due tomorrow`,
    notificationBodyWeek: (title) => `Task "${title}" is due in one week`,
    notificationBodyHours: (title, hours) => `Task "${title}" is due in ${hours} hours`,
    friendProgress: (done, total) => `${done}/${total} tasks completed`,
    friendOpen: (n) => `${n} open`,
    friendDone: (n) => `${n} done`,
    friendPercent: (p) => `${p}%`,
    friendRecentActivity: 'Recent activity',
    friendLeaderboardTitle: 'Progress leaderboard',
    friendActivityFeedTitle: 'Recent updates',
    friendActivityDisclaimer: 'Friend activity is shown as local preview data.',
    friendStatusStudying: 'Studying now',
    friendStatusOffline: 'Offline',
    friendStatusCompleted: 'Completed tasks today',
    friendFeedCompleted: (name, n) => `${name} completed ${n} tasks today`,
    friendFeedStudying: (name) => `${name} started studying`,
    friendFeedStreak: (name, n) => `${name} kept a ${n}-day streak`,
    friendStreakDays: (n) => `${n}-day streak`,
    appearanceLabel: 'Appearance',
    settingsTitle: 'Appearance',
    themeModeLabel: 'Mode',
    themeLight: 'Light',
    themeDark: 'Dark',
    accentLabel: 'Accent color',
    deleteCategoryLabel: 'Delete category',
    confirmDeleteCategory: (name) => `Delete category "${name}"? Tasks will move to "General".`,
    statsTitle: 'Statistics',
    statsAddWidget: 'Add statistics widget',
    statsShow: 'Show statistics',
    statsHide: 'Hide',
    statsSwitchType: 'Switch view',
    statsRemove: 'Remove widget',
    statsTypePie: 'Pie chart',
    statsTypeBars: 'Progress bars',
    statCompleted: 'Completed',
    statOpen: 'Open',
    statUrgent: 'Urgent',
    statWeek: 'This week',
    statCompletedPctSuffix: 'completed',
    statCount: (n) => `${n}`,
    statsEmpty: 'No tasks yet',
    categoryHint: 'Choose an existing course or create a new one',
    calendarBtn: 'Calendar',
    dockSettings: 'Settings',
    calendarTitle: 'Calendar',
    calendarPrev: 'Previous month',
    calendarNext: 'Next month',
    calendarToday: 'Today',
    calendarNoTasks: 'No tasks on this day',
    calendarNoItems: 'Nothing on this day',
    calendarDayItems: (date) => `${date}`,
    calendarTasksSection: 'Tasks',
    calendarExamsSection: 'Exams',
    calendarBadgeExam: 'Exam',
    calendarMore: (n) => `+${n}`,
    calendarExportTitle: 'Export to Calendar',
    calendarExportButton: 'Export Tasks and Exams',
    calendarExportAdd: 'Add to Calendar',
    calendarExportHelp: 'Apple Calendar and Google Calendar import.',
    calendarExportNote: 'This is a one-time export. If you change tasks or exams, export again.',
    calendarExportTypeTask: 'Task',
    calendarExportTypeExam: 'Exam',
    calendarExportEmpty: 'No open tasks or exams to export.',
    examModalAdd: 'Add exam',
    examModalEdit: 'Edit exam',
    labelExamCourse: 'Course',
    labelExamTitle: 'Exam name',
    labelExamDate: 'Date',
    labelExamType: 'Exam session',
    examFilesLegend: 'Attachments (optional)',
    examFilesHint: 'Up to 3MB per file · image, PDF, Word, PowerPoint',
    metaExamType: 'Session',
    metaExamDate: 'Date',
    examType: { a: 'Exam A', b: 'Exam B', special: 'Special exam' },
    confirmDeleteExam: (title) => `Delete exam "${title}"?`,
    removeFile: 'Remove file',
    authLogin: 'Login',
    authCreateAccount: 'Create account',
    authUsername: 'Username',
    authPassword: 'Password',
    passwordShow: 'Show password',
    passwordHide: 'Hide password',
    authFirstName: 'First name',
    authLastName: 'Last name',
    authEmail: 'Email',
    authProfileImage: 'Profile image (optional)',
    authLogout: 'Logout',
    authWrongCredentials: 'Wrong username or password',
    authUsernameExists: 'Username already exists',
    authRequiredField: 'Required field',
    authBackToLogin: 'Back to login',
    authStorageNotice: 'Currently, accounts are stored only on this device and browser.',
    authStorageNoticeHint: "If you use another device, you'll need to create a new account there.",
    settingsPageTitle: 'Settings',
    settingsAccountMgmt: 'Account management',
    settingsChangeName: 'Change name',
    settingsChangeProfileImage: 'Change profile image',
    settingsChangePassword: 'Change password',
    settingsCurrentPassword: 'Current password',
    settingsNewPassword: 'New password',
    settingsSaveProfile: 'Save profile',
    settingsUpdatePassword: 'Update password',
    settingsDeleteAccount: 'Delete account',
    confirmDeleteAccount: (name) => `Delete account for "${name}"? This cannot be undone.`,
    authWrongCurrentPassword: 'Current password is incorrect',
    settingsProfileSaved: 'Profile updated successfully',
    settingsPasswordUpdated: 'Password updated successfully',
    previewWorkspace: 'Continue without account',
    resetPreviewWorkspace: 'Reset Preview Workspace',
    previewUser: 'Preview Workspace',
  },
};

function generateSalt() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function hashPassword(password, salt) {
  const encoder = new TextEncoder();
  const data = encoder.encode(`${salt}:${password}`);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function updatePasswordToggleState(button, input) {
  if (!button || !input) return;
  const visible = input.type === 'text';
  button.classList.toggle('is-visible', visible);
  button.setAttribute('aria-pressed', visible ? 'true' : 'false');
  button.setAttribute('aria-label', t(visible ? 'passwordHide' : 'passwordShow'));
  button.textContent = visible ? '🙈' : '👁';
}

function togglePasswordVisibility(button, input) {
  if (!button || !input) return;

  const selectionStart = input.selectionStart;
  const selectionEnd = input.selectionEnd;
  const wasHidden = input.type === 'password';

  input.type = wasHidden ? 'text' : 'password';
  updatePasswordToggleState(button, input);

  requestAnimationFrame(() => {
    input.focus();
    if (selectionStart !== null && selectionEnd !== null) {
      try {
        input.setSelectionRange(selectionStart, selectionEnd);
      } catch {
        /* some inputs may not support selection */
      }
    }
  });
}

function initPasswordFieldToggle(wrap) {
  const input = wrap.querySelector('input');
  const button = wrap.querySelector('.password-toggle-btn');
  if (!input || !button || button.dataset.passwordToggleInit === 'true') return;

  button.dataset.passwordToggleInit = 'true';
  updatePasswordToggleState(button, input);
  button.addEventListener('click', () => togglePasswordVisibility(button, input));
}

function initAllPasswordToggles() {
  document.querySelectorAll('.password-input-wrap').forEach(initPasswordFieldToggle);
  document.querySelectorAll('.password-toggle-btn').forEach((button) => {
    const input = button.parentElement?.querySelector('input');
    if (input) updatePasswordToggleState(button, input);
  });
}

function getSavingText() {
  return lang === 'he' ? 'שומר...' : 'Saving...';
}

function setButtonLoading(button, isLoading, loadingText) {
  if (!button) return;

  if (isLoading) {
    if (!button.dataset.originalText) {
      button.dataset.originalText = button.textContent;
    }
    button.disabled = true;
    button.classList.add('is-loading');
    if (loadingText) button.textContent = loadingText;
  } else {
    button.disabled = false;
    button.classList.remove('is-loading');
    if (button.dataset.originalText) {
      button.textContent = button.dataset.originalText;
      delete button.dataset.originalText;
    }
  }
}

function isSubmitting(form) {
  return form?.dataset.submitting === 'true';
}

function setSubmitting(form, value) {
  if (!form) return;
  form.dataset.submitting = value ? 'true' : 'false';
}

function resetFormSubmit(form, submitBtn) {
  setButtonLoading(submitBtn, false);
  setSubmitting(form, false);
}

function startFormSubmit(form) {
  if (!form || isSubmitting(form)) return false;
  setSubmitting(form, true);
  const submitBtn = form.querySelector('button[type="submit"]');
  setButtonLoading(submitBtn, true, getSavingText());
  return true;
}

function clearFormSubmitState(form) {
  if (!form) return;
  resetFormSubmit(form, form.querySelector('button[type="submit"]'));
}

async function runGuardedAction(button, action) {
  if (!button || button.dataset.actionRunning === 'true') return;
  button.dataset.actionRunning = 'true';
  setButtonLoading(button, true, getSavingText());
  try {
    await action();
  } catch (error) {
    console.error(error);
  } finally {
    delete button.dataset.actionRunning;
    setButtonLoading(button, false);
  }
}

let lang = localStorage.getItem(LANG_KEY) || 'he';
let themeMode = localStorage.getItem(THEME_KEY) || 'light';
let accentColor = localStorage.getItem(ACCENT_KEY) || 'blue';
let widgetPrefs = { enabled: true, visible: true, type: 'pie' };
let previousCompletedPct = 0;
let previousBarPcts = { completed: 0, open: 0, urgent: 0, week: 0 };
let previousStatCounts = { completed: 0, open: 0, urgent: 0, week: 0 };
let statsWidgetMode = null;
let tasks = [];
let friends = [];
let exams = [];
let scheduleCourses = [];
let categories = [];
let activeCategory = CATEGORY_ALL_ID;
let activeStatus = 'all';
let activeView = 'tasks';
let pendingTaskImage = '';
let pendingTaskFileName = '';
let pendingFriendImage = '';
let editingFriendId = null;
let draggedFriendId = null;
let editingExamId = null;
let editingScheduleCourseId = null;
let pendingExamFiles = [];
let calendarView = { year: new Date().getFullYear(), month: new Date().getMonth() };
let calendarSelectedDate = null;
let users = [];
let pendingSignupProfileImage = '';
let pendingSettingsProfileImage = null;
let shouldRemoveSettingsProfileImage = false;
let dashboardInitialized = false;
let clockIntervalId = null;
let pendingReminder = { type: 'day', hours: 24 };

const els = {
  html: document.documentElement,
  authScreen: document.getElementById('authScreen'),
  dashboardApp: document.getElementById('dashboardApp'),
  loginPanel: document.getElementById('loginPanel'),
  signupPanel: document.getElementById('signupPanel'),
  loginForm: document.getElementById('loginForm'),
  previewWorkspaceBtn: document.getElementById('previewWorkspaceBtn'),
  signupForm: document.getElementById('signupForm'),
  loginUsername: document.getElementById('loginUsername'),
  loginPassword: document.getElementById('loginPassword'),
  loginError: document.getElementById('loginError'),
  signupFirstName: document.getElementById('signupFirstName'),
  signupLastName: document.getElementById('signupLastName'),
  signupEmail: document.getElementById('signupEmail'),
  signupUsername: document.getElementById('signupUsername'),
  signupPassword: document.getElementById('signupPassword'),
  signupProfileImage: document.getElementById('signupProfileImage'),
  signupImagePreview: document.getElementById('signupImagePreview'),
  signupImagePreviewImg: document.getElementById('signupImagePreviewImg'),
  signupImagePreviewRemove: document.getElementById('signupImagePreviewRemove'),
  signupError: document.getElementById('signupError'),
  showSignupBtn: document.getElementById('showSignupBtn'),
  showLoginBtn: document.getElementById('showLoginBtn'),
  userProfileImage: document.getElementById('userProfileImage'),
  userProfileInitial: document.getElementById('userProfileInitial'),
  userFirstName: document.getElementById('userFirstName'),
  userLastName: document.getElementById('userLastName'),
  logoutBtn: document.getElementById('logoutBtn'),
  todayDate: document.getElementById('todayDate'),
  currentTime: document.getElementById('currentTime'),
  mainNav: document.getElementById('dockNav'),
  dockNav: document.getElementById('dockNav'),
  dockList: document.getElementById('dockList'),
  dockCalendarBtn: document.getElementById('dockCalendarBtn'),
  dockSettingsBtn: document.getElementById('dockSettingsBtn'),
  settingsModalOverlay: document.getElementById('settingsModalOverlay'),
  settingsModalClose: document.getElementById('settingsModalClose'),
  settingsProfileForm: document.getElementById('settingsProfileForm'),
  settingsPasswordForm: document.getElementById('settingsPasswordForm'),
  settingsFirstName: document.getElementById('settingsFirstName'),
  settingsLastName: document.getElementById('settingsLastName'),
  settingsProfileImage: document.getElementById('settingsProfileImage'),
  settingsImagePreview: document.getElementById('settingsImagePreview'),
  settingsImagePreviewImg: document.getElementById('settingsImagePreviewImg'),
  settingsImagePreviewRemove: document.getElementById('settingsImagePreviewRemove'),
  settingsProfileError: document.getElementById('settingsProfileError'),
  settingsCurrentPassword: document.getElementById('settingsCurrentPassword'),
  settingsNewPassword: document.getElementById('settingsNewPassword'),
  settingsPasswordError: document.getElementById('settingsPasswordError'),
  settingsLogoutBtn: document.getElementById('settingsLogoutBtn'),
  settingsDeleteAccountBtn: document.getElementById('settingsDeleteAccountBtn'),
  resetPreviewWorkspaceBtn: document.getElementById('resetPreviewWorkspaceBtn'),
  tasksSidebar: document.getElementById('tasksSidebar'),
  tasksView: document.getElementById('tasksView'),
  examsView: document.getElementById('examsView'),
  scheduleView: document.getElementById('scheduleView'),
  scheduleGrid: document.getElementById('scheduleGrid'),
  scheduleAddCourseBtn: document.getElementById('scheduleAddCourseBtn'),
  scheduleCourseModalOverlay: document.getElementById('scheduleCourseModalOverlay'),
  scheduleCourseModalTitle: document.getElementById('scheduleCourseModalTitle'),
  scheduleCourseModalClose: document.getElementById('scheduleCourseModalClose'),
  scheduleCourseModalCancel: document.getElementById('scheduleCourseModalCancel'),
  scheduleCourseForm: document.getElementById('scheduleCourseForm'),
  scheduleCourseName: document.getElementById('scheduleCourseName'),
  scheduleCourseDay: document.getElementById('scheduleCourseDay'),
  scheduleCourseStartTime: document.getElementById('scheduleCourseStartTime'),
  scheduleCourseEndTime: document.getElementById('scheduleCourseEndTime'),
  scheduleColorPicker: document.getElementById('scheduleColorPicker'),
  scheduleCourseError: document.getElementById('scheduleCourseError'),
  scheduleDeleteCourseBtn: document.getElementById('scheduleDeleteCourseBtn'),
  friendsView: document.getElementById('friendsView'),
  categoryList: document.getElementById('categoryList'),
  filterBar: document.getElementById('filterBar'),
  taskList: document.getElementById('taskList'),
  emptyState: document.getElementById('emptyState'),
  tasksEmptyBlock: document.getElementById('tasksEmptyBlock'),
  emptyAddTaskBtn: document.getElementById('emptyAddTaskBtn'),
  examsEmptyBlock: document.getElementById('examsEmptyBlock'),
  emptyAddExamBtn: document.getElementById('emptyAddExamBtn'),
  scheduleEmptyBlock: document.getElementById('scheduleEmptyBlock'),
  emptyAddCourseBtn: document.getElementById('emptyAddCourseBtn'),
  friendsDataNote: document.getElementById('friendsDataNote'),
  taskCount: document.getElementById('taskCount'),
  friendsList: document.getElementById('friendsList'),
  friendsLeaderboard: document.getElementById('friendsLeaderboard'),
  friendsLeaderboardList: document.getElementById('friendsLeaderboardList'),
  friendsActivityFeed: document.getElementById('friendsActivityFeed'),
  friendsActivityFeedList: document.getElementById('friendsActivityFeedList'),
  friendsEmptyBlock: document.getElementById('friendsEmptyBlock'),
  friendsEmptyState: document.getElementById('friendsEmptyState'),
  emptyAddFriendBtn: document.getElementById('emptyAddFriendBtn'),
  friendsCount: document.getElementById('friendsCount'),
  examList: document.getElementById('examList'),
  examsEmptyState: document.getElementById('examsEmptyState'),
  examsCount: document.getElementById('examsCount'),
  examsCalendarBtn: document.getElementById('examsCalendarBtn'),
  fabAdd: document.getElementById('fabAdd'),
  taskModalOverlay: document.getElementById('taskModalOverlay'),
  taskModalClose: document.getElementById('taskModalClose'),
  taskModalCancel: document.getElementById('taskModalCancel'),
  taskForm: document.getElementById('taskForm'),
  taskTitle: document.getElementById('taskTitle'),
  taskDue: document.getElementById('taskDue'),
  taskNoDue: document.getElementById('taskNoDue'),
  taskUrgency: document.getElementById('taskUrgency'),
  taskDifficulty: document.getElementById('taskDifficulty'),
  taskCategory: document.getElementById('taskCategory'),
  newCategory: document.getElementById('newCategory'),
  taskReminder: document.getElementById('taskReminder'),
  taskReminderSettingsBtn: document.getElementById('taskReminderSettingsBtn'),
  taskReminderSummary: document.getElementById('taskReminderSummary'),
  reminderSheetOverlay: document.getElementById('reminderSheetOverlay'),
  reminderSheetClose: document.getElementById('reminderSheetClose'),
  reminderSheetDone: document.getElementById('reminderSheetDone'),
  reminderHoursGrid: document.getElementById('reminderHoursGrid'),
  taskLink: document.getElementById('taskLink'),
  taskImageFile: document.getElementById('taskImageFile'),
  imagePreview: document.getElementById('imagePreview'),
  imagePreviewImg: document.getElementById('imagePreviewImg'),
  filePreviewCard: document.getElementById('filePreviewCard'),
  filePreviewName: document.getElementById('filePreviewName'),
  filePreviewType: document.getElementById('filePreviewType'),
  imagePreviewRemove: document.getElementById('imagePreviewRemove'),
  imageError: document.getElementById('imageError'),
  examModalOverlay: document.getElementById('examModalOverlay'),
  examModalTitle: document.getElementById('examModalTitle'),
  examModalClose: document.getElementById('examModalClose'),
  examModalCancel: document.getElementById('examModalCancel'),
  examForm: document.getElementById('examForm'),
  examCourse: document.getElementById('examCourse'),
  examCourseList: document.getElementById('examCourseList'),
  examTitle: document.getElementById('examTitle'),
  examDate: document.getElementById('examDate'),
  examType: document.getElementById('examType'),
  examFilesInput: document.getElementById('examFilesInput'),
  examPendingFiles: document.getElementById('examPendingFiles'),
  examFileError: document.getElementById('examFileError'),
  friendModalOverlay: document.getElementById('friendModalOverlay'),
  friendModalTitle: document.getElementById('friendModalTitle'),
  friendModalClose: document.getElementById('friendModalClose'),
  friendModalCancel: document.getElementById('friendModalCancel'),
  friendForm: document.getElementById('friendForm'),
  friendName: document.getElementById('friendName'),
  friendImageFile: document.getElementById('friendImageFile'),
  friendImagePreview: document.getElementById('friendImagePreview'),
  friendImagePreviewImg: document.getElementById('friendImagePreviewImg'),
  friendImagePreviewRemove: document.getElementById('friendImagePreviewRemove'),
  friendImageError: document.getElementById('friendImageError'),
  friendTotalTasks: document.getElementById('friendTotalTasks'),
  friendCompletedTasks: document.getElementById('friendCompletedTasks'),
  langButtons: document.querySelectorAll('.lang-btn'),
  appearanceBtn: document.getElementById('appearanceBtn'),
  appearancePanel: document.getElementById('appearancePanel'),
  appearanceIcon: document.getElementById('appearanceIcon'),
  themeButtons: document.querySelectorAll('.theme-btn'),
  accentSwatches: document.querySelectorAll('.accent-swatch'),
  statsWidgetArea: document.getElementById('statsWidgetArea'),
  statsAddBtn: document.getElementById('statsAddBtn'),
  statsWidgetCard: document.getElementById('statsWidgetCard'),
  statsWidgetBody: document.getElementById('statsWidgetBody'),
  statsToggleTypeBtn: document.getElementById('statsToggleTypeBtn'),
  statsToggleVisibleBtn: document.getElementById('statsToggleVisibleBtn'),
  statsRemoveBtn: document.getElementById('statsRemoveBtn'),
  statsShowBtn: document.getElementById('statsShowBtn'),
  categoryHint: document.getElementById('categoryHint'),
  calendarBtn: document.getElementById('calendarBtn'),
  calendarModalOverlay: document.getElementById('calendarModalOverlay'),
  calendarModalClose: document.getElementById('calendarModalClose'),
  calendarPrevBtn: document.getElementById('calendarPrevBtn'),
  calendarNextBtn: document.getElementById('calendarNextBtn'),
  calendarTodayBtn: document.getElementById('calendarTodayBtn'),
  calendarMonthLabel: document.getElementById('calendarMonthLabel'),
  calendarWeekdays: document.getElementById('calendarWeekdays'),
  calendarGrid: document.getElementById('calendarGrid'),
  calendarDayTitle: document.getElementById('calendarDayTitle'),
  calendarDayList: document.getElementById('calendarDayList'),
  calendarDayExamsList: document.getElementById('calendarDayExamsList'),
  calendarTasksSection: document.getElementById('calendarTasksSection'),
  calendarExamsSection: document.getElementById('calendarExamsSection'),
  calendarDayEmpty: document.getElementById('calendarDayEmpty'),
  calendarExportBtn: document.getElementById('calendarExportBtn'),
  settingsCalendarExportBtn: document.getElementById('settingsCalendarExportBtn'),
};

function syncCategoryInputs() {
  const usingNew = els.newCategory.value.trim().length > 0;
  els.taskCategory.disabled = usingNew;
  els.taskCategory.classList.toggle('is-disabled', usingNew);
  els.newCategory.classList.toggle('is-active-new', usingNew);
}

function resetCategoryInputs() {
  els.taskCategory.disabled = false;
  els.newCategory.disabled = false;
  els.taskCategory.classList.remove('is-disabled');
  els.newCategory.classList.remove('is-active-new');
}

function getDefaultCategoryName() {
  return lang === 'he' ? DEFAULT_GENERAL_HE : DEFAULT_GENERAL_EN;
}

const GENERAL_CATEGORY_NAMES = [DEFAULT_GENERAL_HE, DEFAULT_GENERAL_EN];

function isVirtualAllCategory(nameOrId) {
  const value = String(nameOrId || '').trim();
  return value === CATEGORY_ALL_ID || value === 'הכל' || value === 'All';
}

function isGeneralCategory(name) {
  const value = String(name || '').trim();
  return GENERAL_CATEGORY_NAMES.includes(value);
}

function isProtectedCategory(name) {
  return isVirtualAllCategory(name) || isGeneralCategory(name);
}

function migrateGeneralCategoryName(fromName, toName) {
  if (!fromName || fromName === toName) return;
  tasks.forEach((task) => {
    if (task.category === fromName) task.category = toName;
  });
  exams.forEach((exam) => {
    if (exam.course === fromName) exam.course = toName;
  });
  if (activeCategory === fromName) activeCategory = toName;
}

function orderCategoriesList(list) {
  const source = Array.isArray(list) ? list : [];
  const seen = new Set();
  const others = [];
  let storedGeneral = null;

  source.forEach((entry) => {
    const name = String(entry || '').trim();
    if (!name || isVirtualAllCategory(name)) return;
    if (isGeneralCategory(name)) {
      if (!storedGeneral) storedGeneral = name;
      return;
    }
    if (seen.has(name)) return;
    seen.add(name);
    others.push(name);
  });

  const generalName = getDefaultCategoryName();
  if (storedGeneral && storedGeneral !== generalName) {
    migrateGeneralCategoryName(storedGeneral, generalName);
  }

  return [generalName, ...others];
}

function normalizeCategoriesList(list) {
  const ordered = orderCategoriesList(list);
  return ordered.length ? ordered : orderCategoriesList([...DEFAULT_CATEGORIES]);
}

function normalizeActiveCategory() {
  if (activeCategory === CATEGORY_ALL_ID) return CATEGORY_ALL_ID;
  if (!categories.includes(activeCategory)) activeCategory = CATEGORY_ALL_ID;
  return activeCategory;
}

function getAllCategoryItem() {
  return { id: CATEGORY_ALL_ID, label: t('categoryAll'), deletable: false };
}

function loadWidgetPrefs() {
  try {
    const saved = localStorage.getItem(WIDGET_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      widgetPrefs = {
        enabled: data.enabled !== false,
        visible: data.visible !== false,
        type: data.type === 'bars' ? 'bars' : 'pie',
      };
    }
  } catch {
    widgetPrefs = { enabled: true, visible: true, type: 'pie' };
  }
}

function saveWidgetPrefs() {
  localStorage.setItem(WIDGET_KEY, JSON.stringify(widgetPrefs));
}

function computeTaskStats() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.done).length;
  const open = tasks.filter((task) => !task.done).length;
  const urgent = tasks.filter((task) => !task.done && isTaskUrgent(task)).length;
  const dueWeek = tasks.filter((task) => !task.done && isDueThisWeek(task.due)).length;
  const completedPct = total ? Math.round((completed / total) * 100) : 0;

  return { total, completed, open, urgent, dueWeek, completedPct };
}

function animateNumber(from, to, duration, onUpdate) {
  const start = performance.now();

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = easeOutCubic(progress);
    const current = from + (to - from) * eased;

    onUpdate(current);

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

function mountStatsPieShell() {
  els.statsWidgetBody.innerHTML =
    `<div class="stats-pie-layout">` +
      `<div class="stats-pie-wrap">` +
        `<div class="stats-pie" style="--pie-value:${previousCompletedPct}%">` +
          `<div class="stats-pie-center">` +
            `<span class="stats-pie-pct">${Math.round(previousCompletedPct)}%</span>` +
            `<span class="stats-pie-label">${escapeHtml(t('statCompleted'))}</span>` +
          `</div>` +
        `</div>` +
      `</div>` +
      `<ul class="stats-legend">` +
        `<li><span class="stats-dot seg-completed"></span>${escapeHtml(t('statCompleted'))}: <strong data-stat="completed">${previousStatCounts.completed}</strong></li>` +
        `<li><span class="stats-dot seg-open"></span>${escapeHtml(t('statOpen'))}: <strong data-stat="open">${previousStatCounts.open}</strong></li>` +
        `<li><span class="stats-dot seg-urgent"></span>${escapeHtml(t('statUrgent'))}: <strong data-stat="urgent">${previousStatCounts.urgent}</strong></li>` +
        `<li><span class="stats-dot seg-week"></span>${escapeHtml(t('statWeek'))}: <strong data-stat="week">${previousStatCounts.week}</strong></li>` +
      `</ul>` +
    `</div>`;
}

function animateStatsPie(stats) {
  const pie = els.statsWidgetBody.querySelector('.stats-pie');
  const pctEl = els.statsWidgetBody.querySelector('.stats-pie-pct');
  if (!pie || !pctEl) return;

  const fromPct = previousCompletedPct;
  animateNumber(fromPct, stats.completedPct, STATS_ANIM_DURATION, (current) => {
    pie.style.setProperty('--pie-value', `${current}%`);
    pctEl.textContent = `${Math.round(current)}%`;
  });
  previousCompletedPct = stats.completedPct;

  [
    ['completed', stats.completed],
    ['open', stats.open],
    ['urgent', stats.urgent],
    ['week', stats.dueWeek],
  ].forEach(([key, to]) => {
    const el = els.statsWidgetBody.querySelector(`[data-stat="${key}"]`);
    if (!el) return;
    const from = previousStatCounts[key];
    animateNumber(from, to, STATS_ANIM_DURATION, (current) => {
      el.textContent = Math.round(current);
    });
    previousStatCounts[key] = to;
  });
}

function mountStatsBarsShell() {
  const rows = [
    { key: 'completed', label: t('statCompleted') },
    { key: 'open', label: t('statOpen') },
    { key: 'urgent', label: t('statUrgent') },
    { key: 'week', label: t('statWeek') },
  ];

  els.statsWidgetBody.innerHTML =
    `<div class="stats-bars">` +
      `<p class="stats-summary">` +
        `<span class="stats-summary-pct">${Math.round(previousCompletedPct)}%</span> ` +
        `<span class="stats-summary-suffix">${escapeHtml(t('statCompletedPctSuffix'))}</span>` +
      `</p>` +
      rows
        .map(
          (row) =>
            `<div class="stats-bar-row">` +
              `<div class="stats-bar-head">` +
                `<span>${escapeHtml(row.label)}</span>` +
                `<span class="stats-bar-value" data-bar-value="${row.key}">${previousStatCounts[row.key]}</span>` +
              `</div>` +
              `<div class="stats-bar-track">` +
                `<div class="stats-bar-fill bar-${row.key}" style="width:${previousBarPcts[row.key]}%"></div>` +
              `</div>` +
            `</div>`
        )
        .join('') +
    `</div>`;
}

function animateStatsBars(stats) {
  const total = stats.total || 1;
  const pct = (n) => Math.round((n / total) * 100);

  const rows = [
    { key: 'completed', value: stats.completed, pct: pct(stats.completed) },
    { key: 'open', value: stats.open, pct: pct(stats.open) },
    { key: 'urgent', value: stats.urgent, pct: pct(stats.urgent) },
    { key: 'week', value: stats.dueWeek, pct: pct(stats.dueWeek) },
  ];

  const summaryPct = els.statsWidgetBody.querySelector('.stats-summary-pct');
  if (summaryPct) {
    animateNumber(previousCompletedPct, stats.completedPct, STATS_ANIM_DURATION, (current) => {
      summaryPct.textContent = `${Math.round(current)}%`;
    });
  }
  previousCompletedPct = stats.completedPct;

  rows.forEach((row) => {
    const bar = els.statsWidgetBody.querySelector(`.stats-bar-fill.bar-${row.key}`);
    if (bar) {
      const fromWidth = previousBarPcts[row.key];
      animateNumber(fromWidth, row.pct, STATS_ANIM_DURATION, (current) => {
        bar.style.width = `${current}%`;
      });
      previousBarPcts[row.key] = row.pct;
    }

    const valueEl = els.statsWidgetBody.querySelector(`[data-bar-value="${row.key}"]`);
    if (valueEl) {
      const fromVal = previousStatCounts[row.key];
      animateNumber(fromVal, row.value, STATS_ANIM_DURATION, (current) => {
        valueEl.textContent = Math.round(current);
      });
      previousStatCounts[row.key] = row.value;
    }
  });
}

function renderStatsWidget() {
  if (activeView !== 'tasks') return;

  const { enabled, visible, type } = widgetPrefs;

  els.statsAddBtn.hidden = enabled;
  els.statsShowBtn.hidden = !enabled || visible;
  els.statsWidgetCard.hidden = !enabled || !visible;

  if (!enabled) return;

  els.statsToggleVisibleBtn.textContent = visible ? t('statsHide') : t('statsShow');
  els.statsToggleTypeBtn.textContent =
    type === 'pie' ? t('statsTypeBars') : t('statsTypePie');

  const stats = computeTaskStats();

  if (stats.total === 0) {
    els.statsWidgetBody.innerHTML = `<p class="stats-empty">${escapeHtml(t('statsEmpty'))}</p>`;
    statsWidgetMode = null;
    previousCompletedPct = 0;
    previousBarPcts = { completed: 0, open: 0, urgent: 0, week: 0 };
    previousStatCounts = { completed: 0, open: 0, urgent: 0, week: 0 };
    return;
  }

  if (type === 'pie') {
    if (statsWidgetMode !== 'pie') {
      mountStatsPieShell();
      statsWidgetMode = 'pie';
    }
    animateStatsPie(stats);
    return;
  }

  if (statsWidgetMode !== 'bars') {
    mountStatsBarsShell();
    statsWidgetMode = 'bars';
  }
  animateStatsBars(stats);
}

function addStatsWidget() {
  widgetPrefs.enabled = true;
  widgetPrefs.visible = true;
  saveWidgetPrefs();
  renderStatsWidget();
}

function removeStatsWidget() {
  widgetPrefs.enabled = false;
  saveWidgetPrefs();
  renderStatsWidget();
}

/*
            `<span class="stats-pie-pct">${stats.completedPct}%</span>` +
            `<span class="stats-pie-label">${escapeHtml(t('statCompleted'))}</span>` +
          `</div>` +
        `</div>` +
      `</div>` +
      `<ul class="stats-legend">` +
        `<li><span class="stats-dot seg-completed"></span>${escapeHtml(t('statCompleted'))}: <strong>${stats.completed}</strong></li>` +
        `<li><span class="stats-dot seg-open"></span>${escapeHtml(t('statOpen'))}: <strong>${stats.open}</strong></li>` +
        `<li><span class="stats-dot seg-urgent"></span>${escapeHtml(t('statUrgent'))}: <strong>${stats.urgent}</strong></li>` +
        `<li><span class="stats-dot seg-week"></span>${escapeHtml(t('statWeek'))}: <strong>${stats.dueWeek}</strong></li>` +
      `</ul>` +
    `</div>`;

  requestAnimationFrame(() => {
    const pie = document.querySelector('.stats-pie');
    if (pie) {
      pie.style.setProperty('--pie-value', `${completedPct}%`);
    }
    previousCompletedPct = completedPct;
  });

    `<div class="stats-bars">` +
      `<p class="stats-summary">${escapeHtml(t('statCompletedPct')(stats.completedPct))}</p>` +
      rows
        .map(
          (row) =>
            `<div class="stats-bar-row">` +
              `<div class="stats-bar-head">` +
                `<span>${escapeHtml(row.label)}</span>` +
                `<span class="stats-bar-value">${row.value}</span>` +
              `</div>` +
              `<div class="stats-bar-track">` +
                `<div class="stats-bar-fill bar-${row.key}" data-width="${row.pct}" style="width:0%"></div>` +
              `</div>` +
*/
function toggleStatsVisibility() {
  if (!widgetPrefs.enabled) return;
  widgetPrefs.visible = !widgetPrefs.visible;
  saveWidgetPrefs();
  renderStatsWidget();
}

function toggleStatsType() {
  if (!widgetPrefs.enabled) return;
  widgetPrefs.type = widgetPrefs.type === 'pie' ? 'bars' : 'pie';
  statsWidgetMode = null;
  saveWidgetPrefs();
  renderStatsWidget();
}

function setTaskDueMin() {
  els.taskDue.min = todayKey();
}

function applyThemeEarly() {
  document.documentElement.dataset.theme = themeMode;
  document.documentElement.dataset.accent = accentColor;
}

applyThemeEarly();

function t(key) {
  return i18n[lang][key];
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function parseLocalDate(dateString) {
  if (!dateString) return null;
  const [year, month, day] = String(dateString).split('-').map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function getTodayLocalDate() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function dateKeyFromDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function isSameLocalDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function todayKey() {
  return dateKeyFromDate(getTodayLocalDate());
}

function addDays(days) {
  const date = getTodayLocalDate();
  date.setDate(date.getDate() + days);
  return dateKeyFromDate(date);
}

function offsetDateKey(dateKey, days) {
  const date = parseLocalDate(dateKey);
  if (!date) return dateKey;
  date.setDate(date.getDate() + days);
  return dateKeyFromDate(date);
}

function pickRandomFriendStatus() {
  const roll = Math.random();
  if (roll < 0.34) return 'studying';
  if (roll < 0.67) return 'offline';
  return 'completed';
}

function generateFakeFriendActivity(dayCount = FRIEND_ACTIVITY_DAYS) {
  const activity = [];
  const today = todayKey();
  for (let i = dayCount - 1; i >= 0; i -= 1) {
    const date = offsetDateKey(today, -i);
    const roll = Math.random();
    let completed = 0;
    if (roll > 0.22) completed = 1;
    if (roll > 0.48) completed = 2;
    if (roll > 0.7) completed = 3;
    if (roll > 0.88) completed = 4 + Math.floor(Math.random() * 2);
    activity.push({ date, completed });
  }
  return activity;
}

function calculateFriendStreak(activity) {
  if (!Array.isArray(activity) || !activity.length) return 0;
  const sorted = [...activity].sort((a, b) => b.date.localeCompare(a.date));
  let streak = 0;
  for (const day of sorted) {
    if ((day.completed || 0) > 0) streak += 1;
    else break;
  }
  return streak;
}

function getFriendHeatmapLevel(completed) {
  const count = Math.max(0, Number(completed) || 0);
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  return 3;
}

function normalizeFriendActivityEntry(entry) {
  return {
    date: String(entry?.date || '').slice(0, 10),
    completed: Math.max(0, Number(entry?.completed) || 0),
  };
}

function getFriendActivityDays(friend, dayCount = FRIEND_ACTIVITY_DAYS) {
  const map = new Map(
    (friend.activity || []).map((entry) => {
      const normalized = normalizeFriendActivityEntry(entry);
      return [normalized.date, normalized.completed];
    })
  );
  const today = todayKey();
  const days = [];
  for (let i = dayCount - 1; i >= 0; i -= 1) {
    const date = offsetDateKey(today, -i);
    days.push({ date, completed: map.get(date) || 0 });
  }
  return days;
}

function isPreviewUser(user = getCurrentUser()) {
  return !!user && user.id === PREVIEW_USER_ID;
}

function buildPreviewWorkspaceData() {
  return {
    categories: ['אלגוריתמים', 'פייתון', 'סטטיסטיקה', 'ניהול'],
    tasks: [
      {
        id: generateId(),
        title: 'תרגיל בית באלגוריתמים',
        category: 'אלגוריתמים',
        due: addDays(0),
        urgency: 3,
        difficulty: 3,
        done: false,
        link: '',
        image: '',
        attachmentName: '',
        reminderEnabled: true,
        reminderType: 'day',
        reminderHours: 24,
        lastReminderDate: '',
        lastReminderKey: '',
        createdAt: Date.now(),
      },
      {
        id: generateId(),
        title: 'חזרה למבחן בסטטיסטיקה',
        category: 'סטטיסטיקה',
        due: addDays(1),
        urgency: 3,
        difficulty: 2,
        done: false,
        link: '',
        image: '',
        attachmentName: '',
        reminderEnabled: true,
        reminderType: 'hours',
        reminderHours: 6,
        lastReminderDate: '',
        lastReminderKey: '',
        createdAt: Date.now(),
      },
      {
        id: generateId(),
        title: 'להעלות פרויקט ל-Netlify',
        category: 'פייתון',
        due: addDays(3),
        urgency: 2,
        difficulty: 2,
        done: false,
        link: 'https://www.netlify.com/',
        image: '',
        attachmentName: '',
        reminderEnabled: false,
        lastReminderDate: '',
        createdAt: Date.now(),
      },
      {
        id: generateId(),
        title: 'לסיים סיכום בפייתון',
        category: 'פייתון',
        due: addDays(7),
        urgency: 1,
        difficulty: 2,
        done: false,
        link: '',
        image: '',
        attachmentName: '',
        reminderEnabled: false,
        lastReminderDate: '',
        createdAt: Date.now(),
      },
      {
        id: generateId(),
        title: 'לקרוא מאמר לניהול',
        category: 'ניהול',
        due: addDays(5),
        urgency: 1,
        difficulty: 1,
        done: true,
        link: '',
        image: '',
        attachmentName: '',
        reminderEnabled: false,
        lastReminderDate: '',
        createdAt: Date.now(),
      },
    ],
    exams: [
      {
        id: generateId(),
        course: 'אלגוריתמים',
        title: 'מבחן באלגוריתמים',
        date: addDays(10),
        examType: 'a',
        files: [],
        createdAt: Date.now(),
      },
      {
        id: generateId(),
        course: 'סטטיסטיקה',
        title: 'מבחן בסטטיסטיקה',
        date: addDays(18),
        examType: 'b',
        files: [],
        createdAt: Date.now(),
      },
      {
        id: generateId(),
        course: 'פייתון',
        title: 'מבחן בפייתון',
        date: addDays(25),
        examType: 'special',
        files: [],
        createdAt: Date.now(),
      },
    ],
    scheduleCourses: [],
    friends: [
      {
        id: generateId(),
        name: 'Maya',
        image: '',
        totalTasks: 10,
        completedTasks: 7,
        createdAt: Date.now(),
      },
      {
        id: generateId(),
        name: 'Daniel',
        image: '',
        totalTasks: 8,
        completedTasks: 3,
        createdAt: Date.now(),
      },
      {
        id: generateId(),
        name: 'Noa',
        image: '',
        totalTasks: 12,
        completedTasks: 9,
        createdAt: Date.now(),
      },
    ],
  };
}

function loadPreviewWorkspace() {
  const previewData = buildPreviewWorkspaceData();

  categories = normalizeCategoriesList(previewData.categories);
  tasks = previewData.tasks.map(normalizeTask);
  exams = previewData.exams.map(normalizeExam);
  friends = previewData.friends.map((friend, index) => normalizeFriend(friend, index));
  syncFriendsOrder();
  scheduleCourses = (previewData.scheduleCourses || []).map(normalizeScheduleCourse);

  activeCategory = CATEGORY_ALL_ID;
  activeStatus = 'all';

  saveData();
  normalizeActiveCategory();
  renderCategories();
  renderTasks();
  renderExams();
  renderSchedule();
  renderFriends();
  renderStatsWidget();
  refreshCalendarIfOpen();
}

function ensurePreviewUser() {
  const existing = users.find((user) => user.id === PREVIEW_USER_ID);
  if (existing) return existing;

  const previewUser = normalizeUser({
    id: PREVIEW_USER_ID,
    firstName: 'Preview',
    lastName: 'Workspace',
    email: 'preview@example.com',
    username: 'preview',
    passwordHash: '',
    salt: '',
    profileImage: '',
    createdAt: Date.now(),
    isPreview: true,
  });

  users.push(previewUser);
  saveUsers();
  return previewUser;
}

function showDashboardForCurrentUser() {
  if (els.authScreen) els.authScreen.hidden = true;
  if (els.dashboardApp) els.dashboardApp.hidden = false;
  syncAuthModeClass();
  renderUserProfile();
  updatePreviewSettingsUi();

  if (!dashboardInitialized) {
    loadWidgetPrefs();
    dashboardInitialized = true;
    checkReminders();
    if (!clockIntervalId) {
      clockIntervalId = setInterval(updateClock, 60000);
    }
  }

  switchView('tasks');
  applyLanguage();
}

function enterPreviewWorkspace() {
  ensurePreviewUser();
  setCurrentUserId(PREVIEW_USER_ID);
  loadPreviewWorkspace();
  showDashboardForCurrentUser();
}

function resetPreviewWorkspace() {
  if (!isPreviewUser()) return;
  loadPreviewWorkspace();
  populateSettingsForm();
  renderUserProfile();
}

function updatePreviewSettingsUi() {
  const preview = isPreviewUser();
  if (els.resetPreviewWorkspaceBtn) els.resetPreviewWorkspaceBtn.hidden = !preview;
  if (els.settingsDeleteAccountBtn) els.settingsDeleteAccountBtn.hidden = preview;
}

function loadUsers() {
  try {
    const saved = localStorage.getItem(USERS_KEY);
    users = saved ? JSON.parse(saved).map(normalizeUser) : [];
  } catch {
    users = [];
  }
}

function saveUsers() {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function normalizeUser(user) {
  return {
    id: user.id || generateId(),
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    username: user.username || '',
    passwordHash: user.passwordHash || '',
    salt: user.salt || '',
    profileImage: user.profileImage || '',
    createdAt: user.createdAt || Date.now(),
    isPreview: !!user.isPreview || user.id === PREVIEW_USER_ID,
  };
}

function getCurrentUserId() {
  return localStorage.getItem(CURRENT_USER_KEY) || '';
}

function setCurrentUserId(id) {
  localStorage.setItem(CURRENT_USER_KEY, id);
}

function clearCurrentUserId() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

function findUserByUsername(username) {
  const key = username.trim().toLowerCase();
  return users.find((user) => user.username.trim().toLowerCase() === key);
}

function findUserById(id) {
  return users.find((user) => user.id === id);
}

function getCurrentUser() {
  const id = getCurrentUserId();
  return id ? findUserById(id) : null;
}

function isLoggedIn() {
  return !!getCurrentUser();
}

function showAuthScreen() {
  if (els.authScreen) els.authScreen.hidden = false;
  if (els.dashboardApp) els.dashboardApp.hidden = true;
  showLoginPanel();
  syncAuthModeClass();
}

function showLoginPanel() {
  if (els.loginPanel) els.loginPanel.hidden = false;
  if (els.signupPanel) els.signupPanel.hidden = true;
  if (els.loginError) {
    els.loginError.hidden = true;
    els.loginError.textContent = '';
  }
}

function showSignupPanel() {
  if (els.loginPanel) els.loginPanel.hidden = true;
  if (els.signupPanel) els.signupPanel.hidden = false;
  if (els.signupError) {
    els.signupError.hidden = true;
    els.signupError.textContent = '';
  }
}

function closeDashboardModals() {
  closeAppearancePanel();
  closeSettingsModal();
  if (els.reminderSheetOverlay && !els.reminderSheetOverlay.hidden) closeReminderSheet();
  if (els.calendarModalOverlay && !els.calendarModalOverlay.hidden) closeCalendarModal();
  if (els.taskModalOverlay && !els.taskModalOverlay.hidden) closeTaskModal();
  if (els.examModalOverlay && !els.examModalOverlay.hidden) closeExamModal();
  if (els.friendModalOverlay && !els.friendModalOverlay.hidden) closeFriendModal();
  if (els.scheduleCourseModalOverlay && !els.scheduleCourseModalOverlay.hidden) {
    closeScheduleCourseModal();
  }
  syncModalOpenClass();
}

function isAnyModalOpen() {
  return (
    (els.settingsModalOverlay && !els.settingsModalOverlay.hidden) ||
    (els.taskModalOverlay && !els.taskModalOverlay.hidden) ||
    (els.reminderSheetOverlay && !els.reminderSheetOverlay.hidden) ||
    (els.examModalOverlay && !els.examModalOverlay.hidden) ||
    (els.friendModalOverlay && !els.friendModalOverlay.hidden) ||
    (els.scheduleCourseModalOverlay && !els.scheduleCourseModalOverlay.hidden) ||
    (els.calendarModalOverlay && !els.calendarModalOverlay.hidden)
  );
}

function syncModalOpenClass() {
  const modalOpen = isAnyModalOpen();
  document.body.classList.toggle('modal-open', modalOpen);
  const inAuthMode = !!(els.authScreen && !els.authScreen.hidden);
  if (els.dockNav) {
    els.dockNav.hidden = inAuthMode;
    els.dockNav.inert = inAuthMode || modalOpen;
    els.dockNav.setAttribute('aria-hidden', inAuthMode || modalOpen ? 'true' : 'false');
  }
  if (els.fabAdd) {
    els.fabAdd.inert = inAuthMode || modalOpen;
  }
  updateFabVisibility();
}

function syncAuthModeClass() {
  const inAuthMode = !!(els.authScreen && !els.authScreen.hidden);
  document.body.classList.toggle('auth-mode', inAuthMode);
  if (els.dockNav) {
    els.dockNav.hidden = inAuthMode;
    els.dockNav.setAttribute('aria-hidden', inAuthMode ? 'true' : 'false');
    els.dockNav.inert = inAuthMode;
  }
  if (els.fabAdd) {
    els.fabAdd.inert = inAuthMode;
  }
  updateFabVisibility();
}

function finishAppBoot() {
  document.documentElement.classList.remove('app-booting');
}

function updateFabVisibility() {
  const inAuthMode = !!(els.authScreen && !els.authScreen.hidden);
  const modalOpen = isAnyModalOpen();
  if (!els.fabAdd) return;
  els.fabAdd.hidden = inAuthMode || modalOpen || activeView === 'schedule';
}

function renderUserProfile() {
  const user = getCurrentUser();
  if (!user || !els.userFirstName) return;

  if (isPreviewUser(user)) {
    els.userFirstName.textContent = t('previewUser');
    els.userLastName.textContent = '';
  } else {
    els.userFirstName.textContent = user.firstName;
    els.userLastName.textContent = user.lastName;
  }

  const initial = isPreviewUser(user)
    ? t('previewUser').charAt(0).toUpperCase()
    : (user.firstName.charAt(0) + user.lastName.charAt(0)).toUpperCase() || '?';
  if (els.userProfileInitial) els.userProfileInitial.textContent = initial;

  if (user.profileImage && els.userProfileImage) {
    els.userProfileImage.src = user.profileImage;
    els.userProfileImage.hidden = false;
    if (els.userProfileInitial) els.userProfileInitial.hidden = true;
  } else if (els.userProfileImage) {
    els.userProfileImage.removeAttribute('src');
    els.userProfileImage.hidden = true;
    if (els.userProfileInitial) els.userProfileInitial.hidden = false;
  }
}

function enterDashboard() {
  if (els.authScreen) els.authScreen.hidden = true;
  if (els.dashboardApp) els.dashboardApp.hidden = false;
  syncAuthModeClass();
  renderUserProfile();
  updatePreviewSettingsUi();

  if (!dashboardInitialized) {
    loadData();
    loadWidgetPrefs();
    dashboardInitialized = true;
    checkReminders();
    if (!clockIntervalId) {
      clockIntervalId = setInterval(updateClock, 60000);
    }
  }

  switchView('tasks');
  applyLanguage();
}

function logout() {
  clearCurrentUserId();
  closeDashboardModals();
  if (els.loginForm) els.loginForm.reset();
  clearSignupForm();
  showAuthScreen();
  applyLanguage();
}

function clearSignupImagePreview() {
  pendingSignupProfileImage = '';
  if (els.signupProfileImage) els.signupProfileImage.value = '';
  if (els.signupImagePreview) els.signupImagePreview.hidden = true;
  if (els.signupImagePreviewImg) els.signupImagePreviewImg.removeAttribute('src');
}

function clearSignupForm() {
  if (els.signupForm) els.signupForm.reset();
  clearSignupImagePreview();
  if (els.signupError) {
    els.signupError.hidden = true;
    els.signupError.textContent = '';
  }
}

function showSignupImagePreview(src) {
  if (!els.signupImagePreview || !els.signupImagePreviewImg) return;
  els.signupImagePreviewImg.src = src;
  els.signupImagePreview.hidden = false;
}

async function handleLogin(e) {
  e.preventDefault();
  if (!els.loginForm || !els.loginError) return;
  const form = els.loginForm;
  if (!startFormSubmit(form)) return;
  const submitBtn = form.querySelector('button[type="submit"]');

  try {
    els.loginError.hidden = true;
    els.loginError.textContent = '';

    const username = els.loginUsername.value.trim();
    const password = els.loginPassword.value;

    if (!username || !password) {
      els.loginError.textContent = t('authRequiredField');
      els.loginError.hidden = false;
      return;
    }

    const user = findUserByUsername(username);
    if (!user) {
      els.loginError.textContent = t('authWrongCredentials');
      els.loginError.hidden = false;
      return;
    }

    const hash = await hashPassword(password, user.salt);
    if (hash !== user.passwordHash) {
      els.loginError.textContent = t('authWrongCredentials');
      els.loginError.hidden = false;
      return;
    }

    setCurrentUserId(user.id);
    form.reset();
    enterDashboard();
  } catch (error) {
    console.error(error);
  } finally {
    resetFormSubmit(form, submitBtn);
  }
}

async function handleSignup(e) {
  e.preventDefault();
  if (!els.signupForm || !els.signupError) return;
  const form = els.signupForm;
  if (!startFormSubmit(form)) return;
  const submitBtn = form.querySelector('button[type="submit"]');

  try {
    els.signupError.hidden = true;
    els.signupError.textContent = '';

    const firstName = els.signupFirstName.value.trim();
    const lastName = els.signupLastName.value.trim();
    const email = els.signupEmail.value.trim();
    const username = els.signupUsername.value.trim();
    const password = els.signupPassword.value;

    if (!firstName || !lastName || !email || !username || !password) {
      els.signupError.textContent = t('authRequiredField');
      els.signupError.hidden = false;
      return;
    }

    if (findUserByUsername(username)) {
      els.signupError.textContent = t('authUsernameExists');
      els.signupError.hidden = false;
      return;
    }

    let profileImage = pendingSignupProfileImage;
    if (!profileImage && els.signupProfileImage?.files[0]) {
      try {
        profileImage = await resolveFriendImageFromFile(els.signupProfileImage, '');
      } catch (err) {
        els.signupError.textContent = err.message;
        els.signupError.hidden = false;
        return;
      }
    }

    const salt = generateSalt();
    const passwordHash = await hashPassword(password, salt);

    const user = normalizeUser({
      id: generateId(),
      firstName,
      lastName,
      email,
      username,
      passwordHash,
      salt,
      profileImage: profileImage || '',
      createdAt: Date.now(),
    });

    users.push(user);
    saveUsers();
    setCurrentUserId(user.id);
    clearSignupForm();
    enterDashboard();
  } catch (error) {
    console.error(error);
  } finally {
    resetFormSubmit(form, submitBtn);
  }
}

function initAuth() {
  loadUsers();
  const user = getCurrentUser();
  if (user) {
    enterDashboard();
  } else {
    if (getCurrentUserId()) clearCurrentUserId();
    showAuthScreen();
    applyLanguage();
  }
  finishAppBoot();
}

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      tasks = (data.tasks || []).map(normalizeTask);
      const rawFriends = data.friends || [];
      const needsActivity = rawFriends.some((friend) => !friend.activity?.length);
      friends = rawFriends.map((friend, index) => normalizeFriend(friend, index));
      syncFriendsOrder();
      if (needsActivity) saveData();
      exams = (data.exams || []).map(normalizeExam);
      scheduleCourses = (data.scheduleCourses || []).map(normalizeScheduleCourse);
      categories = normalizeCategoriesList(
        data.categories?.length ? data.categories : [...DEFAULT_CATEGORIES]
      );
      normalizeActiveCategory();
      return;
    }
  } catch {
    /* fall through */
  }
  migrateLegacyData();
}

function normalizeTask(task) {
  const { type, hours } = resolveReminderFields(task);
  return {
    id: task.id || generateId(),
    title: task.title || '',
    category: task.category || getDefaultCategoryName(),
    due: task.due || '',
    urgency: Number(task.urgency) || 2,
    difficulty: Number(task.difficulty) || 2,
    done: !!task.done,
    link: task.link || '',
    image: task.image || '',
    attachmentName: task.attachmentName || '',
    reminderEnabled: !!task.reminderEnabled,
    reminderType: type,
    reminderHours: hours,
    lastReminderDate: task.lastReminderDate || '',
    lastReminderKey: task.lastReminderKey || '',
    createdAt: task.createdAt || Date.now(),
  };
}

function resolveReminderFields(task) {
  const enabled = !!task.reminderEnabled;
  let type = task.reminderType;
  let hours = Number(task.reminderHours);

  if (enabled && !type) {
    type = 'day';
    hours = 24;
  }

  if (!type) type = 'day';
  if (!['hours', 'day', 'week'].includes(type)) type = 'day';

  if (type === 'hours') {
    if (!REMINDER_HOUR_OPTIONS.includes(hours)) hours = REMINDER_HOUR_OPTIONS[0];
  } else if (!Number.isFinite(hours) || hours <= 0) {
    hours = 24;
  }

  return { type, hours };
}

function getReminderDescription(type, hours) {
  if (type === 'week') return t('reminderOneWeekBefore');
  if (type === 'day') return t('reminderOneDayBefore');
  return t('reminderHoursBadge')(hours);
}

function getReminderBadgeText(task) {
  if (!task.reminderEnabled) return '';
  const type = task.reminderType || 'day';
  return `${t('reminderBeforeBadge')}: ${getReminderDescription(type, task.reminderHours)}`;
}

function getReminderSummaryText(type, hours) {
  return getReminderDescription(type, hours);
}

function getTaskDueDateTime(dueStr) {
  if (!dueStr) return null;
  const [y, m, d] = dueStr.split('-').map(Number);
  return new Date(y, m - 1, d, 23, 59, 0, 0);
}

function getReminderTriggerKey(task) {
  if (!task.due || task.done || !task.reminderEnabled) return null;

  const type = task.reminderType || 'day';
  const hours = task.reminderHours || REMINDER_HOUR_OPTIONS[0];

  if (type === 'week') {
    if (daysUntil(task.due) !== 7) return null;
    return `week-${task.due}`;
  }

  if (type === 'day') {
    if (daysUntil(task.due) !== 1) return null;
    return `day-${task.due}`;
  }

  const dueAt = getTaskDueDateTime(task.due);
  if (!dueAt) return null;

  const msUntilDue = dueAt.getTime() - Date.now();
  if (msUntilDue <= 0) return null;

  const thresholdMs = hours * 60 * 60 * 1000;
  if (msUntilDue > thresholdMs) return null;

  return `hours-${task.due}-${hours}`;
}

function wasReminderAlreadySent(task, key) {
  if (task.lastReminderKey === key) return true;

  if (!task.lastReminderKey && task.lastReminderDate) {
    const type = task.reminderType || 'day';
    const today = todayKey();
    if (task.lastReminderDate !== today) return false;
    if (type === 'day' && key.startsWith('day-')) return true;
    if (type === 'week' && key.startsWith('week-')) return true;
  }

  return false;
}

function getReminderNotificationBody(task) {
  const type = task.reminderType || 'day';
  if (type === 'week') return t('notificationBodyWeek')(task.title);
  if (type === 'hours') return t('notificationBodyHours')(task.title, task.reminderHours);
  return t('notificationBody')(task.title);
}

function syncTaskReminderUI() {
  const enabled = els.taskReminder.checked;
  els.taskReminderSettingsBtn.hidden = !enabled;
  els.taskReminderSummary.hidden = !enabled;
  if (enabled) {
    els.taskReminderSummary.textContent = getReminderSummaryText(
      pendingReminder.type,
      pendingReminder.hours
    );
  } else {
    els.taskReminderSummary.textContent = '';
  }
}

function renderReminderPicker() {
  const { type, hours } = pendingReminder;

  document.querySelectorAll('.reminder-picker-option').forEach((btn) => {
    btn.classList.toggle('is-selected', btn.dataset.reminderType === type);
  });

  els.reminderHoursGrid.hidden = type !== 'hours';

  document.querySelectorAll('.reminder-hour-option').forEach((btn) => {
    const hourValue = Number(btn.dataset.reminderHours);
    btn.classList.toggle('is-selected', type === 'hours' && hourValue === hours);
    btn.setAttribute('data-hour-label', t('reminderHourUnit'));
    btn.setAttribute('aria-label', t('reminderHoursBadge')(hourValue));
  });
}

function openReminderSheet() {
  renderReminderPicker();
  els.reminderSheetOverlay.hidden = false;
  syncModalOpenClass();
}

function closeReminderSheet() {
  els.reminderSheetOverlay.hidden = true;
  syncModalOpenClass();
}

function resetPendingReminder() {
  pendingReminder = { type: 'day', hours: 24 };
}

function normalizeFriend(friend, fallbackOrder = 0) {
  const total = Math.max(0, Number(friend.totalTasks) || 0);
  const completed = Math.min(total, Math.max(0, Number(friend.completedTasks) || 0));
  let activity = Array.isArray(friend.activity)
    ? friend.activity.map(normalizeFriendActivityEntry).filter((entry) => entry.date)
    : [];
  if (!activity.length) activity = generateFakeFriendActivity();

  const streak = Number.isFinite(Number(friend.streak))
    ? Math.max(0, Number(friend.streak))
    : calculateFriendStreak(activity);
  const status = FRIEND_STATUSES.includes(friend.status) ? friend.status : pickRandomFriendStatus();
  const order = Number.isFinite(Number(friend.order)) ? Number(friend.order) : fallbackOrder;

  return {
    id: friend.id || generateId(),
    name: friend.name || '',
    image: friend.image || '',
    totalTasks: total,
    completedTasks: completed,
    createdAt: friend.createdAt || Date.now(),
    activity,
    streak,
    status,
    order,
  };
}

function syncFriendsOrder(persist = false) {
  friends.sort((a, b) => a.order - b.order);
  let changed = false;
  friends.forEach((friend, index) => {
    if (friend.order !== index) {
      friend.order = index;
      changed = true;
    }
  });
  if (persist && changed) saveData();
  return changed;
}

function getFriendsByDisplayOrder() {
  return [...friends].sort((a, b) => a.order - b.order);
}

function getFriendsLeaderboard() {
  return [...friends].sort((a, b) => friendProgress(b) - friendProgress(a));
}

function getFriendStatusLabel(status) {
  if (status === 'studying') return t('friendStatusStudying');
  if (status === 'offline') return t('friendStatusOffline');
  if (status === 'completed') return t('friendStatusCompleted');
  return '';
}

function renderFriendHeatmapHtml(friend) {
  const days = getFriendActivityDays(friend, FRIEND_ACTIVITY_DAYS);
  const cells = days
    .map((day) => {
      const level = getFriendHeatmapLevel(day.completed);
      const title = `${day.date}: ${day.completed}`;
      return `<span class="friend-heatmap-cell" data-level="${level}" title="${escapeHtml(title)}"></span>`;
    })
    .join('');
  return (
    `<div class="friend-heatmap-wrap">` +
      `<span class="friend-heatmap-label">${escapeHtml(t('friendRecentActivity'))}</span>` +
      `<div class="friend-heatmap" role="img" aria-label="${escapeHtml(t('friendRecentActivity'))}">` +
        `<div class="friend-heatmap-grid">${cells}</div>` +
      `</div>` +
    `</div>`
  );
}

function buildFriendActivityFeedItems() {
  const today = todayKey();
  const events = [];

  friends.forEach((friend) => {
    const todayEntry = friend.activity?.find((entry) => entry.date === today);
    const completedToday = todayEntry?.completed ?? 0;

    if (friend.status === 'studying') {
      events.push({
        key: `${friend.id}-studying`,
        text: t('friendFeedStudying')(friend.name),
        weight: 30 + friend.streak,
      });
    }

    if (completedToday > 0) {
      events.push({
        key: `${friend.id}-completed`,
        text: t('friendFeedCompleted')(friend.name, completedToday),
        weight: 40 + completedToday,
      });
    } else if (friend.status === 'completed') {
      const estimate = Math.max(1, Math.min(4, Math.round(friend.completedTasks / 3) || 1));
      events.push({
        key: `${friend.id}-completed-status`,
        text: t('friendFeedCompleted')(friend.name, estimate),
        weight: 35,
      });
    }

    if (friend.streak >= 2) {
      events.push({
        key: `${friend.id}-streak`,
        text: t('friendFeedStreak')(friend.name, friend.streak),
        weight: 20 + friend.streak,
      });
    }
  });

  return events
    .sort((a, b) => b.weight - a.weight || a.key.localeCompare(b.key))
    .slice(0, 5);
}

function reorderFriends(fromId, toId) {
  if (!fromId || !toId || fromId === toId) return;
  const ordered = getFriendsByDisplayOrder();
  const fromIndex = ordered.findIndex((friend) => friend.id === fromId);
  const toIndex = ordered.findIndex((friend) => friend.id === toId);
  if (fromIndex < 0 || toIndex < 0) return;

  const [moved] = ordered.splice(fromIndex, 1);
  ordered.splice(toIndex, 0, moved);
  ordered.forEach((friend, index) => {
    friend.order = index;
  });
  friends = ordered;
  saveData();
  renderFriends();
}

function setupFriendCardDrag(li, friend) {
  li.draggable = true;
  li.dataset.friendId = friend.id;

  li.addEventListener('dragstart', (e) => {
    if (e.target.closest('.icon-btn')) {
      e.preventDefault();
      return;
    }
    draggedFriendId = friend.id;
    li.classList.add('is-dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', friend.id);
  });

  li.addEventListener('dragend', () => {
    li.classList.remove('is-dragging');
    draggedFriendId = null;
    els.friendsList?.querySelectorAll('.friend-card').forEach((card) => {
      card.classList.remove('is-drag-over');
    });
  });

  li.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (draggedFriendId && draggedFriendId !== friend.id) {
      li.classList.add('is-drag-over');
    }
  });

  li.addEventListener('dragleave', () => {
    li.classList.remove('is-drag-over');
  });

  li.addEventListener('drop', (e) => {
    e.preventDefault();
    li.classList.remove('is-drag-over');
    const fromId = e.dataTransfer.getData('text/plain') || draggedFriendId;
    reorderFriends(fromId, friend.id);
  });

  li.querySelectorAll('.icon-btn').forEach((btn) => {
    btn.addEventListener('mousedown', (e) => e.stopPropagation());
  });
}

function normalizeExamFile(file) {
  const dataUrl = sanitizeUrl(file.dataUrl || file.data || '');
  const name = file.name || '';
  const type = file.type || getAttachmentKind(dataUrl, name);
  return {
    id: file.id || generateId(),
    name,
    type,
    dataUrl,
    createdAt: file.createdAt || Date.now(),
  };
}

function normalizeExam(exam) {
  const examType = EXAM_TYPES.includes(exam.examType) ? exam.examType : 'a';
  return {
    id: exam.id || generateId(),
    course: exam.course || '',
    title: exam.title || '',
    date: exam.date || '',
    examType,
    files: (exam.files || []).map(normalizeExamFile).filter((file) => file.dataUrl),
    createdAt: exam.createdAt || Date.now(),
  };
}

function migrateLegacyData() {
  categories = normalizeCategoriesList([...DEFAULT_CATEGORIES]);
  tasks = [];
  friends = [];
  exams = [];

  try {
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (!legacy) return;

    const oldTasks = JSON.parse(legacy);
    tasks = oldTasks.map((item) =>
      normalizeTask({
        id: item.id,
        title: item.title,
        category: item.course || item.category,
        due: item.due,
        urgency: item.urgency || (daysUntil(item.due) <= 2 ? 3 : 2),
        difficulty: item.difficulty,
        done: item.done,
        link: item.link,
        image: item.image,
        createdAt: item.createdAt,
      })
    );

    oldTasks.forEach((item) => {
      const cat = item.course || item.category;
      if (cat && !categories.includes(cat)) categories.push(cat);
    });
  } catch {
    tasks = [];
  }

  categories = normalizeCategoriesList(categories);
  normalizeActiveCategory();
}

function saveData() {
  categories = normalizeCategoriesList(categories);
  normalizeActiveCategory();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ tasks, friends, categories, exams, scheduleCourses })
  );
}

function saveLang() {
  localStorage.setItem(LANG_KEY, lang);
}

function saveTheme() {
  localStorage.setItem(THEME_KEY, themeMode);
}

function saveAccent() {
  localStorage.setItem(ACCENT_KEY, accentColor);
}

function applyTheme() {
  const validThemes = ['light', 'dark'];
  const validAccents = ['purple', 'pink', 'blue', 'green', 'orange'];
  if (!validThemes.includes(themeMode)) themeMode = 'light';
  if (!validAccents.includes(accentColor)) accentColor = 'blue';

  els.html.dataset.theme = themeMode;
  els.html.dataset.accent = accentColor;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = themeMode === 'dark' ? '#1a1a1a' : '#ffffff';

  if (els.appearanceIcon) {
    els.appearanceIcon.textContent = themeMode === 'dark' ? '☾' : '☀';
  }

  els.themeButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.theme === themeMode);
  });

  els.accentSwatches.forEach((swatch) => {
    swatch.classList.toggle('active', swatch.dataset.accent === accentColor);
  });
}

function setThemeMode(mode) {
  if (mode === themeMode) return;
  themeMode = mode;
  saveTheme();
  applyTheme();
}

function setAccentColor(accent) {
  if (accent === accentColor) return;
  accentColor = accent;
  saveAccent();
  applyTheme();
}

function toggleAppearancePanel(forceOpen, options = {}) {
  const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : els.appearancePanel.hidden;
  els.appearancePanel.hidden = !shouldOpen;
  els.appearanceBtn.setAttribute('aria-expanded', String(shouldOpen));
  els.appearancePanel.classList.toggle('is-dock-open', shouldOpen && options.fromDock);
}

function closeAppearancePanel() {
  if (!els.appearancePanel.hidden) toggleAppearancePanel(false);
}

function clearSettingsImagePreview() {
  if (els.settingsProfileImage) els.settingsProfileImage.value = '';
  if (els.settingsImagePreview) els.settingsImagePreview.hidden = true;
  if (els.settingsImagePreviewImg) els.settingsImagePreviewImg.removeAttribute('src');
}

function resetSettingsProfileImageState() {
  shouldRemoveSettingsProfileImage = false;
  pendingSettingsProfileImage = null;
  clearSettingsImagePreview();
}

function showSettingsImagePreview(src) {
  if (!els.settingsImagePreview || !els.settingsImagePreviewImg) return;
  els.settingsImagePreviewImg.src = src;
  els.settingsImagePreview.hidden = false;
}

function populateSettingsForm() {
  const user = getCurrentUser();
  if (!user) return;

  shouldRemoveSettingsProfileImage = false;
  pendingSettingsProfileImage = null;

  els.settingsFirstName.value = user.firstName;
  els.settingsLastName.value = user.lastName;

  if (user.profileImage) {
    showSettingsImagePreview(user.profileImage);
  } else {
    clearSettingsImagePreview();
  }

  if (els.settingsCurrentPassword) {
    els.settingsCurrentPassword.value = '';
    els.settingsCurrentPassword.type = 'password';
    const currentToggle = els.settingsCurrentPassword.parentElement?.querySelector('.password-toggle-btn');
    if (currentToggle) updatePasswordToggleState(currentToggle, els.settingsCurrentPassword);
  }
  if (els.settingsNewPassword) {
    els.settingsNewPassword.value = '';
    els.settingsNewPassword.type = 'password';
    const newToggle = els.settingsNewPassword.parentElement?.querySelector('.password-toggle-btn');
    if (newToggle) updatePasswordToggleState(newToggle, els.settingsNewPassword);
  }
  if (els.settingsProfileError) {
    els.settingsProfileError.hidden = true;
    els.settingsProfileError.textContent = '';
    els.settingsProfileError.classList.remove('form-success');
  }
  if (els.settingsPasswordError) {
    els.settingsPasswordError.hidden = true;
    els.settingsPasswordError.textContent = '';
  }
}

function resetSettingsModalScroll() {
  if (!els.settingsModalOverlay) return;

  els.settingsModalOverlay.scrollTop = 0;

  const modal = els.settingsModalOverlay.querySelector('.modal');
  if (modal) modal.scrollTop = 0;

  const body = els.settingsModalOverlay.querySelector('.settings-modal-body');
  if (body) body.scrollTop = 0;
}

function openSettingsModal() {
  closeAppearancePanel();
  populateSettingsForm();
  updatePreviewSettingsUi();
  if (els.settingsModalOverlay) els.settingsModalOverlay.hidden = false;
  if (els.dockSettingsBtn) {
    els.dockSettingsBtn.classList.add('active');
    els.dockSettingsBtn.setAttribute('aria-expanded', 'true');
  }
  syncModalOpenClass();
  resetSettingsModalScroll();
  requestAnimationFrame(() => {
    resetSettingsModalScroll();
  });
}

function closeSettingsModal() {
  if (els.settingsModalOverlay) els.settingsModalOverlay.hidden = true;
  if (els.dockSettingsBtn) {
    els.dockSettingsBtn.classList.remove('active');
    els.dockSettingsBtn.setAttribute('aria-expanded', 'false');
  }
  resetSettingsProfileImageState();
  if (els.settingsPasswordForm) els.settingsPasswordForm.reset();
  clearFormSubmitState(els.settingsProfileForm);
  clearFormSubmitState(els.settingsPasswordForm);
  resetSettingsModalScroll();
  syncModalOpenClass();
}

async function saveSettingsProfile(e) {
  e.preventDefault();
  const form = els.settingsProfileForm;
  const user = getCurrentUser();
  if (!form || !user || !els.settingsProfileError) return;
  if (!startFormSubmit(form)) return;
  const submitBtn = form.querySelector('button[type="submit"]');

  try {
    els.settingsProfileError.hidden = true;
    els.settingsProfileError.textContent = '';
    els.settingsProfileError.classList.remove('form-success');

    const firstName = els.settingsFirstName.value.trim();
    const lastName = els.settingsLastName.value.trim();

    if (!firstName || !lastName) {
      els.settingsProfileError.textContent = t('authRequiredField');
      els.settingsProfileError.hidden = false;
      return;
    }

    if (shouldRemoveSettingsProfileImage) {
      user.profileImage = '';
    } else if (pendingSettingsProfileImage !== null) {
      user.profileImage = pendingSettingsProfileImage;
    } else if (els.settingsProfileImage?.files[0]) {
      user.profileImage = await resolveFriendImageFromFile(els.settingsProfileImage, '');
    }

    user.firstName = firstName;
    user.lastName = lastName;
    saveUsers();
    renderUserProfile();
    shouldRemoveSettingsProfileImage = false;
    pendingSettingsProfileImage = null;
    els.settingsProfileError.textContent = t('settingsProfileSaved');
    els.settingsProfileError.hidden = false;
    els.settingsProfileError.classList.add('form-success');
  } catch (error) {
    console.error(error);
    if (error?.message) {
      els.settingsProfileError.textContent = error.message;
      els.settingsProfileError.hidden = false;
      els.settingsProfileError.classList.remove('form-success');
    }
  } finally {
    resetFormSubmit(form, submitBtn);
  }
}

async function changeSettingsPassword(e) {
  e.preventDefault();
  const form = els.settingsPasswordForm;
  const user = getCurrentUser();
  if (!form || !user || !els.settingsPasswordError) return;
  if (!startFormSubmit(form)) return;
  const submitBtn = form.querySelector('button[type="submit"]');

  try {
    els.settingsPasswordError.hidden = true;
    els.settingsPasswordError.textContent = '';
    els.settingsPasswordError.classList.remove('form-success');

    const currentPassword = els.settingsCurrentPassword.value;
    const newPassword = els.settingsNewPassword.value;

    if (!currentPassword || !newPassword) {
      els.settingsPasswordError.textContent = t('authRequiredField');
      els.settingsPasswordError.hidden = false;
      return;
    }

    const currentHash = await hashPassword(currentPassword, user.salt);
    if (currentHash !== user.passwordHash) {
      els.settingsPasswordError.textContent = t('authWrongCurrentPassword');
      els.settingsPasswordError.hidden = false;
      return;
    }

    const salt = generateSalt();
    user.salt = salt;
    user.passwordHash = await hashPassword(newPassword, salt);
    saveUsers();

    form.reset();
    els.settingsPasswordError.textContent = t('settingsPasswordUpdated');
    els.settingsPasswordError.classList.add('form-success');
    els.settingsPasswordError.hidden = false;
  } catch (error) {
    console.error(error);
  } finally {
    resetFormSubmit(form, submitBtn);
  }
}

function deleteAccount() {
  const user = getCurrentUser();
  if (!user) return;

  const displayName = `${user.firstName} ${user.lastName}`.trim() || user.username;
  if (!confirm(t('confirmDeleteAccount')(displayName))) return;

  users = users.filter((item) => item.id !== user.id);
  saveUsers();
  closeSettingsModal();
  logout();
}

async function handleDeleteAccountClick() {
  await runGuardedAction(els.settingsDeleteAccountBtn, () => deleteAccount());
}

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function daysUntil(dueStr) {
  if (!dueStr) return Infinity;
  const today = startOfDay(getTodayLocalDate());
  const dueDate = parseLocalDate(dueStr);
  if (!dueDate) return Infinity;
  const due = startOfDay(dueDate);
  return Math.ceil((due - today) / (1000 * 60 * 60 * 24));
}

function isDueToday(dueStr) {
  return daysUntil(dueStr) === 0;
}

function isDueThisWeek(dueStr) {
  const days = daysUntil(dueStr);
  return days >= 0 && days <= 6;
}

function isTaskUrgent(task) {
  if (task.done) return false;
  return Number(task.urgency) === 3 || daysUntil(task.due) <= 1;
}

function sortTasks(list) {
  return [...list].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    const urgDiff = Number(b.urgency) - Number(a.urgency);
    if (urgDiff !== 0) return urgDiff;
    const hasA = !!a.due;
    const hasB = !!b.due;
    if (hasA !== hasB) return hasA ? -1 : 1;
    if (hasA && hasB) {
      const daysA = daysUntil(a.due);
      const daysB = daysUntil(b.due);
      if (daysA !== daysB) return daysA - daysB;
    }
    return (b.createdAt || 0) - (a.createdAt || 0);
  });
}

function filterTasks(list) {
  return list.filter((task) => {
    if (activeCategory !== CATEGORY_ALL_ID && task.category !== activeCategory) return false;

    switch (activeStatus) {
      case 'all':
        return !task.done;
      case 'urgent':
        return !task.done && isTaskUrgent(task);
      case 'today':
        return !task.done && isDueToday(task.due);
      case 'week':
        return !task.done && isDueThisWeek(task.due);
      case 'done':
        return task.done;
      default:
        return true;
    }
  });
}

function syncFilterActiveButton() {
  if (!els.filterBar) return;
  els.filterBar.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.status === activeStatus);
  });
}

function updateFilterIndicator() {
  if (!els.filterBar) return;

  syncFilterActiveButton();

  const indicator = els.filterBar.querySelector('.filter-indicator');
  const activeBtn = els.filterBar.querySelector('.filter-btn.active');
  if (!indicator || !activeBtn) {
    if (indicator) indicator.style.opacity = '0';
    return;
  }

  const barRect = els.filterBar.getBoundingClientRect();
  const btnRect = activeBtn.getBoundingClientRect();
  const x = btnRect.left - barRect.left;
  const y = btnRect.top - barRect.top;
  const width = btnRect.width;
  const height = btnRect.height;

  els.filterBar.style.setProperty('--filter-indicator-x', `${x}px`);
  els.filterBar.style.setProperty('--filter-indicator-y', `${y}px`);
  els.filterBar.style.setProperty('--filter-indicator-width', `${width}px`);
  els.filterBar.style.setProperty('--filter-indicator-height', `${height}px`);
  indicator.style.opacity = '1';
}

function friendProgress(friend) {
  if (!friend.totalTasks) return 0;
  return Math.round((friend.completedTasks / friend.totalTasks) * 100);
}

function formatDateDDMMYYYY(dateStr) {
  if (!dateStr) return '';
  const parts = String(dateStr).split('-');
  if (parts.length < 3) return dateStr;
  const y = Number(parts[0]);
  const m = Number(parts[1]);
  const d = Number(parts[2]);
  if (!y || !m || !d) return dateStr;
  return `${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}/${y}`;
}

function formatDateFromDate(date) {
  return formatDateDDMMYYYY(
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  );
}

function formatDate(dateStr) {
  if (!dateStr) return t('noDueDate');
  return formatDateDDMMYYYY(dateStr);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function sanitizeUrl(url) {
  if (!url) return '';
  if (url.startsWith('data:image/')) return url;
  if (url.startsWith('data:application/pdf')) return url;
  if (url.startsWith('data:application/msword')) return url;
  if (url.startsWith('data:application/vnd.openxmlformats-officedocument')) return url;
  if (url.startsWith('data:application/vnd.ms-powerpoint')) return url;
  try {
    const parsed = new URL(url.includes('://') ? url : `https://${url}`);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') return parsed.href;
  } catch {
    return '';
  }
  return '';
}

function getFileExtension(name) {
  if (!name) return '';
  const dot = name.lastIndexOf('.');
  return dot >= 0 ? name.slice(dot).toLowerCase() : '';
}

function isAllowedTaskFile(file) {
  if (!file) return false;
  if (file.type.startsWith('image/')) return true;
  if (ALLOWED_TASK_MIMES.has(file.type)) return true;
  return ALLOWED_TASK_EXTENSIONS.includes(getFileExtension(file.name));
}

function isImageAttachment(dataUrl) {
  return typeof dataUrl === 'string' && dataUrl.startsWith('data:image/');
}

function getAttachmentKind(dataUrl, fileName) {
  if (!dataUrl) return 'file';
  if (isImageAttachment(dataUrl)) return 'image';

  const mime = dataUrl.slice(5, dataUrl.indexOf(';')).toLowerCase();
  if (mime === 'application/pdf') return 'pdf';
  if (mime.includes('wordprocessingml') || mime === 'application/msword') return 'word';
  if (mime.includes('presentationml') || mime === 'application/vnd.ms-powerpoint') return 'ppt';

  const ext = getFileExtension(fileName);
  if (ext === '.pdf') return 'pdf';
  if (ext === '.doc' || ext === '.docx') return 'word';
  if (ext === '.ppt' || ext === '.pptx') return 'ppt';
  return 'file';
}

function getFileTypeLabel(kind) {
  switch (kind) {
    case 'pdf':
      return t('fileTypePdf');
    case 'word':
      return t('fileTypeWord');
    case 'ppt':
      return t('fileTypePpt');
    default:
      return t('fileTypeFile');
  }
}

function getAttachmentDisplayName(task) {
  if (task.attachmentName) return task.attachmentName;
  const kind = getAttachmentKind(task.image, '');
  if (kind === 'pdf') return 'document.pdf';
  if (kind === 'word') return 'document.docx';
  if (kind === 'ppt') return 'document.pptx';
  return t('fileTypeFile');
}

function getExamTypeLabel(typeKey) {
  return t('examType')[typeKey] || typeKey;
}

function sortExams(list) {
  const today = todayKey();
  const upcoming = list.filter((exam) => exam.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const past = list.filter((exam) => exam.date < today).sort((a, b) => b.date.localeCompare(a.date));
  return [...upcoming, ...past];
}

function isExamPast(exam) {
  return exam.date < todayKey();
}

async function createAttachmentFromFile(file) {
  if (file.size > MAX_FILE_BYTES) throw new Error(t('errImageSize'));
  if (!isAllowedTaskFile(file)) throw new Error(t('errImageType'));
  const dataUrl = await readFileAsDataURL(file);
  return normalizeExamFile({
    id: generateId(),
    name: file.name,
    type: getAttachmentKind(dataUrl, file.name),
    dataUrl,
    createdAt: Date.now(),
  });
}

function renderStoredFileHtml(file, options = {}) {
  const dataUrl = sanitizeUrl(file.dataUrl);
  if (!dataUrl) return '';
  const kind = file.type || getAttachmentKind(dataUrl, file.name);
  const rawName = file.name || t('fileTypeFile');
  if (kind === 'image') {
    return (
      `<a href="${escapeHtml(dataUrl)}" class="task-attachment-image" target="_blank" rel="noopener noreferrer" download="${escapeHtml(rawName)}">` +
        `<img src="${escapeHtml(dataUrl)}" alt="${escapeHtml(rawName)}" loading="lazy">` +
      `</a>`
    );
  }
  const displayName = escapeHtml(rawName);
  const typeLabel = escapeHtml(getFileTypeLabel(kind));
  return (
    `<a href="${escapeHtml(dataUrl)}" class="task-attachment-file" target="_blank" rel="noopener noreferrer" download="${escapeHtml(rawName)}">` +
      `<span class="task-attachment-file-icon" aria-hidden="true">📄</span>` +
      `<span class="task-attachment-file-body">` +
        `<span class="task-attachment-file-name">${displayName}</span>` +
        `<span class="task-attachment-file-type">${typeLabel}</span>` +
      `</span>` +
    `</a>`
  );
}

function renderExamFilesHtml(files) {
  if (!files.length) return '';
  return (
    `<div class="exam-files">` +
      files.map((file) => renderStoredFileHtml(file)).join('') +
    `</div>`
  );
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function requestNotificationPermission() {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;
  const result = await Notification.requestPermission();
  return result === 'granted';
}

function checkReminders() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  let changed = false;

  tasks.forEach((task) => {
    const reminderKey = getReminderTriggerKey(task);
    if (!reminderKey) return;
    if (wasReminderAlreadySent(task, reminderKey)) return;

    new Notification(t('notificationTitle'), {
      body: getReminderNotificationBody(task),
      tag: `reminder-${task.id}-${reminderKey}`,
    });

    task.lastReminderKey = reminderKey;
    task.lastReminderDate = todayKey();
    changed = true;
  });

  if (changed) saveData();
}

function applyLanguage() {
  const isHe = lang === 'he';
  els.html.lang = isHe ? 'he' : 'en';
  els.html.dir = isHe ? 'rtl' : 'ltr';
  document.title = t('pageTitle');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (i18n[lang][key]) el.setAttribute('aria-label', i18n[lang][key]);
  });

  els.imagePreviewImg.alt = t('previewAlt');
  els.friendImagePreviewImg.alt = t('previewAlt');
  if (els.signupImagePreviewImg) els.signupImagePreviewImg.alt = t('previewAlt');
  if (els.settingsImagePreviewImg) els.settingsImagePreviewImg.alt = t('previewAlt');
  els.settingsModalClose?.setAttribute('aria-label', t('closeLabel'));
  els.taskModalClose.setAttribute('aria-label', t('closeLabel'));
  els.friendModalClose.setAttribute('aria-label', t('closeLabel'));
  els.examModalClose.setAttribute('aria-label', t('closeLabel'));
  els.scheduleCourseModalClose?.setAttribute('aria-label', t('closeLabel'));
  els.statsRemoveBtn.setAttribute('aria-label', t('statsRemove'));
  els.calendarModalClose.setAttribute('aria-label', t('closeLabel'));
  els.reminderSheetClose?.setAttribute('aria-label', t('closeLabel'));
  els.taskReminderSettingsBtn?.setAttribute('aria-label', t('reminderSettings'));
  els.newCategory.placeholder = lang === 'he' ? 'שם קורס חדש' : 'New category name';
  updateFabLabel();

  if (els.reminderSheetOverlay && !els.reminderSheetOverlay.hidden) renderReminderPicker();
  syncTaskReminderUI();
  initAllPasswordToggles();

  els.langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  populateSelects();
  populateExamTypeSelect();
  renderExamCourseDatalist();
  initScheduleTimePickers();
  updateClock();

  if (isLoggedIn() && els.dashboardApp && !els.dashboardApp.hidden) {
    statsWidgetMode = null;
    categories = normalizeCategoriesList(categories);
    normalizeActiveCategory();
    renderCategories();
    renderTasks();
    renderExams();
    renderSchedule();
    renderFriends();
    renderStatsWidget();
    renderUserProfile();
    refreshCalendarIfOpen();
    requestAnimationFrame(() => {
      requestAnimationFrame(updateFilterIndicator);
    });
  }
}

function populateSelects() {
  const urgencyPlaceholder = `<option value="" disabled selected hidden>${escapeHtml(t('urgencyPlaceholder'))}</option>`;
  const difficultyPlaceholder = `<option value="" disabled selected hidden>${escapeHtml(t('difficultyPlaceholder'))}</option>`;
  els.taskUrgency.innerHTML =
    urgencyPlaceholder +
    [1, 2, 3].map((v) => `<option value="${v}">${escapeHtml(t('urgency')[v])}</option>`).join('');
  els.taskDifficulty.innerHTML =
    difficultyPlaceholder +
    [1, 2, 3].map((v) => `<option value="${v}">${escapeHtml(t('difficulty')[v])}</option>`).join('');
}

function populateExamTypeSelect() {
  if (!els.examType) return;
  els.examType.innerHTML = EXAM_TYPES.map(
    (key) => `<option value="${key}">${escapeHtml(getExamTypeLabel(key))}</option>`
  ).join('');
}

function renderExamCourseDatalist() {
  if (!els.examCourseList) return;
  els.examCourseList.innerHTML = categories
    .map((c) => `<option value="${escapeHtml(c)}"></option>`)
    .join('');
}

function updateFabLabel() {
  updateFabVisibility();
  if (!els.fabAdd || els.fabAdd.hidden) return;
  const label =
    activeView === 'tasks' ? t('fabTask') : activeView === 'exams' ? t('fabExam') : t('fabFriend');
  els.fabAdd.setAttribute('aria-label', label);
}

const DOCK_MAG = {
  maxScale: 1.72,
  influence: 150,
};

function initDockMagnification() {
  if (!els.dockNav || !els.dockList) return;

  const items = [...els.dockList.querySelectorAll('.dock-item')];
  let rafId = null;
  let mouseX = null;

  function resetDockScales() {
    items.forEach((item) => {
      item.style.setProperty('--dock-scale', '1');
      item.style.setProperty('--dock-lift', '0px');
    });
  }

  function applyDockScales() {
    rafId = null;
    if (mouseX === null) return;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const distance = Math.abs(mouseX - center);
      let scale = 1;

      if (distance < DOCK_MAG.influence) {
        const t = 1 - distance / DOCK_MAG.influence;
        const eased = Math.cos((1 - t) * (Math.PI / 2));
        scale = 1 + (DOCK_MAG.maxScale - 1) * eased;
      }

      const lift = (scale - 1) * -22;
      item.style.setProperty('--dock-scale', String(scale));
      item.style.setProperty('--dock-lift', `${lift}px`);
    });
  }

  els.dockNav.addEventListener('mouseenter', () => {
    els.dockList.classList.add('is-magnifying');
  });

  els.dockNav.addEventListener('mouseleave', () => {
    mouseX = null;
    els.dockList.classList.remove('is-magnifying');
    resetDockScales();
  });

  els.dockNav.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    if (!rafId) rafId = requestAnimationFrame(applyDockScales);
  });

  resetDockScales();
}

function handleDockItemClick(btn) {
  const action = btn.dataset.dockAction;

  if (action === 'view') {
    switchView(btn.dataset.view);
    return;
  }

  if (action === 'calendar') {
    openCalendarModal();
    return;
  }

  if (action === 'settings') {
    if (els.settingsModalOverlay?.hidden) openSettingsModal();
    else closeSettingsModal();
    return;
  }
}

function updateDockActiveState(view) {
  if (!els.dockList) return;
  els.dockList.querySelectorAll('[data-view]').forEach((btn) => {
    const isActive = btn.dataset.view === view;
    btn.classList.toggle('active', isActive);
    if (isActive) btn.setAttribute('aria-current', 'page');
    else btn.removeAttribute('aria-current');
  });
}

function switchView(view) {
  closeSettingsModal();
  activeView = view;
  els.tasksView.hidden = view !== 'tasks';
  els.examsView.hidden = view !== 'exams';
  els.scheduleView.hidden = view !== 'schedule';
  els.friendsView.hidden = view !== 'friends';
  els.tasksSidebar.hidden = view !== 'tasks';

  updateDockActiveState(view);
  updateFabLabel();

  if (view === 'friends') renderFriends();
  else if (view === 'exams') renderExams();
  else if (view === 'schedule') renderSchedule();
  else renderTasks();
}

function clearTaskImagePreview() {
  pendingTaskImage = '';
  pendingTaskFileName = '';
  els.taskImageFile.value = '';
  els.imagePreview.hidden = true;
  els.imagePreviewImg.removeAttribute('src');
  if (els.filePreviewCard) els.filePreviewCard.hidden = true;
  if (els.filePreviewName) els.filePreviewName.textContent = '';
  if (els.filePreviewType) els.filePreviewType.textContent = '';
  if (els.imagePreviewRemove) els.imagePreviewRemove.hidden = true;
  els.imageError.hidden = true;
  els.imageError.textContent = '';
}

function showTaskImagePreview(src) {
  if (els.filePreviewCard) els.filePreviewCard.hidden = true;
  els.imagePreviewImg.src = src;
  els.imagePreview.hidden = false;
  if (els.imagePreviewRemove) els.imagePreviewRemove.hidden = false;
  els.imageError.hidden = true;
}

function showTaskFilePreview(name, kind) {
  els.imagePreview.hidden = true;
  els.imagePreviewImg.removeAttribute('src');
  if (els.filePreviewCard) els.filePreviewCard.hidden = false;
  if (els.filePreviewName) els.filePreviewName.textContent = name;
  if (els.filePreviewType) els.filePreviewType.textContent = getFileTypeLabel(kind);
  if (els.imagePreviewRemove) els.imagePreviewRemove.hidden = false;
  els.imageError.hidden = true;
}

function showTaskAttachmentPreview(dataUrl, fileName) {
  const kind = getAttachmentKind(dataUrl, fileName);
  if (kind === 'image') {
    showTaskImagePreview(dataUrl);
    return;
  }
  showTaskFilePreview(fileName || getAttachmentDisplayName({ image: dataUrl, attachmentName: fileName }), kind);
}

function clearFriendImagePreview() {
  els.friendImageFile.value = '';
  els.friendImagePreview.hidden = true;
  els.friendImagePreviewImg.removeAttribute('src');
  els.friendImageError.hidden = true;
  els.friendImageError.textContent = '';
}

function resetFriendImageState(forNew) {
  pendingFriendImage = forNew ? null : '';
  clearFriendImagePreview();
}

function showFriendImagePreview(src) {
  els.friendImagePreviewImg.src = src;
  els.friendImagePreview.hidden = false;
  els.friendImageError.hidden = true;
}

function renderAttachmentHtml(task) {
  const parts = [];
  const link = sanitizeUrl(task.link);
  const attachment = sanitizeUrl(task.image);

  if (link) {
    parts.push(
      `<a href="${escapeHtml(link)}" class="task-attachment-link" target="_blank" rel="noopener noreferrer">${escapeHtml(t('taskLink'))}</a>`
    );
  }

  if (attachment) {
    const kind = getAttachmentKind(attachment, task.attachmentName);
    if (kind === 'image') {
      parts.push(
        `<a href="${escapeHtml(attachment)}" class="task-attachment-image" target="_blank" rel="noopener noreferrer" download="${escapeHtml(task.attachmentName || 'attachment')}">` +
          `<img src="${escapeHtml(attachment)}" alt="${escapeHtml(t('imageAlt'))}" loading="lazy">` +
        `</a>`
      );
    } else {
      const rawName = task.attachmentName || getAttachmentDisplayName(task);
      const displayName = escapeHtml(rawName);
      const typeLabel = escapeHtml(getFileTypeLabel(kind));
      parts.push(
        `<a href="${escapeHtml(attachment)}" class="task-attachment-file" target="_blank" rel="noopener noreferrer" download="${escapeHtml(rawName)}">` +
          `<span class="task-attachment-file-icon" aria-hidden="true">📄</span>` +
          `<span class="task-attachment-file-body">` +
            `<span class="task-attachment-file-name">${displayName}</span>` +
            `<span class="task-attachment-file-type">${typeLabel}</span>` +
          `</span>` +
        `</a>`
      );
    }
  }

  if (!parts.length) return '';
  return '<div class="task-attachments">' + parts.join('') + '</div>';
}

function isCompactTopbar() {
  return window.matchMedia('(max-width: 768px)').matches;
}

function updateClock() {
  const locale = lang === 'he' ? 'he-IL' : 'en-US';
  const now = new Date();
  els.todayDate.textContent = formatDateFromDate(now);
  els.currentTime.textContent = now.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

function renderCategories() {
  if (!els.categoryList) return;

  categories = normalizeCategoriesList(categories);
  normalizeActiveCategory();

  const items = [
    getAllCategoryItem(),
    ...categories.map((c) => ({
      id: c,
      label: isGeneralCategory(c) ? getDefaultCategoryName() : c,
      deletable: !isProtectedCategory(c),
    })),
  ];

  els.categoryList.innerHTML = items
    .map((item) => {
      const isAll = item.id === CATEGORY_ALL_ID;
      const isGeneral = isGeneralCategory(item.id);
      const deleteBtn = item.deletable
        ? `<button type="button" class="sidebar-delete" data-delete-category="${escapeHtml(item.id)}" aria-label="${escapeHtml(t('deleteCategoryLabel'))}">&times;</button>`
        : '';
      const itemClass =
        'sidebar-item' +
        (isAll ? ' is-category-all' : '') +
        (isGeneral ? ' is-category-general' : '');
      return (
        `<li class="${itemClass}">` +
          `<button type="button" class="sidebar-btn ${activeCategory === item.id ? 'active' : ''}" data-category="${escapeHtml(item.id)}"${isAll ? ' data-category-all="true"' : ''}${isGeneral ? ' data-category-general="true"' : ''}>${escapeHtml(item.label)}</button>` +
          deleteBtn +
        `</li>`
      );
    })
    .join('');

  els.categoryList.querySelectorAll('[data-category]').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      renderCategories();
      renderTasks();
    });
  });

  els.categoryList.querySelectorAll('[data-delete-category]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteCategory(btn.dataset.deleteCategory);
    });
  });
}

function getFallbackCategoryOnDelete() {
  categories = normalizeCategoriesList(categories);
  return getDefaultCategoryName();
}

function deleteCategory(categoryName) {
  if (isVirtualAllCategory(categoryName) || isProtectedCategory(categoryName)) return;
  if (!categories.includes(categoryName)) return;

  if (!confirm(t('confirmDeleteCategory')(categoryName))) return;

  const fallback = getFallbackCategoryOnDelete();

  tasks.forEach((task) => {
    if (task.category === categoryName) task.category = fallback;
  });

  categories = categories.filter((c) => c !== categoryName);

  if (activeCategory === categoryName) activeCategory = CATEGORY_ALL_ID;

  saveData();
  renderCategories();
  renderCategorySelect();
  renderTasks();
  refreshCalendarIfOpen();
}

function renderCategorySelect() {
  els.taskCategory.innerHTML = categories
    .map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
    .join('');
}

function buildTaskCardElement(task) {
  const li = document.createElement('li');
  li.className = 'task-card' + (task.done ? ' is-done' : '');

  const urgencyClass =
    Number(task.urgency) === 3 ? 'urgency-high' : Number(task.urgency) === 1 ? 'urgency-low' : '';

  const reminderBadge = task.reminderEnabled
    ? `<span class="meta-badge reminder-badge">${escapeHtml(getReminderBadgeText(task))}</span>`
    : '';

  li.innerHTML =
    `<input type="checkbox" class="task-check" ${task.done ? 'checked' : ''} aria-label="${escapeHtml(t('doneLabel'))}">` +
    `<div class="task-content">` +
      `<p class="task-name">${escapeHtml(task.title)}</p>` +
      `<div class="task-meta">` +
        `<span class="meta-item"><strong>${escapeHtml(t('metaCategory'))}:</strong> ${escapeHtml(task.category)}</span>` +
        `<span class="meta-item"><strong>${escapeHtml(t('metaDue'))}:</strong> ${formatDate(task.due)}</span>` +
        `<span class="meta-badge ${urgencyClass}">${escapeHtml(t('metaUrgency'))}: ${escapeHtml(t('urgency')[task.urgency])}</span>` +
        `<span class="meta-badge">${escapeHtml(t('metaDifficulty'))}: ${escapeHtml(t('difficulty')[task.difficulty])}</span>` +
        reminderBadge +
      `</div>` +
      renderAttachmentHtml(task) +
    `</div>` +
    `<button type="button" class="task-delete" aria-label="${escapeHtml(t('deleteLabel'))}">&times;</button>`;

  li.querySelector('.task-check').addEventListener('change', () => toggleDone(task.id));
  li.querySelector('.task-delete').addEventListener('click', () => deleteTask(task.id));
  return li;
}

function renderTasks() {
  const filtered = filterTasks(tasks);
  const sorted = sortTasks(filtered);

  els.taskList.innerHTML = '';

  sorted.forEach((task) => {
    els.taskList.appendChild(buildTaskCardElement(task));
  });

  if (els.tasksEmptyBlock) els.tasksEmptyBlock.classList.toggle('hidden', sorted.length > 0);

  const pending = tasks.filter((task) => !task.done).length;
  els.taskCount.textContent =
    pending > 0 ? t('openCount')(pending) : tasks.length > 0 ? t('allDone') : '';

  renderStatsWidget();
  updateFilterIndicator();
}

function dateKeyFromParts(year, monthIndex, day) {
  return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function getTasksForDate(dateKey) {
  return sortTasks(tasks.filter((task) => task.due === dateKey));
}

function getWeekdayLabels() {
  const locale = lang === 'he' ? 'he-IL' : 'en-US';
  const labels = [];
  for (let i = 0; i < 7; i += 1) {
    const d = new Date(2024, 0, 7 + i);
    labels.push(d.toLocaleDateString(locale, { weekday: 'short' }));
  }
  return labels;
}

function formatCalendarMonth(year, monthIndex) {
  const locale = lang === 'he' ? 'he-IL' : 'en-US';
  return new Date(year, monthIndex, 1).toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
  });
}

function ensureCalendarView() {
  const now = new Date();
  if (
    !calendarView ||
    typeof calendarView.year !== 'number' ||
    typeof calendarView.month !== 'number' ||
    Number.isNaN(calendarView.year) ||
    Number.isNaN(calendarView.month)
  ) {
    calendarView = { year: now.getFullYear(), month: now.getMonth() };
  }
}

function ensureCalendarSelectedDate() {
  if (!calendarSelectedDate) {
    calendarSelectedDate = todayKey();
  }
}

function getCalendarMonthLabelText(year, monthIndex) {
  const label = formatCalendarMonth(year, monthIndex);
  if (label && label.trim()) return label;
  const now = new Date();
  return formatCalendarMonth(now.getFullYear(), now.getMonth());
}

function getCalendarDayHeadingText(dateKey) {
  const key = dateKey || todayKey();
  const formatted = key ? formatDate(key) : '';
  const displayDate =
    formatted && formatted !== t('noDueDate') ? formatted : formatDate(todayKey());
  const heading = t('calendarDayItems')(displayDate);
  return heading && heading.trim() ? heading : displayDate;
}

function refreshCalendarIfOpen() {
  if (els.calendarModalOverlay && !els.calendarModalOverlay.hidden) renderCalendar();
}

function getExamsForDate(dateKey) {
  return sortExams(exams.filter((exam) => exam.date === dateKey));
}

function renderCalendarDayDetail(dateKey) {
  ensureCalendarSelectedDate();
  const activeDateKey = dateKey || calendarSelectedDate || todayKey();
  const dayTasks = getTasksForDate(activeDateKey);
  const dayExams = getExamsForDate(activeDateKey);
  if (els.calendarDayTitle) {
    els.calendarDayTitle.textContent = getCalendarDayHeadingText(activeDateKey);
  }
  els.calendarDayList.innerHTML = '';
  els.calendarDayExamsList.innerHTML = '';

  els.calendarTasksSection.hidden = !dayTasks.length;
  els.calendarExamsSection.hidden = !dayExams.length;
  els.calendarDayEmpty.hidden = dayTasks.length > 0 || dayExams.length > 0;

  dayTasks.forEach((task) => {
    els.calendarDayList.appendChild(buildTaskCardElement(task));
  });

  dayExams.forEach((exam) => {
    els.calendarDayExamsList.appendChild(buildExamCardElement(exam, { compact: true }));
  });
}

function renderCalendar() {
  ensureCalendarView();
  ensureCalendarSelectedDate();
  const { year, month } = calendarView;
  const locale = lang === 'he' ? 'he-IL' : 'en-US';

  if (els.calendarMonthLabel) {
    els.calendarMonthLabel.textContent = getCalendarMonthLabelText(year, month);
  }
  els.calendarPrevBtn.setAttribute('aria-label', t('calendarPrev'));
  els.calendarNextBtn.setAttribute('aria-label', t('calendarNext'));

  els.calendarWeekdays.innerHTML = getWeekdayLabels()
    .map((label) => `<span class="calendar-weekday">${escapeHtml(label)}</span>`)
    .join('');

  const firstDay = new Date(year, month, 1);
  const startPad = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayDate = getTodayLocalDate();

  let cells = '';

  for (let i = 0; i < startPad; i += 1) {
    cells += `<div class="calendar-cell is-empty" aria-hidden="true"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateKey = dateKeyFromParts(year, month, day);
    const dayTasks = getTasksForDate(dateKey);
    const dayExams = getExamsForDate(dateKey);
    const isToday = isSameLocalDay(parseLocalDate(dateKey), todayDate);
    const isSelected = dateKey === calendarSelectedDate;
    const hasUrgent = dayTasks.some((task) => !task.done && isTaskUrgent(task));
    const hasExams = dayExams.length > 0;
    const totalItems = dayTasks.length + dayExams.length;
    const hasItems = totalItems > 0;

    const previewLimit = 2;
    const previewItems = [];
    dayTasks.slice(0, previewLimit).forEach((task) => {
      const classes = ['calendar-task-chip'];
      if (task.done) classes.push('is-done');
      if (!task.done && isTaskUrgent(task)) classes.push('is-urgent');
      previewItems.push(`<span class="${classes.join(' ')}">${escapeHtml(task.title)}</span>`);
    });
    const remaining = previewLimit - previewItems.length;
    if (remaining > 0) {
      dayExams.slice(0, remaining).forEach((exam) => {
        previewItems.push(
          `<span class="calendar-exam-chip${isExamPast(exam) ? ' is-past' : ''}">` +
            `<span class="calendar-exam-badge">${escapeHtml(t('calendarBadgeExam'))}</span>` +
            `${escapeHtml(exam.title)}` +
          `</span>`
        );
      });
    }
    const moreCount = Math.max(0, totalItems - previewLimit);
    const chips = previewItems.join('');
    const more = moreCount > 0 ? `<span class="calendar-more">${escapeHtml(t('calendarMore')(moreCount))}</span>` : '';
    const dotMarkup = hasItems ? '<span class="calendar-dot" aria-hidden="true"></span>' : '';

    cells +=
      `<button type="button" class="calendar-cell${isToday ? ' is-today' : ''}${isSelected ? ' is-selected' : ''}${hasUrgent ? ' has-urgent' : ''}${hasItems ? ' has-items' : ''}${hasExams ? ' has-exams' : ''}" data-date="${dateKey}">` +
        `<span class="calendar-day-num">${day.toLocaleString(locale)}</span>` +
        `<div class="calendar-day-tasks">${chips}${more}${dotMarkup}</div>` +
      `</button>`;
  }

  els.calendarGrid.innerHTML = cells;

  els.calendarGrid.querySelectorAll('[data-date]').forEach((btn) => {
    btn.addEventListener('click', () => {
      calendarSelectedDate = btn.dataset.date;
      renderCalendarDayDetail(calendarSelectedDate);
      els.calendarGrid.querySelectorAll('.calendar-cell').forEach((cell) => {
        cell.classList.toggle('is-selected', cell.dataset.date === calendarSelectedDate);
      });
    });
  });

  renderCalendarDayDetail(calendarSelectedDate);
}

function formatICSDate(dateStr) {
  return dateStr.replaceAll('-', '');
}

function addOneDayICS(dateStr) {
  const date = parseLocalDate(dateStr);
  if (!date) return String(dateStr || '').replaceAll('-', '');
  date.setDate(date.getDate() + 1);
  return dateKeyFromDate(date).replaceAll('-', '');
}

function escapeICS(text) {
  return String(text || '')
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

function buildTaskICSDescription(task) {
  const typeLabel = `${lang === 'he' ? 'סוג' : 'Type'}: ${t('calendarExportTypeTask')}`;
  const courseLabel = `${lang === 'he' ? 'קורס' : 'Course'}: ${task.category}`;
  const parts = [typeLabel, courseLabel];
  if (task.link) parts.push(`${lang === 'he' ? 'קישור' : 'Link'}: ${task.link}`);
  return parts.join('\n');
}

function buildExamICSDescription(exam) {
  const typeLabel = `${lang === 'he' ? 'סוג' : 'Type'}: ${t('calendarExportTypeExam')}`;
  const courseLabel = `${lang === 'he' ? 'קורס' : 'Course'}: ${exam.course}`;
  const parts = [typeLabel, courseLabel];
  if (exam.examType) {
    parts.push(`${t('metaExamType')}: ${t('examType')[exam.examType] || exam.examType}`);
  }
  return parts.join('\n');
}

function getExportableCalendarEventCount() {
  const taskCount = tasks.filter((task) => !task.done && task.due).length;
  const examCount = exams.filter((exam) => exam.date).length;
  return taskCount + examCount;
}

function generateICSFile() {
  const prodLang = lang === 'he' ? 'HE' : 'EN';
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Student Dashboard//Calendar Export//' + prodLang,
    'CALSCALE:GREGORIAN',
  ];

  tasks
    .filter((task) => !task.done && task.due)
    .forEach((task) => {
      lines.push('BEGIN:VEVENT');
      lines.push(`UID:task-${task.id}@student-dashboard`);
      lines.push(
        `SUMMARY:${escapeICS(lang === 'he' ? 'משימה: ' + task.title : 'Task: ' + task.title)}`
      );
      lines.push(`DESCRIPTION:${escapeICS(buildTaskICSDescription(task))}`);
      lines.push(`DTSTART;VALUE=DATE:${formatICSDate(task.due)}`);
      lines.push(`DTEND;VALUE=DATE:${addOneDayICS(task.due)}`);
      lines.push('END:VEVENT');
    });

  exams
    .filter((exam) => exam.date)
    .forEach((exam) => {
      lines.push('BEGIN:VEVENT');
      lines.push(`UID:exam-${exam.id}@student-dashboard`);
      lines.push(
        `SUMMARY:${escapeICS(lang === 'he' ? 'מבחן: ' + exam.title : 'Exam: ' + exam.title)}`
      );
      lines.push(`DESCRIPTION:${escapeICS(buildExamICSDescription(exam))}`);
      lines.push(`DTSTART;VALUE=DATE:${formatICSDate(exam.date)}`);
      lines.push(`DTEND;VALUE=DATE:${addOneDayICS(exam.date)}`);
      lines.push('END:VEVENT');
    });

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

function downloadICS() {
  if (getExportableCalendarEventCount() === 0) {
    alert(t('calendarExportEmpty'));
    return;
  }

  const icsContent = generateICSFile();
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'student-dashboard-calendar.ics';
  link.click();

  URL.revokeObjectURL(url);
}

function openCalendarModal() {
  closeSettingsModal();
  const now = new Date();
  calendarView = { year: now.getFullYear(), month: now.getMonth() };
  calendarSelectedDate = todayKey();
  els.calendarModalOverlay.hidden = false;
  renderCalendar();
  syncModalOpenClass();
}

function closeCalendarModal() {
  els.calendarModalOverlay.hidden = true;
  syncModalOpenClass();
}

function shiftCalendarMonth(delta) {
  let { year, month } = calendarView;
  month += delta;
  if (month < 0) {
    month = 11;
    year -= 1;
  } else if (month > 11) {
    month = 0;
    year += 1;
  }
  calendarView = { year, month };
  renderCalendar();
}

function goCalendarToday() {
  const now = new Date();
  calendarView = { year: now.getFullYear(), month: now.getMonth() };
  calendarSelectedDate = todayKey();
  renderCalendar();
}

function buildExamCardElement(exam, options = {}) {
  const li = document.createElement('li');
  const past = isExamPast(exam);
  li.className = 'exam-card' + (past ? ' is-past' : '') + (options.compact ? ' is-compact' : '');

  const actions = options.compact
    ? ''
    : `<div class="exam-actions">` +
        `<button type="button" class="icon-btn edit-exam" aria-label="${escapeHtml(t('editLabel'))}">&#9998;</button>` +
        `<button type="button" class="icon-btn delete-exam" aria-label="${escapeHtml(t('deleteLabel'))}">&times;</button>` +
      `</div>`;

  li.innerHTML =
    `<div class="exam-content">` +
      `<div class="exam-header">` +
        `<h3 class="exam-title">${escapeHtml(exam.title)}</h3>` +
        actions +
      `</div>` +
      `<div class="exam-meta">` +
        `<span class="meta-item"><strong>${escapeHtml(t('metaCategory'))}:</strong> ${escapeHtml(exam.course)}</span>` +
        `<span class="meta-item"><strong>${escapeHtml(t('metaExamDate'))}:</strong> ${formatDate(exam.date)}</span>` +
        `<span class="meta-badge exam-type-badge">${escapeHtml(getExamTypeLabel(exam.examType))}</span>` +
      `</div>` +
      renderExamFilesHtml(exam.files) +
    `</div>`;

  if (!options.compact) {
    li.querySelector('.edit-exam')?.addEventListener('click', () => openExamModal(exam.id));
    li.querySelector('.delete-exam')?.addEventListener('click', () => deleteExam(exam.id));
  }

  return li;
}

function renderExams() {
  if (!els.examList) return;
  els.examList.innerHTML = '';
  const sorted = sortExams(exams);

  sorted.forEach((exam) => {
    els.examList.appendChild(buildExamCardElement(exam));
  });

  if (els.examsEmptyBlock) els.examsEmptyBlock.classList.toggle('hidden', sorted.length > 0);
  els.examsCount.textContent = sorted.length ? t('examsCount')(sorted.length) : '';
}

function renderExamPendingFiles() {
  if (!els.examPendingFiles) return;
  els.examPendingFiles.innerHTML = pendingExamFiles
    .map(
      (file) =>
        `<li class="exam-pending-file">` +
          `<span class="exam-pending-name">${escapeHtml(file.name)}</span>` +
          `<span class="exam-pending-type">${escapeHtml(getFileTypeLabel(file.type))}</span>` +
          `<button type="button" class="exam-pending-remove" data-file-id="${escapeHtml(file.id)}" aria-label="${escapeHtml(t('removeFile'))}">&times;</button>` +
        `</li>`
    )
    .join('');

  els.examPendingFiles.querySelectorAll('.exam-pending-remove').forEach((btn) => {
    btn.addEventListener('click', () => {
      pendingExamFiles = pendingExamFiles.filter((file) => file.id !== btn.dataset.fileId);
      renderExamPendingFiles();
    });
  });
}

function clearExamFileState() {
  pendingExamFiles = [];
  if (els.examFilesInput) els.examFilesInput.value = '';
  if (els.examPendingFiles) els.examPendingFiles.innerHTML = '';
  if (els.examFileError) {
    els.examFileError.hidden = true;
    els.examFileError.textContent = '';
  }
}

function openExamModal(examId = null) {
  editingExamId = examId;
  els.examForm.reset();
  clearExamFileState();
  populateExamTypeSelect();
  renderExamCourseDatalist();
  els.examDate.min = todayKey();

  if (examId) {
    const exam = exams.find((item) => item.id === examId);
    if (!exam) return;
    els.examModalTitle.textContent = t('examModalEdit');
    els.examCourse.value = exam.course;
    els.examTitle.value = exam.title;
    els.examDate.value = exam.date;
    els.examType.value = exam.examType;
    pendingExamFiles = exam.files.map((file) => ({ ...file }));
    renderExamPendingFiles();
  } else {
    els.examModalTitle.textContent = t('examModalAdd');
    els.examType.value = 'a';
    const nextWeek = getTodayLocalDate();
    nextWeek.setDate(nextWeek.getDate() + 7);
    els.examDate.value = dateKeyFromDate(nextWeek);
  }

  els.examModalOverlay.hidden = false;
  els.examCourse.focus();
  syncModalOpenClass();
}

function closeExamModal() {
  els.examModalOverlay.hidden = true;
  els.examForm.reset();
  editingExamId = null;
  clearExamFileState();
  clearFormSubmitState(els.examForm);
  syncModalOpenClass();
}

async function saveExam(e) {
  e.preventDefault();
  const form = els.examForm;
  if (!form) return;
  if (!startFormSubmit(form)) return;
  const submitBtn = form.querySelector('button[type="submit"]');

  try {
    els.examFileError.hidden = true;

    const data = {
      course: els.examCourse.value.trim(),
      title: els.examTitle.value.trim(),
      date: els.examDate.value,
      examType: els.examType.value,
      files: pendingExamFiles.map((file) => normalizeExamFile(file)),
    };

    if (editingExamId) {
      const exam = exams.find((item) => item.id === editingExamId);
      if (exam) Object.assign(exam, normalizeExam({ ...exam, ...data }));
    } else {
      exams.push(normalizeExam({ id: generateId(), ...data, createdAt: Date.now() }));
    }

    if (data.course && !categories.includes(data.course)) {
      categories.push(data.course);
    }

    saveData();
    closeExamModal();
    renderCategories();
    renderExams();
    refreshCalendarIfOpen();
  } catch (error) {
    console.error(error);
  } finally {
    resetFormSubmit(form, submitBtn);
  }
}

function deleteExam(id) {
  const exam = exams.find((item) => item.id === id);
  if (!exam) return;
  if (!confirm(t('confirmDeleteExam')(exam.title))) return;
  exams = exams.filter((item) => item.id !== id);
  saveData();
  renderExams();
  refreshCalendarIfOpen();
}

function normalizeScheduleCourse(course) {
  const day = SCHEDULE_DAYS.includes(course.day) ? course.day : 'sunday';
  const color = SCHEDULE_COLOR_VALUES[course.color] ? course.color : 'blue';
  let startTime = course.startTime || '08:00';
  let endTime = course.endTime || '09:00';
  let startMin = clampScheduleMinutes(parseTimeToMinutes(startTime));
  let endMin = clampScheduleMinutes(parseTimeToMinutes(endTime));
  if (endMin <= startMin) {
    endMin = Math.min(startMin + SCHEDULE_DRAG_SNAP_MIN, SCHEDULE_DAY_END_MIN);
  }
  startTime = formatTime24(formatMinutesToTime(startMin));
  endTime = formatTime24(formatMinutesToTime(endMin));
  return {
    id: course.id || generateId(),
    name: course.name || '',
    day,
    startTime,
    endTime,
    color,
    createdAt: course.createdAt || Date.now(),
  };
}

function parseTimeToMinutes(timeStr) {
  const [h, m] = String(timeStr || '08:00').split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
}

function formatMinutesToTime(totalMin) {
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function snapScheduleMinutes(minutes) {
  return Math.round(minutes / SCHEDULE_DRAG_SNAP_MIN) * SCHEDULE_DRAG_SNAP_MIN;
}

function scheduleMinutesToPx(minutes) {
  return ((minutes - SCHEDULE_DAY_START_MIN) / 60) * SCHEDULE_ROW_HEIGHT;
}

function schedulePxToMinutes(px) {
  return SCHEDULE_DAY_START_MIN + (px / SCHEDULE_ROW_HEIGHT) * 60;
}

function getScheduleTotalHeightPx() {
  return SCHEDULE_HOURS.length * SCHEDULE_ROW_HEIGHT;
}

function getScheduleColorValue(color) {
  return SCHEDULE_COLOR_VALUES[color] || SCHEDULE_COLOR_VALUES.blue;
}

function getScheduleTimePickerLabel(container) {
  if (!container?.id) return '';
  const label = document.querySelector(`label[for="${container.id}"]`);
  return label?.textContent?.trim() || '';
}

function buildScheduleTimeSelectOptions(select, maxInclusive) {
  select.innerHTML = '';
  for (let i = 0; i <= maxInclusive; i += 1) {
    const value = String(i).padStart(2, '0');
    select.add(new Option(value, value));
  }
}

function initScheduleTimePickerEl(container) {
  if (!container || container.dataset.scheduleTimeReady) return;
  container.dataset.scheduleTimeReady = '1';
  container.setAttribute('dir', 'ltr');
  container.innerHTML = '';

  const baseLabel = getScheduleTimePickerLabel(container);
  const hourSuffix = lang === 'he' ? 'שעה' : 'hour';
  const minuteSuffix = lang === 'he' ? 'דקה' : 'minute';

  const hourSelect = document.createElement('select');
  hourSelect.className = 'schedule-time-hour';
  hourSelect.setAttribute(
    'aria-label',
    baseLabel ? `${baseLabel} (${hourSuffix})` : hourSuffix
  );
  buildScheduleTimeSelectOptions(hourSelect, 23);

  const colon = document.createElement('span');
  colon.className = 'schedule-time-colon';
  colon.setAttribute('aria-hidden', 'true');
  colon.textContent = ':';

  const minuteSelect = document.createElement('select');
  minuteSelect.className = 'schedule-time-minute';
  minuteSelect.setAttribute(
    'aria-label',
    baseLabel ? `${baseLabel} (${minuteSuffix})` : minuteSuffix
  );
  buildScheduleTimeSelectOptions(minuteSelect, 59);

  container.append(hourSelect, colon, minuteSelect);
}

function getScheduleTimeValue(container) {
  if (!container) return '';
  const hour = container.querySelector('.schedule-time-hour')?.value ?? '00';
  const minute = container.querySelector('.schedule-time-minute')?.value ?? '00';
  return `${hour}:${minute}`;
}

function setScheduleTimeValue(container, time) {
  if (!container) return;
  const hourSelect = container.querySelector('.schedule-time-hour');
  const minuteSelect = container.querySelector('.schedule-time-minute');
  if (!hourSelect || !minuteSelect) return;

  const parts = formatTime24(time).split(':');
  const hour = (parts[0] || '08').padStart(2, '0').slice(0, 2);
  const minute = (parts[1] || '00').padStart(2, '0').slice(0, 2);

  if ([...hourSelect.options].some((opt) => opt.value === hour)) {
    hourSelect.value = hour;
  }
  if ([...minuteSelect.options].some((opt) => opt.value === minute)) {
    minuteSelect.value = minute;
  }
}

function refreshScheduleTimePickerA11y() {
  const hourSuffix = lang === 'he' ? 'שעה' : 'hour';
  const minuteSuffix = lang === 'he' ? 'דקה' : 'minute';
  [els.scheduleCourseStartTime, els.scheduleCourseEndTime].forEach((container) => {
    if (!container) return;
    const baseLabel = getScheduleTimePickerLabel(container);
    const hourSelect = container.querySelector('.schedule-time-hour');
    const minuteSelect = container.querySelector('.schedule-time-minute');
    if (hourSelect) {
      hourSelect.setAttribute('aria-label', baseLabel ? `${baseLabel} (${hourSuffix})` : hourSuffix);
    }
    if (minuteSelect) {
      minuteSelect.setAttribute(
        'aria-label',
        baseLabel ? `${baseLabel} (${minuteSuffix})` : minuteSuffix
      );
    }
  });
}

function initScheduleTimePickers() {
  [els.scheduleCourseStartTime, els.scheduleCourseEndTime].forEach((container) => {
    initScheduleTimePickerEl(container);
  });
  refreshScheduleTimePickerA11y();
}

function clampScheduleMinutes(minutes) {
  return Math.max(SCHEDULE_DAY_START_MIN, Math.min(SCHEDULE_DAY_END_MIN, minutes));
}

function formatTime24(time) {
  if (!time) return '';
  return String(time).slice(0, 5);
}

function formatScheduleHourLabel(hour) {
  return formatTime24(`${String(hour).padStart(2, '0')}:00`);
}

function formatScheduleTimeRange(startTime, endTime) {
  return `${formatTime24(startTime)}\u2013${formatTime24(endTime)}`;
}

function populateScheduleDaySelect() {
  if (!els.scheduleCourseDay) return;
  els.scheduleCourseDay.innerHTML = SCHEDULE_DAYS.map(
    (day) => `<option value="${day}">${escapeHtml(t('scheduleDays')[day])}</option>`
  ).join('');
}

function renderScheduleColorPicker(selected = 'blue') {
  if (!els.scheduleColorPicker) return;
  els.scheduleColorPicker.innerHTML = SCHEDULE_COLORS.map(
    (color) =>
      `<button type="button" class="schedule-color-swatch${color === selected ? ' is-selected' : ''}" data-color="${color}" style="--swatch:${SCHEDULE_COLOR_VALUES[color]}" aria-label="${escapeHtml(color)}" aria-pressed="${color === selected}"></button>`
  ).join('');
}

function getScheduleBlockMetrics(course) {
  const start = parseTimeToMinutes(course.startTime);
  const end = parseTimeToMinutes(course.endTime);
  const top = scheduleMinutesToPx(start);
  const height = Math.max(SCHEDULE_MIN_BLOCK_HEIGHT, scheduleMinutesToPx(end) - top);
  return { top, height, start, end };
}

function buildScheduleCourseBlockHtml(course) {
  const { top, height } = getScheduleBlockMetrics(course);
  const accent = getScheduleColorValue(course.color);
  return (
    `<button type="button" class="schedule-course-block" data-id="${escapeHtml(course.id)}" data-color="${escapeHtml(course.color)}" data-day="${escapeHtml(course.day)}" style="top:${top}px;height:${height}px;--course-accent:${accent}">` +
      `<span class="schedule-course-name">${escapeHtml(course.name)}</span>` +
      `<span class="schedule-course-time" dir="ltr">${escapeHtml(formatScheduleTimeRange(course.startTime, course.endTime))}</span>` +
    `</button>`
  );
}

function renderSchedule() {
  if (!els.scheduleGrid) return;

  const totalHeight = getScheduleTotalHeightPx();
  let html = `<div class="schedule-header-row">`;
  html += `<div class="schedule-corner-cell" aria-hidden="true"></div>`;
  html += `<div class="schedule-columns-wrap schedule-columns-header">`;
  SCHEDULE_DAYS.forEach((day) => {
    html += `<div class="schedule-day-label">${escapeHtml(t('scheduleDays')[day])}</div>`;
  });
  html += `</div></div>`;

  html += `<div class="schedule-body-row" style="--schedule-height:${totalHeight}px">`;
  html += `<div class="schedule-times-col">`;
  SCHEDULE_HOURS.forEach((hour, index) => {
    const altClass = index % 2 === 1 ? ' schedule-hour-alt' : '';
    html += `<div class="schedule-time-label${altClass}" dir="ltr" style="height:${SCHEDULE_ROW_HEIGHT}px">${formatScheduleHourLabel(hour)}</div>`;
  });
  html += `</div>`;

  html += `<div class="schedule-columns-wrap">`;
  SCHEDULE_DAYS.forEach((day) => {
    html += `<div class="schedule-day-column" data-day="${day}" style="height:${totalHeight}px">`;
    SCHEDULE_HOURS.forEach((hour, index) => {
      const altClass = index % 2 === 1 ? ' schedule-hour-alt' : '';
      html += `<div class="schedule-hour-cell${altClass}" style="height:${SCHEDULE_ROW_HEIGHT}px"></div>`;
    });
    scheduleCourses
      .filter((course) => course.day === day)
      .forEach((course) => {
        html += buildScheduleCourseBlockHtml(course);
      });
    html += `</div>`;
  });
  html += `</div></div>`;

  els.scheduleGrid.innerHTML = html;
  bindScheduleCourseBlocks();
  if (els.scheduleEmptyBlock) {
    els.scheduleEmptyBlock.classList.toggle('hidden', scheduleCourses.length > 0);
  }
}

let scheduleDragState = null;

function bindScheduleCourseBlocks() {
  if (!els.scheduleGrid) return;
  els.scheduleGrid.querySelectorAll('.schedule-course-block').forEach((block) => {
    block.addEventListener('pointerdown', onScheduleBlockPointerDown);
  });
}

function onScheduleBlockPointerDown(e) {
  if (e.button !== 0) return;
  const block = e.currentTarget;
  const course = scheduleCourses.find((item) => item.id === block.dataset.id);
  if (!course) return;

  const column = block.closest('.schedule-day-column');
  const blockRect = block.getBoundingClientRect();

  scheduleDragState = {
    courseId: course.id,
    pointerId: e.pointerId,
    offsetY: e.clientY - blockRect.top,
    startX: e.clientX,
    startY: e.clientY,
    moved: false,
    originDay: course.day,
    durationMin:
      parseTimeToMinutes(course.endTime) - parseTimeToMinutes(course.startTime),
  };

  block.classList.add('is-dragging');
  block.setPointerCapture(e.pointerId);
  block.addEventListener('pointermove', onScheduleBlockPointerMove);
  block.addEventListener('pointerup', onScheduleBlockPointerUp);
  block.addEventListener('pointercancel', onScheduleBlockPointerUp);
  e.preventDefault();
}

function getScheduleDayFromX(clientX) {
  const columns = els.scheduleGrid?.querySelectorAll('.schedule-day-column');
  if (!columns) return null;
  for (const col of columns) {
    const rect = col.getBoundingClientRect();
    if (clientX >= rect.left && clientX <= rect.right) return col.dataset.day;
  }
  return null;
}

function onScheduleBlockPointerMove(e) {
  if (!scheduleDragState || scheduleDragState.pointerId !== e.pointerId) return;

  const dx = Math.abs(e.clientX - scheduleDragState.startX);
  const dy = Math.abs(e.clientY - scheduleDragState.startY);
  if (dx > 4 || dy > 4) scheduleDragState.moved = true;

  const block = els.scheduleGrid.querySelector(
    `.schedule-course-block[data-id="${scheduleDragState.courseId}"]`
  );
  if (!block) return;

  const day = getScheduleDayFromX(e.clientX) || scheduleDragState.originDay;
  const column = els.scheduleGrid.querySelector(`.schedule-day-column[data-day="${day}"]`);
  if (!column) return;

  if (block.parentElement !== column) column.appendChild(block);

  const columnRect = column.getBoundingClientRect();
  let topPx = e.clientY - columnRect.top - scheduleDragState.offsetY;
  const course = scheduleCourses.find((item) => item.id === scheduleDragState.courseId);
  if (!course) return;

  const { height } = getScheduleBlockMetrics(course);
  const maxTop = getScheduleTotalHeightPx() - height;
  topPx = Math.max(0, Math.min(maxTop, topPx));

  const minutes = schedulePxToMinutes(topPx);
  const durationMin = Math.max(
    SCHEDULE_DRAG_SNAP_MIN,
    scheduleDragState.durationMin
  );
  let snappedStart = clampScheduleMinutes(snapScheduleMinutes(minutes));
  let snappedEnd = snappedStart + durationMin;
  if (snappedEnd > SCHEDULE_DAY_END_MIN) {
    snappedEnd = SCHEDULE_DAY_END_MIN;
    snappedStart = Math.max(SCHEDULE_DAY_START_MIN, snappedEnd - durationMin);
  }
  if (snappedEnd <= snappedStart) {
    snappedEnd = Math.min(snappedStart + SCHEDULE_DRAG_SNAP_MIN, SCHEDULE_DAY_END_MIN);
  }

  const previewTop = scheduleMinutesToPx(snappedStart);
  const previewHeight = Math.max(
    SCHEDULE_MIN_BLOCK_HEIGHT,
    scheduleMinutesToPx(snappedEnd) - previewTop
  );

  block.style.top = `${previewTop}px`;
  block.style.height = `${previewHeight}px`;
  block.dataset.day = day;
}

function onScheduleBlockPointerUp(e) {
  if (!scheduleDragState || scheduleDragState.pointerId !== e.pointerId) return;

  const block = els.scheduleGrid?.querySelector(
    `.schedule-course-block[data-id="${scheduleDragState.courseId}"]`
  );
  const course = scheduleCourses.find((item) => item.id === scheduleDragState.courseId);
  const moved = scheduleDragState.moved;

  if (block) {
    block.classList.remove('is-dragging');
    block.releasePointerCapture(e.pointerId);
    block.removeEventListener('pointermove', onScheduleBlockPointerMove);
    block.removeEventListener('pointerup', onScheduleBlockPointerUp);
    block.removeEventListener('pointercancel', onScheduleBlockPointerUp);
  }

  if (!moved && course) {
    scheduleDragState = null;
    openScheduleCourseModal(course.id);
    return;
  }

  if (course && block) {
    const day = block.dataset.day || course.day;
    const topPx = parseFloat(block.style.top) || 0;
    const durationMin = Math.max(
      SCHEDULE_DRAG_SNAP_MIN,
      scheduleDragState?.durationMin ??
        parseTimeToMinutes(course.endTime) - parseTimeToMinutes(course.startTime)
    );
    let startMin = clampScheduleMinutes(
      snapScheduleMinutes(schedulePxToMinutes(topPx))
    );
    let endMin = clampScheduleMinutes(startMin + durationMin);
    if (endMin > SCHEDULE_DAY_END_MIN) {
      endMin = SCHEDULE_DAY_END_MIN;
      startMin = Math.max(SCHEDULE_DAY_START_MIN, endMin - durationMin);
    }
    if (endMin <= startMin) {
      endMin = Math.min(startMin + SCHEDULE_DRAG_SNAP_MIN, SCHEDULE_DAY_END_MIN);
    }

    course.day = day;
    course.startTime = formatTime24(formatMinutesToTime(startMin));
    course.endTime = formatTime24(formatMinutesToTime(endMin));
    saveData();
    renderSchedule();
  }

  scheduleDragState = null;
}

function openScheduleCourseModal(courseId = null) {
  editingScheduleCourseId = courseId;
  if (els.scheduleCourseForm) els.scheduleCourseForm.reset();
  if (els.scheduleCourseError) els.scheduleCourseError.hidden = true;
  populateScheduleDaySelect();

  if (courseId) {
    const course = scheduleCourses.find((item) => item.id === courseId);
    if (!course) return;
    els.scheduleCourseModalTitle.textContent = t('scheduleEditCourse');
    els.scheduleCourseName.value = course.name;
    els.scheduleCourseDay.value = course.day;
    setScheduleTimeValue(els.scheduleCourseStartTime, formatTime24(course.startTime));
    setScheduleTimeValue(els.scheduleCourseEndTime, formatTime24(course.endTime));
    renderScheduleColorPicker(course.color);
    if (els.scheduleDeleteCourseBtn) els.scheduleDeleteCourseBtn.hidden = false;
  } else {
    els.scheduleCourseModalTitle.textContent = t('scheduleAddCourse');
    els.scheduleCourseDay.value = 'sunday';
    setScheduleTimeValue(els.scheduleCourseStartTime, '08:00');
    setScheduleTimeValue(els.scheduleCourseEndTime, '09:00');
    renderScheduleColorPicker('blue');
    if (els.scheduleDeleteCourseBtn) els.scheduleDeleteCourseBtn.hidden = true;
  }

  els.scheduleCourseModalOverlay.hidden = false;
  els.scheduleCourseName.focus();
  syncModalOpenClass();
}

function closeScheduleCourseModal() {
  els.scheduleCourseModalOverlay.hidden = true;
  editingScheduleCourseId = null;
  if (els.scheduleCourseForm) els.scheduleCourseForm.reset();
  clearFormSubmitState(els.scheduleCourseForm);
  syncModalOpenClass();
}

function getSelectedScheduleColor() {
  const selected = els.scheduleColorPicker?.querySelector('.schedule-color-swatch.is-selected');
  return selected?.dataset.color || 'blue';
}

function saveScheduleCourse(e) {
  e.preventDefault();
  const form = els.scheduleCourseForm;
  if (!form) return;
  if (!startFormSubmit(form)) return;
  const submitBtn = form.querySelector('button[type="submit"]');

  try {
    if (els.scheduleCourseError) els.scheduleCourseError.hidden = true;

    const name = els.scheduleCourseName.value.trim();
    const day = els.scheduleCourseDay.value;
    const startTime = getScheduleTimeValue(els.scheduleCourseStartTime);
    const endTime = getScheduleTimeValue(els.scheduleCourseEndTime);
    const color = getSelectedScheduleColor();

    const startMin = parseTimeToMinutes(startTime);
    const endMin = parseTimeToMinutes(endTime);

    if (!name) {
      els.scheduleCourseError.textContent = t('authRequiredField');
      els.scheduleCourseError.hidden = false;
      return;
    }

    if (
      startMin < SCHEDULE_DAY_START_MIN ||
      endMin > SCHEDULE_DAY_END_MIN ||
      endMin <= startMin
    ) {
      els.scheduleCourseError.textContent = t('scheduleTimeInvalid');
      els.scheduleCourseError.hidden = false;
      return;
    }

    const data = {
      name,
      day,
      startTime: formatTime24(startTime),
      endTime: formatTime24(endTime),
      color,
    };

    if (editingScheduleCourseId) {
      const course = scheduleCourses.find((item) => item.id === editingScheduleCourseId);
      if (course) {
        Object.assign(course, normalizeScheduleCourse({ ...course, ...data, id: course.id }));
      }
    } else {
      scheduleCourses.push(
        normalizeScheduleCourse({ id: generateId(), ...data, createdAt: Date.now() })
      );
    }

    saveData();
    closeScheduleCourseModal();
    renderSchedule();
  } catch (error) {
    console.error(error);
  } finally {
    resetFormSubmit(form, submitBtn);
  }
}

function deleteScheduleCourseFromModal() {
  if (!editingScheduleCourseId) return;
  const course = scheduleCourses.find((item) => item.id === editingScheduleCourseId);
  if (!course) return;
  if (!confirm(t('confirmDeleteScheduleCourse')(course.name))) return;
  scheduleCourses = scheduleCourses.filter((item) => item.id !== editingScheduleCourseId);
  saveData();
  closeScheduleCourseModal();
  renderSchedule();
}

async function handleDeleteScheduleCourseClick() {
  await runGuardedAction(els.scheduleDeleteCourseBtn, () => deleteScheduleCourseFromModal());
}

function initScheduleUi() {
  initScheduleTimePickers();
  populateScheduleDaySelect();
  renderScheduleColorPicker('blue');

  if (els.scheduleAddCourseBtn) {
    els.scheduleAddCourseBtn.addEventListener('click', () => openScheduleCourseModal());
  }
  if (els.scheduleCourseModalClose) {
    els.scheduleCourseModalClose.addEventListener('click', closeScheduleCourseModal);
  }
  if (els.scheduleCourseModalCancel) {
    els.scheduleCourseModalCancel.addEventListener('click', closeScheduleCourseModal);
  }
  if (els.scheduleCourseForm) {
    els.scheduleCourseForm.addEventListener('submit', saveScheduleCourse);
  }
  if (els.scheduleDeleteCourseBtn) {
    els.scheduleDeleteCourseBtn.addEventListener('click', handleDeleteScheduleCourseClick);
  }
  if (els.scheduleCourseModalOverlay) {
    els.scheduleCourseModalOverlay.addEventListener('click', (e) => {
      if (e.target === els.scheduleCourseModalOverlay) closeScheduleCourseModal();
    });
  }
  if (els.scheduleColorPicker) {
    els.scheduleColorPicker.addEventListener('click', (e) => {
      const swatch = e.target.closest('.schedule-color-swatch');
      if (!swatch) return;
      els.scheduleColorPicker.querySelectorAll('.schedule-color-swatch').forEach((btn) => {
        btn.classList.toggle('is-selected', btn === swatch);
        btn.setAttribute('aria-pressed', btn === swatch ? 'true' : 'false');
      });
    });
  }
}

function renderFriendAvatar(friend) {
  if (friend.image) {
    return `<img class="friend-avatar" src="${escapeHtml(friend.image)}" alt="">`;
  }
  const initial = friend.name ? friend.name.charAt(0).toUpperCase() : '?';
  return `<div class="friend-avatar friend-avatar-placeholder">${escapeHtml(initial)}</div>`;
}

function renderFriendsLeaderboard() {
  if (!els.friendsLeaderboard || !els.friendsLeaderboardList) return;

  if (!friends.length) {
    els.friendsLeaderboard.hidden = true;
    els.friendsLeaderboardList.innerHTML = '';
    return;
  }

  const ranked = getFriendsLeaderboard();
  els.friendsLeaderboard.hidden = false;
  els.friendsLeaderboardList.innerHTML = ranked
    .map((friend, index) => {
      const percent = friendProgress(friend);
      return (
        `<li class="friends-leaderboard-item">` +
          `<span class="friends-leaderboard-rank">${index + 1}</span>` +
          `<span class="friends-leaderboard-name">${escapeHtml(friend.name)}</span>` +
          `<span class="friends-leaderboard-pct">${escapeHtml(t('friendPercent')(percent))}</span>` +
        `</li>`
      );
    })
    .join('');
}

function renderFriendsActivityFeed() {
  if (!els.friendsActivityFeed || !els.friendsActivityFeedList) return;

  if (!friends.length) {
    els.friendsActivityFeed.hidden = true;
    els.friendsActivityFeedList.innerHTML = '';
    return;
  }

  const items = buildFriendActivityFeedItems();
  if (!items.length) {
    els.friendsActivityFeed.hidden = true;
    els.friendsActivityFeedList.innerHTML = '';
    return;
  }

  els.friendsActivityFeed.hidden = false;
  els.friendsActivityFeedList.innerHTML = items
    .map(
      (item) =>
        `<li class="friends-activity-feed-item"><span class="friends-activity-feed-dot" aria-hidden="true"></span>${escapeHtml(item.text)}</li>`
    )
    .join('');
}

function renderFriends() {
  if (!els.friendsList) return;
  els.friendsList.innerHTML = '';

  getFriendsByDisplayOrder().forEach((friend) => {
    const percent = friendProgress(friend);
    const open = Math.max(0, friend.totalTasks - friend.completedTasks);
    const statusLabel = getFriendStatusLabel(friend.status);

    const li = document.createElement('li');
    li.className = 'friend-card';
    li.innerHTML =
      renderFriendAvatar(friend) +
      `<div class="friend-body">` +
        `<div class="friend-header">` +
          `<div class="friend-title-wrap">` +
            `<h3 class="friend-name">${escapeHtml(friend.name)}</h3>` +
            (statusLabel
              ? `<span class="friend-status friend-status--${escapeHtml(friend.status)}">${escapeHtml(statusLabel)}</span>`
              : '') +
          `</div>` +
          `<div class="friend-actions">` +
            `<button type="button" class="icon-btn edit-friend" aria-label="${escapeHtml(t('editLabel'))}">&#9998;</button>` +
            `<button type="button" class="icon-btn delete-friend" aria-label="${escapeHtml(t('deleteLabel'))}">&times;</button>` +
          `</div>` +
        `</div>` +
        `<div class="progress-wrap">` +
          `<div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>` +
          `<span class="progress-percent">${escapeHtml(t('friendPercent')(percent))}</span>` +
        `</div>` +
        `<p class="friend-stats">${escapeHtml(t('friendProgress')(friend.completedTasks, friend.totalTasks))}</p>` +
        `<p class="friend-meta">` +
          `<span>${escapeHtml(t('friendOpen')(open))}</span>` +
          `<span>${escapeHtml(t('friendDone')(friend.completedTasks))}</span>` +
          (friend.streak > 0
            ? `<span class="friend-streak-meta">${escapeHtml(t('friendStreakDays')(friend.streak))}</span>`
            : '') +
        `</p>` +
        renderFriendHeatmapHtml(friend) +
      `</div>`;

    li.querySelector('.edit-friend').addEventListener('click', () => openFriendModal(friend.id));
    li.querySelector('.delete-friend').addEventListener('click', () => deleteFriend(friend.id));
    setupFriendCardDrag(li, friend);
    els.friendsList.appendChild(li);
  });

  if (els.friendsEmptyBlock) els.friendsEmptyBlock.classList.toggle('hidden', friends.length > 0);
  if (els.friendsDataNote) els.friendsDataNote.hidden = friends.length === 0;
  els.friendsCount.textContent = friends.length ? t('friendsCount')(friends.length) : '';
  renderFriendsLeaderboard();
  renderFriendsActivityFeed();
}

function syncTaskDueFields() {
  const noDue = !!els.taskNoDue?.checked;

  if (els.taskDue) {
    els.taskDue.disabled = noDue;
    if (noDue) {
      els.taskDue.value = '';
      els.taskDue.removeAttribute('min');
    } else {
      setTaskDueMin();
      if (!els.taskDue.value) {
        els.taskDue.value = todayKey();
      }
    }
  }

  if (els.taskReminder) {
    if (noDue) {
      els.taskReminder.checked = false;
      els.taskReminder.disabled = true;
    } else {
      els.taskReminder.disabled = false;
    }
  }

  const reminderRow = els.taskReminder?.closest('.reminder-row');
  if (reminderRow) reminderRow.classList.toggle('is-disabled', noDue);

  syncTaskReminderUI();
}

function openTaskModal() {
  els.taskForm.reset();
  clearTaskImagePreview();
  populateSelects();
  els.taskUrgency.value = '';
  els.taskDifficulty.value = '';
  renderCategorySelect();
  if (els.taskNoDue) els.taskNoDue.checked = false;

  els.taskDue.value = todayKey();
  syncTaskDueFields();

  resetCategoryInputs();
  syncCategoryInputs();

  resetPendingReminder();
  els.taskReminder.checked = false;
  syncTaskReminderUI();
  els.taskReminderSettingsBtn?.setAttribute('aria-label', t('reminderSettings'));

  els.taskModalOverlay.hidden = false;
  els.taskTitle.focus();
  syncModalOpenClass();
}

function closeTaskModal() {
  if (els.reminderSheetOverlay && !els.reminderSheetOverlay.hidden) closeReminderSheet();
  els.taskModalOverlay.hidden = true;
  els.taskForm.reset();
  els.newCategory.value = '';
  els.taskReminder.checked = false;
  resetPendingReminder();
  syncTaskReminderUI();
  resetCategoryInputs();
  clearTaskImagePreview();
  clearFormSubmitState(els.taskForm);
  syncModalOpenClass();
}

function openFriendModal(friendId = null) {
  editingFriendId = friendId;
  els.friendForm.reset();
  clearFriendImagePreview();

  if (friendId) {
    const friend = friends.find((f) => f.id === friendId);
    if (!friend) return;
    els.friendModalTitle.textContent = t('friendModalEdit');
    els.friendName.value = friend.name;
    els.friendTotalTasks.value = friend.totalTasks;
    els.friendCompletedTasks.value = friend.completedTasks;
    pendingFriendImage = friend.image;
    if (friend.image) showFriendImagePreview(friend.image);
  } else {
    els.friendModalTitle.textContent = t('friendModalAdd');
    els.friendTotalTasks.value = 0;
    els.friendCompletedTasks.value = 0;
    pendingFriendImage = null;
  }

  els.friendModalOverlay.hidden = false;
  els.friendName.focus();
  syncModalOpenClass();
}

function closeFriendModal() {
  els.friendModalOverlay.hidden = true;
  els.friendForm.reset();
  editingFriendId = null;
  resetFriendImageState(true);
  clearFormSubmitState(els.friendForm);
  syncModalOpenClass();
}

function addCategory(name) {
  const trimmed = name.trim();
  if (
    !trimmed ||
    isVirtualAllCategory(trimmed) ||
    isProtectedCategory(trimmed) ||
    categories.includes(trimmed)
  ) {
    return trimmed || getDefaultCategoryName();
  }
  categories.push(trimmed);
  categories = normalizeCategoriesList(categories);
  saveData();
  return trimmed;
}

async function resolveTaskFileFromFile(fileInput, pendingData, pendingName) {
  if (pendingData) {
    return { dataUrl: pendingData, fileName: pendingName || '' };
  }

  const file = fileInput.files[0];
  if (!file) return { dataUrl: '', fileName: '' };

  if (file.size > MAX_FILE_BYTES) throw new Error(t('errImageSize'));
  if (!isAllowedTaskFile(file)) throw new Error(t('errImageType'));

  const dataUrl = await readFileAsDataURL(file);
  return { dataUrl, fileName: file.name };
}

async function resolveFriendImageFromFile(fileInput, pendingData) {
  if (pendingData) return pendingData;

  const file = fileInput.files[0];
  if (!file) return '';

  if (file.size > MAX_FRIEND_IMAGE_BYTES) throw new Error(t('errFriendImageSize'));
  if (!file.type.startsWith('image/')) throw new Error(t('errFriendImageType'));

  return readFileAsDataURL(file);
}

async function addTask(e) {
  e.preventDefault();
  const form = els.taskForm;
  if (!form) return;
  if (!startFormSubmit(form)) return;
  const submitBtn = form.querySelector('button[type="submit"]');

  try {
    const noDue = !!els.taskNoDue?.checked;
    let due = '';
    if (!noDue) {
      setTaskDueMin();
      if (els.taskDue.value) {
        if (els.taskDue.value < todayKey()) {
          els.taskDue.value = todayKey();
        }
        due = els.taskDue.value;
      }
    }

    let image = '';
    let attachmentName = '';
    const resolved = await resolveTaskFileFromFile(
      els.taskImageFile,
      pendingTaskImage,
      pendingTaskFileName
    );
    image = resolved.dataUrl;
    attachmentName = resolved.fileName;

    const reminderEnabled = !noDue && els.taskReminder.checked;
    if (reminderEnabled) await requestNotificationPermission();

    const link = sanitizeUrl(els.taskLink.value.trim());
    const newCategoryName = els.newCategory.value.trim();
    let category = newCategoryName || els.taskCategory.value;
    category = addCategory(category) || getDefaultCategoryName();

    const reminderType = pendingReminder.type;
    const reminderHours =
      reminderType === 'hours' ? pendingReminder.hours : 24;

    tasks.push(
      normalizeTask({
        id: generateId(),
        title: els.taskTitle.value.trim(),
        category,
        due,
        urgency: Number(els.taskUrgency.value),
        difficulty: Number(els.taskDifficulty.value),
        done: false,
        link,
        image,
        attachmentName,
        reminderEnabled,
        reminderType,
        reminderHours,
        lastReminderDate: '',
        lastReminderKey: '',
        createdAt: Date.now(),
      })
    );

    saveData();
    closeTaskModal();
    renderCategories();
    renderTasks();
    checkReminders();
    refreshCalendarIfOpen();
  } catch (error) {
    console.error(error);
    if (error?.message && els.imageError) {
      els.imageError.textContent = error.message;
      els.imageError.hidden = false;
    }
  } finally {
    resetFormSubmit(form, submitBtn);
  }
}

async function saveFriend(e) {
  e.preventDefault();
  const form = els.friendForm;
  if (!form) return;
  if (!startFormSubmit(form)) return;
  const submitBtn = form.querySelector('button[type="submit"]');

  try {
    const total = Math.max(0, Number(els.friendTotalTasks.value) || 0);
    const completed = Math.max(0, Number(els.friendCompletedTasks.value) || 0);

    if (completed > total) {
      els.friendImageError.textContent = t('errCompletedExceeds');
      els.friendImageError.hidden = false;
      return;
    }

    let image = '';
    if (pendingFriendImage !== null) {
      image = pendingFriendImage;
    } else {
      image = await resolveFriendImageFromFile(els.friendImageFile, '');
    }

    const data = {
      name: els.friendName.value.trim(),
      image,
      totalTasks: total,
      completedTasks: completed,
    };

    if (editingFriendId) {
      const friend = friends.find((f) => f.id === editingFriendId);
      if (friend) Object.assign(friend, normalizeFriend({ ...friend, ...data, order: friend.order }));
    } else {
      const nextOrder = friends.length ? Math.max(...friends.map((f) => f.order)) + 1 : 0;
      friends.push(
        normalizeFriend({
          id: generateId(),
          ...data,
          createdAt: Date.now(),
          order: nextOrder,
        })
      );
    }

    syncFriendsOrder();
    saveData();
    closeFriendModal();
    renderFriends();
  } catch (error) {
    console.error(error);
    if (error?.message && els.friendImageError) {
      els.friendImageError.textContent = error.message;
      els.friendImageError.hidden = false;
    }
  } finally {
    resetFormSubmit(form, submitBtn);
  }
}

function toggleDone(id) {
  const task = tasks.find((item) => item.id === id);
  if (task) {
    task.done = !task.done;
    saveData();
    renderTasks();
    refreshCalendarIfOpen();
  }
}

function deleteTask(id) {
  tasks = tasks.filter((item) => item.id !== id);
  saveData();
  renderTasks();
  refreshCalendarIfOpen();
}

function deleteFriend(id) {
  friends = friends.filter((f) => f.id !== id);
  syncFriendsOrder();
  saveData();
  renderFriends();
}

function setLanguage(nextLang) {
  if (nextLang === lang) return;
  lang = nextLang;
  saveLang();
  applyLanguage();
}

function onFabClick() {
  if (activeView === 'tasks') openTaskModal();
  else if (activeView === 'exams') openExamModal();
  else openFriendModal();
}

els.fabAdd.addEventListener('click', onFabClick);

if (els.emptyAddTaskBtn) {
  els.emptyAddTaskBtn.addEventListener('click', () => openTaskModal());
}
if (els.emptyAddExamBtn) {
  els.emptyAddExamBtn.addEventListener('click', () => openExamModal());
}
if (els.emptyAddFriendBtn) {
  els.emptyAddFriendBtn.addEventListener('click', () => openFriendModal());
}
if (els.emptyAddCourseBtn) {
  els.emptyAddCourseBtn.addEventListener('click', () => openScheduleCourseModal());
}

els.taskModalClose.addEventListener('click', closeTaskModal);
els.taskModalCancel.addEventListener('click', closeTaskModal);
els.taskModalOverlay.addEventListener('click', (e) => {
  if (e.target === els.taskModalOverlay) closeTaskModal();
});
els.taskForm.addEventListener('submit', addTask);

if (els.taskNoDue) {
  els.taskNoDue.addEventListener('change', syncTaskDueFields);
}

els.taskReminder.addEventListener('change', async () => {
  syncTaskReminderUI();
  if (els.taskReminder.checked) await requestNotificationPermission();
});

els.taskReminderSettingsBtn?.addEventListener('click', openReminderSheet);
els.reminderSheetClose?.addEventListener('click', closeReminderSheet);
els.reminderSheetDone?.addEventListener('click', () => {
  syncTaskReminderUI();
  closeReminderSheet();
});
els.reminderSheetOverlay?.addEventListener('click', (e) => {
  if (e.target === els.reminderSheetOverlay) closeReminderSheet();
});

document.querySelectorAll('.reminder-picker-option').forEach((btn) => {
  btn.addEventListener('click', () => {
    pendingReminder.type = btn.dataset.reminderType;
    if (
      pendingReminder.type === 'hours' &&
      !REMINDER_HOUR_OPTIONS.includes(pendingReminder.hours)
    ) {
      pendingReminder.hours = REMINDER_HOUR_OPTIONS[0];
    }
    renderReminderPicker();
  });
});

document.querySelectorAll('.reminder-hour-option').forEach((btn) => {
  btn.addEventListener('click', () => {
    pendingReminder.type = 'hours';
    pendingReminder.hours = Number(btn.dataset.reminderHours);
    renderReminderPicker();
  });
});

els.newCategory.addEventListener('input', syncCategoryInputs);
els.taskCategory.addEventListener('change', () => {
  els.newCategory.value = '';
  resetCategoryInputs();
});

els.calendarBtn.addEventListener('click', openCalendarModal);
els.examsCalendarBtn.addEventListener('click', openCalendarModal);
els.calendarModalClose.addEventListener('click', closeCalendarModal);
els.calendarPrevBtn.addEventListener('click', () => shiftCalendarMonth(-1));
els.calendarNextBtn.addEventListener('click', () => shiftCalendarMonth(1));
els.calendarTodayBtn.addEventListener('click', goCalendarToday);
els.calendarModalOverlay.addEventListener('click', (e) => {
  if (e.target === els.calendarModalOverlay) closeCalendarModal();
});
els.calendarExportBtn?.addEventListener('click', () => {
  runGuardedAction(els.calendarExportBtn, () => downloadICS());
});
els.settingsCalendarExportBtn?.addEventListener('click', () => {
  runGuardedAction(els.settingsCalendarExportBtn, () => downloadICS());
});

els.friendModalClose.addEventListener('click', closeFriendModal);
els.friendModalCancel.addEventListener('click', closeFriendModal);
els.friendModalOverlay.addEventListener('click', (e) => {
  if (e.target === els.friendModalOverlay) closeFriendModal();
});
els.friendForm.addEventListener('submit', saveFriend);

els.examModalClose.addEventListener('click', closeExamModal);
els.examModalCancel.addEventListener('click', closeExamModal);
els.examModalOverlay.addEventListener('click', (e) => {
  if (e.target === els.examModalOverlay) closeExamModal();
});
els.examForm.addEventListener('submit', saveExam);
els.examFilesInput.addEventListener('change', async () => {
  const files = Array.from(els.examFilesInput.files || []);
  if (!files.length) return;

  els.examFileError.hidden = true;
  for (const file of files) {
    try {
      const attachment = await createAttachmentFromFile(file);
      pendingExamFiles.push(attachment);
    } catch (err) {
      els.examFileError.textContent = err.message;
      els.examFileError.hidden = false;
    }
  }

  els.examFilesInput.value = '';
  renderExamPendingFiles();
});

els.taskImageFile.addEventListener('change', async () => {
  const file = els.taskImageFile.files[0];
  if (!file) {
    pendingTaskImage = '';
    pendingTaskFileName = '';
    els.imagePreview.hidden = true;
    if (els.filePreviewCard) els.filePreviewCard.hidden = true;
    return;
  }

  if (file.size > MAX_FILE_BYTES) {
    els.imageError.textContent = t('errImageSize');
    els.imageError.hidden = false;
    els.taskImageFile.value = '';
    return;
  }

  if (!isAllowedTaskFile(file)) {
    els.imageError.textContent = t('errImageType');
    els.imageError.hidden = false;
    els.taskImageFile.value = '';
    return;
  }

  try {
    pendingTaskImage = await readFileAsDataURL(file);
    pendingTaskFileName = file.name;
    showTaskAttachmentPreview(pendingTaskImage, pendingTaskFileName);
  } catch {
    els.imageError.textContent = t('errImageRead');
    els.imageError.hidden = false;
  }
});

els.imagePreviewRemove.addEventListener('click', clearTaskImagePreview);

els.friendImageFile.addEventListener('change', async () => {
  const file = els.friendImageFile.files[0];
  if (!file) {
    if (pendingFriendImage === null) els.friendImagePreview.hidden = true;
    return;
  }

  if (file.size > MAX_FRIEND_IMAGE_BYTES) {
    els.friendImageError.textContent = t('errFriendImageSize');
    els.friendImageError.hidden = false;
    els.friendImageFile.value = '';
    return;
  }

  if (!file.type.startsWith('image/')) {
    els.friendImageError.textContent = t('errFriendImageType');
    els.friendImageError.hidden = false;
    els.friendImageFile.value = '';
    return;
  }

  try {
    pendingFriendImage = await readFileAsDataURL(file);
    showFriendImagePreview(pendingFriendImage);
  } catch {
    els.friendImageError.textContent = t('errImageRead');
    els.friendImageError.hidden = false;
  }
});

els.friendImagePreviewRemove.addEventListener('click', () => {
  pendingFriendImage = '';
  clearFriendImagePreview();
});

els.filterBar.querySelectorAll('[data-status]').forEach((btn) => {
  btn.addEventListener('click', () => {
    activeStatus = btn.dataset.status;
    els.filterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderTasks();
  });
});

window.addEventListener('resize', () => {
  updateFilterIndicator();
  updateClock();
});

if (els.dockList) {
  els.dockList.querySelectorAll('.dock-item').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleDockItemClick(btn);
    });
  });
  initDockMagnification();
}

els.langButtons.forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

els.appearanceBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const willOpen = els.appearancePanel.hidden;
  toggleAppearancePanel(willOpen, { fromDock: false });
});

els.themeButtons.forEach((btn) => {
  btn.addEventListener('click', () => setThemeMode(btn.dataset.theme));
});

els.accentSwatches.forEach((swatch) => {
  swatch.addEventListener('click', () => setAccentColor(swatch.dataset.accent));
});

els.statsAddBtn.addEventListener('click', addStatsWidget);
els.statsShowBtn.addEventListener('click', () => {
  widgetPrefs.visible = true;
  saveWidgetPrefs();
  renderStatsWidget();
});
els.statsRemoveBtn.addEventListener('click', removeStatsWidget);
els.statsToggleVisibleBtn.addEventListener('click', toggleStatsVisibility);
els.statsToggleTypeBtn.addEventListener('click', toggleStatsType);

document.addEventListener('click', (e) => {
  if (!els.appearancePanel.hidden && !e.target.closest('.appearance-wrap')) {
    closeAppearancePanel();
  }
});

if (els.settingsModalClose) els.settingsModalClose.addEventListener('click', closeSettingsModal);
if (els.settingsModalOverlay) {
  els.settingsModalOverlay.addEventListener('click', (e) => {
    if (e.target === els.settingsModalOverlay) closeSettingsModal();
  });
}
if (els.settingsProfileForm) els.settingsProfileForm.addEventListener('submit', saveSettingsProfile);
if (els.settingsPasswordForm) els.settingsPasswordForm.addEventListener('submit', changeSettingsPassword);
if (els.settingsLogoutBtn) {
  els.settingsLogoutBtn.addEventListener('click', () => {
    runGuardedAction(els.settingsLogoutBtn, async () => {
      closeSettingsModal();
      logout();
    });
  });
}
if (els.settingsDeleteAccountBtn) {
  els.settingsDeleteAccountBtn.addEventListener('click', handleDeleteAccountClick);
}

if (els.settingsProfileImage) {
  els.settingsProfileImage.addEventListener('change', async () => {
    const file = els.settingsProfileImage.files[0];
    if (!file) return;

    if (els.settingsProfileError) {
      els.settingsProfileError.hidden = true;
      els.settingsProfileError.classList.remove('form-success');
    }

    try {
      shouldRemoveSettingsProfileImage = false;
      pendingSettingsProfileImage = await resolveFriendImageFromFile(els.settingsProfileImage, '');
      showSettingsImagePreview(pendingSettingsProfileImage);
    } catch (err) {
      if (els.settingsProfileError) {
        els.settingsProfileError.textContent = err.message;
        els.settingsProfileError.hidden = false;
      }
      els.settingsProfileImage.value = '';
      pendingSettingsProfileImage = null;
    }
  });
}

if (els.settingsImagePreviewRemove) {
  els.settingsImagePreviewRemove.addEventListener('click', () => {
    shouldRemoveSettingsProfileImage = true;
    pendingSettingsProfileImage = '';
    clearSettingsImagePreview();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeAppearancePanel();
  if (els.reminderSheetOverlay && !els.reminderSheetOverlay.hidden) {
    closeReminderSheet();
    return;
  }
  if (els.settingsModalOverlay && !els.settingsModalOverlay.hidden) closeSettingsModal();
  if (!els.calendarModalOverlay.hidden) closeCalendarModal();
  if (!els.taskModalOverlay.hidden) closeTaskModal();
  if (!els.examModalOverlay.hidden) closeExamModal();
  if (!els.friendModalOverlay.hidden) closeFriendModal();
  if (els.scheduleCourseModalOverlay && !els.scheduleCourseModalOverlay.hidden) {
    closeScheduleCourseModal();
  }
});

applyTheme();
loadUsers();

if (els.loginForm) els.loginForm.addEventListener('submit', handleLogin);
if (els.signupForm) els.signupForm.addEventListener('submit', handleSignup);
if (els.showSignupBtn) els.showSignupBtn.addEventListener('click', showSignupPanel);
if (els.showLoginBtn) els.showLoginBtn.addEventListener('click', showLoginPanel);
if (els.previewWorkspaceBtn) {
  els.previewWorkspaceBtn.addEventListener('click', () => {
    runGuardedAction(els.previewWorkspaceBtn, () => enterPreviewWorkspace());
  });
}
if (els.resetPreviewWorkspaceBtn) {
  els.resetPreviewWorkspaceBtn.addEventListener('click', () => {
    runGuardedAction(els.resetPreviewWorkspaceBtn, () => resetPreviewWorkspace());
  });
}
if (els.logoutBtn) {
  els.logoutBtn.addEventListener('click', () => {
    runGuardedAction(els.logoutBtn, () => logout());
  });
}

if (els.signupProfileImage) {
  els.signupProfileImage.addEventListener('change', async () => {
    const file = els.signupProfileImage.files[0];
    if (!file) {
      pendingSignupProfileImage = '';
      if (els.signupImagePreview) els.signupImagePreview.hidden = true;
      return;
    }

    if (els.signupError) els.signupError.hidden = true;

    try {
      pendingSignupProfileImage = await resolveFriendImageFromFile(els.signupProfileImage, '');
      showSignupImagePreview(pendingSignupProfileImage);
    } catch (err) {
      if (els.signupError) {
        els.signupError.textContent = err.message;
        els.signupError.hidden = false;
      }
      els.signupProfileImage.value = '';
      pendingSignupProfileImage = '';
    }
  });
}

if (els.signupImagePreviewRemove) {
  els.signupImagePreviewRemove.addEventListener('click', clearSignupImagePreview);
}

initScheduleUi();
initAuth();
initAllPasswordToggles();
