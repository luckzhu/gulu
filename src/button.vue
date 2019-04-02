<template>

        <button class="g-button" v-bind:class="{[iconPosition]:true}" v-on:click="x">
            <g-icon v-if="loading" class="loading" name="loading"></g-icon>
            <g-icon v-if="icon && !loading" v-bind:name="icon"></g-icon>
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
            },
            loading: {
                type: Boolean,
                default: false,
            }
        },
        methods: {
            x(){
                this.$emit('click')
            }
        }


    }
</script>

<style lang="scss">
    @keyframes loadingRotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
           }
    }

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

        >.loading {
            animation: loadingRotation 2s linear infinite;
        }

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