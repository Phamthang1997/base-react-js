import {
  HistoryOutlined,
  RobotOutlined,
  QuestionCircleOutlined,
  BookOutlined,
  ReadOutlined,
  TagsOutlined,
  TagOutlined,
  ProfileOutlined,
  FileDoneOutlined,
  ContainerOutlined,
  TeamOutlined,
  CloudUploadOutlined
} from '@ant-design/icons'

import {
  ICON_HOME_MENU,
  ICON_COMPANY,
  ICON_USER,
  ICON_USERS,
  ICON_LIBRARY,
  ICON_COURSE_RESULT,
  ICON_PEN_TOOL,
  ICON_QUESTION,
  ICON_SEND,
  ICON_SETTING_MENU,
  ICON_GROUP_MENU,
  FOLDER_ICON
} from 'Assets'
import { USER_ROLE } from 'Constants/auth'

const RoutesName = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  COMPANY: '/company-management',
  COMMUNITY: '/community-management',

  USER: '/user-management',
  BATCH_USER_REGISTER: '/user-management/batch_register',
  USER_MANAGEMENT: '/user-management/user',
  GROUP_MANAGEMENT: '/user-management/group',
  ATTRIBUTE_MANAGEMENT: '/user-management/attribute',
  LOGIN_HISTORY: '/user-management/login-history',

  CONTACT: '/contact-management',

  COURSE: '/course-management',
  COURSE_CATEGORY: '/course-management/lesson-cate',
  COURSE_MANAGEMENT: '/course-management/lesson-course',
  COURSE_UNIT_SETTING: '/course-management/unit-settings',
  COURSE_UPLOAD_FILE: '/course-management/upload-file',
  COURSE_ASSIGNMENT: '/course-management/auto-assignment',
  COURSE_TEST_QUESTION: '/course-management/test-question-management',
  COURSE_ISSUE_PERMISSION: '/course-management/user-learning-lesson/create',
  COURSE_PERMISSION_MANAGEMENT: '/course-management/user-learning-lesson',

  COURSE_RESULT: '/course-result',
  STATUS_LEARN_COURSE: '/course-result/status-learn-course',
  UNIT_LEARN_COURSE: '/course-result/unit-learn-course',
  TEST_RESULTS: '/course-result/test-results',
  SURVEY_ANSWER: '/course-result/survey-answer',
  STATISTICAL_RESULTS_OF_SURVEY: '/course-result/statistical-results-of-survey',
  REPORT_HISTORIES: '/course-result/report-histories',
  EVALUATE_REPORT: '/course-result/evaluate-report',

  INQUIRY: '/inquiry-management',
  LIBRARY: '/library-management',
  SETTINGS: '/site-settings'
}

