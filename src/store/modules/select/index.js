export default {
    namespaced: true,
    state: {
        isMobile: false,
        isDesktop: true
    },
    getters: {
        getIsMobile(state) {
            return state.isMobile;
        },
        getIsDesktop(state) {
            return state.isDesktop;
        }
    },
    mutations: {
        switchMobile(state) {
            state.isMobile = true;
            state.isDesktop = false;
        },
        switchDesktop(state) {
            state.isDesktop = true;
            state.isMobile = false;
        },
    },
    actions: {
        setMobile(ctx) {
            ctx.commit('switchMobile');
        },
        setDesktop(ctx) {
            ctx.commit('switchDesktop');
        }
    }
}