export default (context, inject) => {

  const telephoneMask = (str) => {
    if(str){
      if(str.replace(/\D/g, "").length > 10 ){
        return '(##) #####-####'
      } else {
        return '(##) ####-####'
      }
    } else {
      return ''
    }
  }

  const emailValidator = (str) => {
    if(str==""){
      return false
    } else {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(str)
    }
  }

  inject('telephoneMask', telephoneMask)
  inject('emailValidator', emailValidator)

}
