import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    login: {
      title: 'Welcome Back!',
      subTitle: 'Welcome back! Please enter your details.',
      email: 'Email',
      password: 'Password',
      button: 'Login',
      alert: {
        success: {
          message: 'Login Success!'
        },
        error: {
          message: 'Wrong Email or Password!'
        }
      }
    }
  },
  zh_tw: {
    login: {
      title: '歡迎回來!',
      subTitle: '歡迎回來! 請輸入您的詳細信息。',
      email: '電子郵件',
      password: '密碼',
      button: '登錄',
      alert: {
        success: {
          message: '登入成功!'
        },
        error: {
          message: '錯誤的電子郵件或密碼!'
        }
      }
    }
  },
  ja: {
    login: {
      title: 'おかえりなさい!',
      subTitle: 'おかえりなさい！ 詳細を入力してください。',
      email: 'メール',
      password: 'パスワード',
      button: 'ログイン',
      alert: {
        success: {
          message: 'ログイン成功!'
        },
        error: {
          message: '間違ったメールアドレスまたはパスワード!'
        }
      }
    }
  }
}

const i18n = createI18n({
  locale: 'zh_tw',
  fallbackLocale: 'zh_tw',
  messages
})

export default i18n
