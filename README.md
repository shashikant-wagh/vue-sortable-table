<h2 align="center">VueSortableTable</h2>
![](https://github.com/shashikant-wagh/vue-sortable-table/blob/main/vue3-app.gif)



## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#install)
- [Usage](#usage)
- Configuration
  - [Props](#props)
  - [Events](#events)
  - [Slots](#slots)
- [Example](#example)

## Introduction <a name = "introduction"></a>
VueDatatableEle is an Vue 3 sortable/ draggable table component.\
VueDatatableEle is a MIT-licensed open source project.\
Tested in Firefox, Safari, Chrome, Opera, Internet Explorer 8+. \
VueSortableTable is lightweight and highly configurable which makes its useful in number of situations.

## Features <a name = "features"></a>
* Lightweight.
* Highly configurable.
* Pagination.
* Easily to hooked in on Bootstrap.
* No jQuery or other dependencies.

## Installation <a name = "install"></a>
```
npm install vue-sortable-table
```

## Usage <a name = "usage"></a>
```
import VueSortableTable from 'vue-sortable-table'
```

## Props <a name = "props"></a>

| Prop                | Type          | Description                   |
|---------------------|---------------|-------------------------------|
| v-model             | Array         | Array of table rows.          |
| columns             | Array         | Array of table column names.  |
| actions             | Object        | Array of table actions if any, check the example below for the defination.|
| paginate            | Object        | Data required for pagination, check the example below for the defination.|
| tableClass          | String        | Custom table class.            |
| withPagination      | Boolean       | Adds pagination to table. |
| sortableConfig      | Object        | Check Below. |


### sortableConfig <a href="https://github.com/SortableJS/Sortable"> more details </a>
```js
{
	group: "name",  // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
	sort: true,  // sorting inside list
	delay: 0, // time in milliseconds to define when the sorting should start
	delayOnTouchOnly: false, // only delay if user is using touch
	touchStartThreshold: 0, // px, how many pixels the point should move before cancelling a delayed drag event
	disabled: false, // Disables the sortable if set to true.
	store: null,  // @see Store
	animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
	easing: "cubic-bezier(1, 0, 0, 1)", // Easing for animation. Defaults to null. See https://easings.net/ for examples.
	handle: ".my-handle",  // Drag handle selector within list items
	filter: ".ignore-elements",  // Selectors that do not lead to dragging (String or Function)
	preventOnFilter: true, // Call `event.preventDefault()` when triggered `filter`
	draggable: ".item",  // Specifies which items inside the element should be draggable

	dataIdAttr: 'data-id', // HTML attribute that is used by the `toArray()` method

	ghostClass: "sortable-ghost",  // Class name for the drop placeholder
	chosenClass: "sortable-chosen",  // Class name for the chosen item
	dragClass: "sortable-drag",  // Class name for the dragging item

	swapThreshold: 1, // Threshold of the swap zone
	invertSwap: false, // Will always use inverted swap zone if set to true
	invertedSwapThreshold: 1, // Threshold of the inverted swap zone (will be set to swapThreshold value by default)
	direction: 'horizontal', // Direction of Sortable (will be detected automatically if not given)

	forceFallback: false,  // ignore the HTML5 DnD behaviour and force the fallback to kick in

	fallbackClass: "sortable-fallback",  // Class name for the cloned DOM Element when using forceFallback
	fallbackOnBody: false,  // Appends the cloned DOM Element into the Document's Body
	fallbackTolerance: 0, // Specify in pixels how far the mouse should move before it's considered as a drag.

	dragoverBubble: false,
	removeCloneOnHide: true, // Remove the clone element when it is not showing, rather than just hiding it
	emptyInsertThreshold: 5, // px, distance mouse must be from empty sortable to insert drag element into it


	// Element is chosen
	onChooseHandler: function (/**Event*/evt) {
		evt.oldIndex;  // element index within parent
	},

	// Element is unchosen
	onUnchooseHandler: function(/**Event*/evt) {
		// same properties as onEnd
	},

	// Element dragging started
	onStartHandler: function (/**Event*/evt) {
		evt.oldIndex;  // element index within parent
	},

	// Element dragging ended
	onEndHandler: function (/**Event*/evt) {
		var itemEl = evt.item;  // dragged HTMLElement
		evt.to;    // target list
		evt.from;  // previous list
		evt.oldIndex;  // element's old index within old parent
		evt.newIndex;  // element's new index within new parent
		evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
		evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
		evt.clone // the clone element
		evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
	},

	// Element is dropped into the list from another list
	onAddHandler: function (/**Event*/evt) {
		// same properties as onEnd
	},

	// Changed sorting within list
	onUpdateHandler: function (/**Event*/evt) {
		// same properties as onEnd
	},

	// Called by any change to the list (add / update / remove)
	onSortHandler: function (/**Event*/evt) {
		// same properties as onEnd
	},

	// Element is removed from the list into another list
	onRemoveHandler: function (/**Event*/evt) {
		// same properties as onEnd
	},

	// Attempt to drag a filtered element
	onFilterHandler: function (/**Event*/evt) {
		var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
	},

	// Event when you move an item in the list or between lists
	onMoveHandler: function (/**Event*/evt, /**Event*/originalEvent) {
	    // Example: https://jsbin.com/nawahef/edit?js,output
		evt.dragged; // dragged HTMLElement
		evt.draggedRect; // DOMRect {left, top, right, bottom}
		evt.related; // HTMLElement on which have guided
		evt.relatedRect; // DOMRect
		evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
		originalEvent.clientY; // mouse position
		// return false; — for cancel
		// return -1; — insert before target
		// return 1; — insert after target
		// return true; — keep default insertion point based on the direction
		// return void; — keep default insertion point based on the direction
	},

	// Called when creating a clone of element
	onCloneHandler: function (/**Event*/evt) {
		var origEl = evt.item;
		var cloneEl = evt.clone;
	},

	// Called when dragging element changes position
	onChangeHandler: function(/**Event*/evt) {
		evt.newIndex // most likely why this event is used is to get the dragging element's current index
		// same properties as onEnd
	}
}
```



## Events <a name = "events"></a>

| Event               | Description                   |
|---------------------|------------------------------|
| pageChanged         | Event occer when click on pagination links  |


## Slots <a name = "slots"></a>

| Name                | Data                   | Default Action                           | Description                             |
|---------------------|------------------------|------------------------------------------|-----------------------------------------|
| table-header        |                        |                                          | Opens on top of the table.    |
| table-head          | showColumn, showAction | Renders table heading from columns prop. | Opens table heading thead.  |
| table-body          |                        |                                          | Opens table body tbody.     |

## Example <a name = "example"></a>
```
<template>
    <vue-sortable-table
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
            <tr
                v-for="(record, index) in records"
                class="table-row"
            >
                <td
                    v-if="showAction('edit')"
                    class="drag">
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
    </vue-sortable-table>
</template>


<script>

    import VueSortableTable from 'vue-sortable-table'

    export default {
        components: {VueSortableTable},

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
                    total: 10,
                },
                records: [{...}, {...}, {...}],
            }
        }
    }

</script>

```
