<template>
    <div class="wrapper" v-bind:class="{'error': error}">
        <input type="text" v-bind:value="value" v-bind:disabled="disabled" v-bind:readonly="readonly"
            v-on:change="$emit('change',$event.target.value)"
            v-on:focus="$emit('focus',$event.target.value)"
            v-on:blur="$emit('blur',$event.target.value)"
            v-on:input="$emit('input',$event.target.value)"
        >
        <template v-if="error">
            <g-icon name="error"></g-icon>
            <span class="errorMessage">{{error}}</span>
        </template>

    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        name: "GuluInput",
        components: {
            'g-icon': Icon
        },
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    $red: #f1453d;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 14px;

    .wrapper {
        font-size: 14px;
        color: #333;
        display: inline-flex;
        align-items: center;
        font-size: $font-size;
        > :not(:last-child) {
            margin-right: 0.5em;
        }

        > input {
            border: 1px solid $border-color;
            height: 32px;
            width: 128px;
            padding: 0 8px;
            border-radius: $border-radius;
            font-size: inherit;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px 0px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: $red;
            }


        }
        > svg {
            fill: $red;
        }
        > .errorMessage {
            color: $red;
        }
    }
</style>