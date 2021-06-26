export const state = {
  tasks: [],
  selectedTask: {}
}

export const getters = {}

export  const mutations = {
  setTasks(state, payload) {
    state.tasks = payload
  },
  setSelectedTask(state, payload) {
    state.selectedTask = payload
  }
}

export const actions = {
  index ({ dispatch, commit }) {
    dispatch(
      'http/get',
      {
        url: '/api/tasks'
      },
      {
        root: true
      },
    ).then((res) => {
      commit('setTasks', res.data)
    })
  },
  show ({ dispatch, commit }, id) {
    dispatch(
      'http/get',
      {
        url: '/api/tasks/' + id
      },
      {
        root: true
      },
    ).then((res) => {
      commit('setSelectedTask', res.data)
    })
  },
  store ({ dispatch }, data) {
    return dispatch(
      'http/post',
      {
        url: '/api/tasks',
        data
      },
      {
        root: true
      }
    )
  },
  update ({ dispatch }, task) {
    const id = task.id
    const data = task.data
    return dispatch(
      'http/put',
      {
        url: '/api/tasks/' + id,
        data
      },
      {
        root: true
      }
    )
  },
  delete ({ dispatch }, id) {
    dispatch(
      'http/delete',
      {
        url: '/api/tasks/' + id
      },
      {
        root: true
      }
    ).then(() => {
      dispatch('index')
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