export const MenuList = [
  {
    Icon: ICON_HOME_MENU,
    title: 'home',
    pathName: RoutesName.HOME,
    fill: 'text_hight_light',
    stroke: 'none',
    key: 'home',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    Icon: ICON_COMPANY,
    title: 'company',
    pathName: RoutesName.COMPANY,
    fill: 'text_hight_light',
    stroke: 'none',
    key: 'company-management',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    Icon: ICON_USER,
    title: 'user',
    fill: 'text_hight_light',
    stroke: 'none',
    key: 'user-management',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN],
    children: [
      {
        Icon: ICON_USER,
        title: 'user_management',
        pathName: RoutesName.USER_MANAGEMENT,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'user',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: CloudUploadOutlined,
        title: 'batch_register',
        pathName: RoutesName.BATCH_USER_REGISTER,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'user',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: TeamOutlined,
        title: 'group_management',
        pathName: RoutesName.GROUP_MANAGEMENT,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'group',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: TagOutlined,
        title: 'attribute_management',
        pathName: RoutesName.ATTRIBUTE_MANAGEMENT,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'attribute',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: HistoryOutlined,
        title: 'login_history',
        pathName: RoutesName.LOGIN_HISTORY,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'login-history',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      }
    ]
  },
  {
    Icon: ICON_SEND,
    title: 'contact',
    pathName: RoutesName.CONTACT,
    fill: 'none',
    stroke: 'text_hight_light',
    key: 'contact-management',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN],
    children: [
      {
        Icon: ICON_USER,
        title: 'category',
        pathName: RoutesName.USER_MANAGEMENT,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'category',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: ICON_GROUP_MENU,
        title: 'course',
        pathName: RoutesName.GROUP_MANAGEMENT,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'course',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      }
    ]
  },
  {
    Icon: ICON_PEN_TOOL,
    title: 'course',
    fill: 'none',
    stroke: 'text_hight_light',
    key: 'course-management',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN],
    children: [
      {
        Icon: TagsOutlined,
        title: 'registration_course_categories',
        pathName: RoutesName.COURSE_CATEGORY,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'category',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: BookOutlined,
        title: 'registration_courses',
        pathName: RoutesName.COURSE_MANAGEMENT,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'course',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: ReadOutlined,
        title: 'unit_settings',
        pathName: RoutesName.COURSE_UNIT_SETTING,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'unit',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: FOLDER_ICON,
        title: 'upload_file',
        pathName: RoutesName.COURSE_UPLOAD_FILE,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'file',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: RobotOutlined,
        title: 'auto_assignment',
        pathName: RoutesName.COURSE_ASSIGNMENT,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'assignment',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: QuestionCircleOutlined,
        title: 'test_question',
        pathName: RoutesName.COURSE_TEST_QUESTION,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'test',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: HistoryOutlined,
        title: 'issue_status_permissions',
        pathName: RoutesName.COURSE_PERMISSION_MANAGEMENT,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'attend-permit',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      }
    ]
  },
  {
    Icon: ICON_COURSE_RESULT,
    title: 'course_result',
    fill: 'none',
    stroke: 'text_hight_light',
    key: 'course-results',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN],
    children: [
      {
        Icon: BookOutlined,
        title: 'status_learn_course_of_user',
        pathName: RoutesName.STATUS_LEARN_COURSE,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'status_learn_course_of_user',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: ReadOutlined,
        title: 'unit_learn_course_of_user',
        pathName: RoutesName.UNIT_LEARN_COURSE,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'unit_learn_course_of_user',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: QuestionCircleOutlined,
        title: 'test_results',
        pathName: RoutesName.TEST_RESULTS,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'test_results',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: FileDoneOutlined,
        title: 'statistical_results_of_survey',
        pathName: RoutesName.STATISTICAL_RESULTS_OF_SURVEY,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'statistical_results_of_survey',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: ProfileOutlined,
        title: 'survey_answer',
        pathName: RoutesName.SURVEY_ANSWER,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'survey_answer',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      },
      {
        Icon: ContainerOutlined,
        title: 'report_histories',
        pathName: RoutesName.REPORT_HISTORIES,
        fill: 'none',
        stroke: 'text_hight_light',
        key: 'report_histories',
        rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
      }
    ]
  },
  {
    Icon: ICON_USERS,
    title: 'community',
    pathName: RoutesName.COMMUNITY,
    fill: 'text_hight_light',
    stroke: 'none',
    key: 'community-management',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    Icon: ICON_QUESTION,
    title: 'inquiry',
    pathName: RoutesName.INQUIRY,
    fill: 'text_hight_light',
    stroke: 'none',
    key: 'inquiry-management',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    Icon: ICON_LIBRARY,
    title: 'library',
    pathName: RoutesName.LIBRARY,
    fill: 'text_hight_light',
    stroke: 'none',
    key: 'library-management',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    Icon: ICON_SETTING_MENU,
    title: 'settings',
    pathName: RoutesName.SETTINGS,
    fill: 'text_hight_light',
    stroke: 'none',
    key: 'site-settings',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  }
]
