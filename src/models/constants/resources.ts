/* eslint-disable max-len */
export const resources = {
  avatar: {
    cardIcon: 'Chat icon',
    messageAuthor: 'Author avatar',
    default: 'Avatar',
  },
  messages: {
    serviceMessage: 'service-message',
    messageWrap: 'message-wrap',
  },
  auth: {
    actions: {
      signIn: 'login',
      signUp: 'sign up',
    },
    link: {
      signIn: 'Doesn\'t have an account?',
      signUp: 'Already have an account?',
    },
    validation: {
      required: '{{FIELD}} is required',
      forbiddenFieldThreeChars: 'Forbidden {{FIELD}}. {{FIELD}} must contain minimum three characters: letters, numbers, hyphen or underscore',
      forbiddenFieldEightChars: 'Forbidden {{FIELD}}. {{FIELD}} must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    },
  },
};
