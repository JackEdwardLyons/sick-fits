import Router from 'next/router'
import NProgress from 'nprogress'

const useRouteProgressBar = () => {
  Router.events.on('routeChangeStart', function routeChangeStart() {
    return NProgress.start()
  })

  Router.events.on('routeChangeComplete', function routeChangeComplete() {
    return NProgress.done()
  })

  Router.events.on('routeChangeError', function routeChangeError() {
    return NProgress.done()
  })

  return Router
}

export default useRouteProgressBar
