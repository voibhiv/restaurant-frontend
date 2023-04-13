import Vue from 'vue'

export default (context, inject) => {
  const showFillFields = () => {
    Vue.prototype.$notify({
      group: 'notifications',
      clean: true
    })
    Vue.prototype.$notify({
        group: 'notifications',
        type: 'error',
        title: 'Favor preencher os campos!',
        text: 'Os campos obrigatórios estão circulados em vermelho!'
    })
  }

  const showLoginError = (mensagem="") => {
    Vue.prototype.$notify({
      group: 'notifications',
      clean: true
    })
    Vue.prototype.$notify({
        group: 'notifications',
        type: 'error',
        title: 'Erro ao fazer login!',
        text: mensagem
    })
  }
  
  Vue.prototype.$showFillFieldsMethod = showFillFields;
  Vue.prototype.$showLoginErrorMethod = showLoginError;
  inject('showFillFields', showFillFields)
  inject('showLoginError', showLoginError)

  
}
