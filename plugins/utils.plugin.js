
export default (context, inject) => {
  const isMobile = () => {
    try {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
  const isApple = () => {
    try {
      if(/iPhone|iPad/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }

  const redirect = (route="", href="", event=null) => {
    if(event){
      if(route){
        if (event.ctrlKey || event.metaKey) {
          window.open(route, '_blank');
        } else {
          context.app.router.push(route)
        }
      } else if( href ) {
        try {
          if (event.ctrlKey || event.metaKey) {
            window.open(href, '_blank');
          } else {
            window.open(href, '_blank').focus();
          }
        } catch (e) {
          window.location.assign(href);
        }
      }
    } else {
      if(route){
        context.app.router.push(route)
      } else if( href ) {
        try {
          window.open(href, '_blank').focus();
        } catch (e) {
          window.location.assign(href);
        }
      }
    }
  }

  inject('isMobile', isMobile)
  inject('isApple', isApple)
  inject('redirect', redirect)
};