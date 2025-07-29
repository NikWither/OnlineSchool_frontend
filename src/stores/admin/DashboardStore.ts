import { defineStore } from "pinia";
import { reactive } from "vue";

export const useDashboardStore = defineStore("dashboard", () => {
    // state
    const dashboardInfo = reactive({
        'users': '',
        'courses': '',
        'tasks': '',
        
    })
});