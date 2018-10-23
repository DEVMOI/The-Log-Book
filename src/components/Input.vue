<template>
    <view>
        <!--v-if="state === 'edit'"-->
        <text-input
                auto-correction
                class="inputStyle"
                placeholder="What to Add"
                v-model="textContent"
                @keyup.enter="saveItem"
        />
        <text class="characterCountText">{{characterCount}}</text>
    </view>
</template>

<script>
    export default {
        name: "Input",
        data(){
            return{
                textContent: ''
            };
        },
        computed:{
            characterCount(){
                return this.textContent.length;
            }
        },

    }
</script>

<style scoped>
    .inputStyle{
        height: 40px;
        border-width: 2px;
        border-color: #eee;
        padding: 5px;
    }
    .characterCountText{
        font-family: monospace;
        margin: 5px 1px;
        padding: 5px;
    }
</style>