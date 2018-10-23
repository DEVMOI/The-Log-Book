<template>
    <view>
        <view>
            <Header
                    :headerText='headerText'
                    :subHeaderText='subHeaderText'
            />
        </view>

        <view class='inputContainer'>

            <Input/>

            <button title='Save' color='#000' on-press=''/>

            <!--<flat-list-->
            <!--:render-item="(item) => renderList(item)"-->
            <!--/>-->
        </view>
    </view>

</template>

<script>
    import Header from './Header';
    import Input from './Input'

    export default {
        name: 'ListApp',
        components: {
            Input,
            Header
        },
        data() {
            return {
                headerText: 'The List App',
                subHeaderText: 'Built by Node >< GG',
                items: []
            };
        },
        methods: {
            renderList: function (item) {
                return (<Text>{item.item.key}</Text>)
            }
        },
        mounted() {
            // if (localStorage.getItem("items")){this.items = JSON.parse(localStorage.getItem("items"));}
        },
        watch: {
            // items: {
            //     // handler() {
            //     //     localStorage.setItem("items", JSON.stringify(this.items));
            //     // },
            //     // deep: true,
            // }
        },
    }
</script>

<style scoped>
    .inputContainer {
        margin: 15px 50px;
    }
</style>