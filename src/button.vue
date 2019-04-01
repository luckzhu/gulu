<template>
        <button class="g-button">
            <slot></slot>
        </button>
</template>

<script>
    export default {}
</script>

<style>
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: var(--padding);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        vertical-align: middle;
        color: var(--color);
    }
</style>