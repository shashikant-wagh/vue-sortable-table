const DEFAULT_CONFIG = {
    group: "name",
    sort: true,
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: 0,
    disabled: false,
    store: null,
    animation: 150,
    easing: "cubic-bezier(1, 0, 0, 1)",

    filter: ".ignore-elements",
    preventOnFilter: true,
    draggable: "tbody > tr",
    // draggable: ".item",

    dataIdAttr: 'data-id',

    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",

    swapThreshold: 1,
    invertSwap: false,
    invertedSwapThreshold: 1,
    direction: 'horizontal',

    forceFallback: false,

    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,

    dragoverBubble: false,
    removeCloneOnHide: true,
    emptyInsertThreshold: 5,

    setData: (dataTransfer, dragEl) => {
        dataTransfer.setData('Text', dragEl.textContent);
    },
    onEnd: () => {},
    onAdd: () => {},
    onSort: () => {},
    onMove: () => {},
    onClone: () => {},
    onStart: () => {},
    onChange: () => {},
    onFilter: () => {},
    onUpdate: () => {},
    onRemove: () => {},
    onChoose: () => {},
    onUnchoose: () => {},
};

export const getConfig = (config) => {
	return Object.fromEntries(
		Object
			.entries(DEFAULT_CONFIG)
			.map(([key, value]) => [key, config.hasOwnProperty(key) ? config[key] : value])
	)
};

export const sanitize = object => JSON.parse(JSON.stringify(object));
export const isEqualsTo = (object1, object2) => JSON.stringify(object1) === JSON.stringify(object2);