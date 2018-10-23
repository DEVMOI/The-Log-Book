<template>
    <view class='headerContainer'>
        <text class="headerText">
            {{headerText}}
        </text>
        <text class="subHeaderText">
            {{subHeaderText}}
        </text>
    </view>
</template>

<script>
    export default {
        name: 'Header',
        props:{
            headerText:String,
            subHeaderText:String
        }
    }
</script>

<style scoped>
    .headerContainer {
        margin-top: 25px;
        padding: 50px 25px;
        align-self: center;
    }
    .headerText{
        font-family: monospace;
        font-size: 36px;
        text-align: center;
        font-weight: bold;
    }
    .subHeaderText{
        font-family: monospace;
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
    }
</style>