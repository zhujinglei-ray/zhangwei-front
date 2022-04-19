import requestService from "@/api/request/request";

export const testApi = () => {
    return requestService({
        url: '/credit/score/test',
        method: 'post',
    })
}


export const lrPredict = (data:Object) => {
    return requestService({
        url: '/credit/score/lr',
        method: 'post',
        data
    })
}


export const dtPredict = (param: Object) => {
    return requestService({
        url: '/credit/score/dt',
        method: 'post',
        data: param
    })
}


export const rfPredict = (param: Object) => {
    return requestService({
        url: '/credit/score/rf',
        method: 'post',
        data: param
    })
}


export const annPredict = (param: Object) => {
    return requestService({
        url: '/credit/score/ann',
        method: 'post',
        data: param
    })
}