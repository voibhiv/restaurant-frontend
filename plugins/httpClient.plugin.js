import Vue from 'vue';
import axios from 'axios';

export default function ({ $axios, $config }, inject) {
    // Create a custom axios instance
    const httpClient = $axios.create({
        baseURL: $config.VUE_APP_API_URL,
        timeout: 50000, // indicates, 50000ms ie. 50 seconds
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "origin"
        }
    });
    
    const httpClientFormData = $axios.create({
        baseURL: $config.VUE_APP_API_URL,
        timeout: 50000, // indicates, 50000ms ie. 50 seconds
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "origin"
        }
    });

    
    // interceptor to catch errors
    const errorInterceptor = error => {
        // check if it's a server error
            
        if (!error.response) {
    
            Vue.prototype.$notify({
                group: 'notifications',
                clean: true
            })    
            Vue.prototype.$notify({
                group: 'notifications',
                type: 'error',
                title: 'Erro de conexão com o servidor!',
                text: 'Por favor, entre em contato conosco ou tente mais tarde!'
            })
            return Promise.reject(error);
        }
    
        // all the other error responses
        switch(error.response.status) {
            // case 400:
            //     console.error(error.response.status, error.message);
            //     console.log('Nothing to display','Data Not Found');
            //     break;
    
            case 401: // authentication error, logout the user
                localStorage.removeItem('oab-ws-user-info');
                
                return error.response.data;
    
                break;
            
            case 404: // authentication error, logout the user
    
                Vue.prototype.$notify({
                    group: 'notifications',
                    clean: true
                })    
                Vue.prototype.$notify({
                    group: 'notifications',
                    type: 'error',
                    title: 'Rota não encontrada!',
                    text: 'Por favor, entre em contato conosco!'
                })
                localStorage.removeItem('token');
                router.push('/auth');
                break;
    
            default:
            
                Vue.prototype.$notify({
                    group: 'notifications',
                    clean: true
                })    
                Vue.prototype.$notify({
                    group: 'notifications',
                    type: 'error',
                    title: 'Erro de conexão com o servidor!',
                    text: 'Erro: '+error.response.status+'. Por favor entre em contato conosco ou tente mais tarde!'
                })
    
        }
        return Promise.reject(error);
    }
    
    // Interceptor for responses
    const responseInterceptor = response => {
        let data = null;
        switch(response.status) {
            case 200: case 206: 
                if(response.data){
                    data = response.data;
                } else {
                    Vue.prototype.$notify({
                        group: 'notifications',
                        clean: true
                    })
                    Vue.prototype.$notify({
                        group: 'notifications',
                        type: 'error',
                        title: 'Erro de conexão com o servidor!',
                        text: 'Por favor, entre em contato conosco!'
                    })
                }
                break;
            
            // any other cases
            default:
                // default case
        }
    
        return data;
    }
    
    httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);
    httpClientFormData.interceptors.response.use(responseInterceptor, errorInterceptor);
    
    Vue.prototype.$httpClient = httpClient;
    Vue.prototype.$httpClientFormData = httpClientFormData;

    // inject('httpClient', httpClient)
    // inject('httpClientFormData', httpClientFormData)
}
 