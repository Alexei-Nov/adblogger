import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  preloaderInit: false,
  registrationBtn: {
    text: 'Перейти в кабинет',
    link: '/app'
  },
  footer: {
    title: 'О компании',
    desc: 'VK AdBlogger — платформа для&nbsp;сотрудничества авторов и&nbsp;рекламодателей, на&nbsp;которой можно продавать рекламу в&nbsp;сообществах ВКонтакте ',
    nav: [],
  },
  pages: [],
  cases: [],
  blog: []
}


const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: defaultState,
  reducers: {
    setPreloaderInit(state, action) {
      state.preloaderInit = action.payload
    },
    setPages(state, action) {
      state.pages = [...state.pages, action.payload]
    },
    setCases(state, action) {
      state.cases = action.payload
    },
    setCase(state, action) {
      state.cases = [...state.cases, action.payload]
    },
    setFooterNav(state, action) {
      state.footer.nav = action.payload
    },
    setBlogArticles(state, action) {
      state.blog = action.payload
    },
  }
})

export default toolkitSlice.reducer
export const { setPreloaderInit, setPages, setCase, setCases, setFooterNav, setBlogArticles } = toolkitSlice.actions