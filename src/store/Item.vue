<template>
    <div>
        Item id: {{item.id}} - selected: {{ item.id === currentlySelectedId }}
    </div>
</template>

<script>
export default {
    name: "Item",
    props: {
        item: Object,
    },
    computed: {
        currentlySelectedId() {
            return this.$store.getters["currentlySelectedId"];
        },
    },
}
</script>
