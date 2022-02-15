<template>
    <div class="container mt-5">
        <vue-datatable-ele
            v-model="records"
            :columns="columns"
            :actions="actions"
            :paginate="paginate"
            :tableClass="tableClass"
            :withoutPagination="!withPagination"
            @pageChanged="$emit('pageChanged', $event)"
        >
            <template v-slot:table-header>
                <slot name="table-header" />
            </template>

            <template v-slot:table-body="{showColumn, showAction}">
                <slot
                    name="table-body"
                    :showColumn="showColumn"
                    :showAction="showAction"
                />
            </template>
        </vue-datatable-ele>
    </div>
</template>


<script>
    import {sanitize, isEqualsTo, getConfig} from './utils.js';

    import Sortable from 'sortablejs';
    import VueDatatableEle from 'vue-datatable-ele';

    export default {
        name: 'VueSortableTable',

        props: {
            columns: Array,
            actions: Object,
            paginate: Object,
            modelValue: Array,
            tableClass: String,
            sortableConfig: Object,
            withPagination: Boolean,
        },

        components: {VueDatatableEle},

        data() {
            return {
                ele: null,
                records: [],
            }
        },

        watch: {
            modelValue: {
                handler(newValue) {
                    if(!isEqualsTo((newValue || []), this.records)) {
                        this.records = sanitize(newValue);
                    }
                },
                immediate: true,
            },

            records: {
                handler(newValue) {
                    if(!isEqualsTo((newValue || []), this.value)) {
                        this.$emit('update:modelValue', sanitize(newValue));
                    }
                },
            }
        },

        methods: {
            initialize() {
                this.ele = Sortable.create(
                    document.querySelectorAll('tbody')[0],
                    getConfig(this.sortableConfig || {})
                );
            }
        },

        mounted() {
            this.initialize();
        }
    }

</script>