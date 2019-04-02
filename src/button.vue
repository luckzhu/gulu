<template>

        <button class="g-button" v-bind:class="{[iconPosition]:true}" >
            <g-icon v-if="icon" v-bind:name="icon"></g-icon>
            <div class="content">
                <slot></slot>
            </div>
        </button>

</template>

<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>

<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        color: var(--color);
        padding: 0 1em;
        vertical-align: middle;

        height: var(--button-height);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);

        display: inline-flex;
        justify-content: center;
        align-items: center;

        &.left {
            >.g-icon {order: 1; margin-left: 0; margin-right: .4em;}
            >.content {order: 2;}
        }

        &.right {
            >.g-icon {order: 2; margin-left: .4em; margin-right: 0;}
            >.content {order: 1;}
        }

        &:hover {border: 1px solid var(--border-hover-color);}
        &:active {background: var(--border-active-bg);}
        &:focus {outline: none;}
    }
</style>