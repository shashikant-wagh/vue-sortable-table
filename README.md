<h2 align="center">VueSortableTable</h2>

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#install)
- [Usage](#usage)
- [Configuration](#configuration)
- [Events](#events)
- [Example](#example)

## Introduction <a name = "introduction"></a>
VueDatatableEle is an Vue 3 sortable/ draggable table component.\
VueDatatableEle is a MIT-licensed open source project.\
Tested in Firefox, Safari, Chrome, Opera, Internet Explorer 8+.
VueSortableTable is lightweight and highly configurable which makes its useful in number of situations.

## Features <a name = "features"></a>
* Lightweight.
* Highly configurable.
* In built pagination.
* Easily to hooked in on Bootstrap.
* No jQuery or other dependencies.

## Installation <a name = "install"></a>
```
npm install vue-datatable-ele
```

## Usage <a name = "usage"></a>
```
import VueDatatableEle from 'vue-datatable-ele'
```

## Configuration <a name = "configuration"></a>

| Prop                | Type          | Description                   |
|---------------------|---------------|-------------------------------|
| v-model             | Array         | Array of table rows.          |
| columns             | Array         | Array of table column names.  |
| actions             | Object        | Array of table actions if any, check the example below for the defination.|
| paginate            | Object        | Data required for pagination, check the example below for the defination.|
| tableClass          | String        | Custom table class            |
| withoutPagination   | Boolean       | Removes pagination from table |

## Events <a name = "events"></a>

| Event               | Description                   |
|---------------------|------------------------------|
| pageChanged         | Event occer when click on pagination links  |

## Example <a name = "example"></a>
```
<template>
    <vue-datatable-ele
        v-model="records"
        :columns="columns"
        :actions="actions"
        :paginate="paginate"
        :tableClass="'table table-bordered table-responsive'"
        @pageChanged="api.page = $event"
    >
        <template v-slot:table-header>
            <div class="row">
                <div class="col">
                    <h3>Users Table</h3>
                </div>
            </div>
        </template>

        <template v-slot:table-body="{showColumn, showAction}">
            <tr v-for="(record, index) in records">
                <td v-if="showAction('edit')">
                    <a href="">Edit</a>
                </td>
                <td v-if="showAction('delete')">
                    <a href="">Delete</a>
                </td>
                <td
                    v-if="showColumn('Id')"
                    class="text-center"
                >
                    {{ record.id }}
                </td>
                <td v-if="showColumn('First Name')"> {{ record.first_name }} </td>
                <td v-if="showColumn('Last Name')"> {{ record.last_name }} </td>
                <td v-if="showColumn('Email')"> {{ record.email }} </td>
            </tr>
        </template>
    </vue-datatable-ele>
</template>


<script>
    import VueDatatableEle from 'vue-datatable-ele'

    export default {
        components: {VueDatatableEle},

        data() {
            return {
                columns: [
                    'Id',
                    'First Name',
                    'Last Name',
                    'Email',
                ],
                actions: {
                    'edit': true,
                    'delete': true,
                },
                paginate: {
                    page: 1,
                    limit: 6,
                    total: 0,
                },
                records: [],
            }
        },

        watch: {
            'paginate.page': 'fetch'
        },

        methods: {
            fetch() {
                // fetch and set records.
            }
        },

        created() {
            this.fetch();
        }
    }

</script>
```
