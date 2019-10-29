<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <div
            v-finger:tap="tap"
            v-finger:multipoint-start="multipointStart"
            v-finger:long-tap="longTap"
            v-finger:swipe="swipe"
            v-finger:pinch="pinch"
            v-finger:rotate="rotate"
            v-finger:press-move="pressMove.bind(this, 12)"
            v-finger:multipoint-end="multipointEnd"
            v-finger:double-tap="doubleTap"
            v-finger:single-tap="singleTap"
            v-finger:touch-start="touchStart"
            v-finger:touch-move="touchMove"
            v-finger:touch-end="touchEnd"
            v-finger:touch-cancel="touchCancel"
        >
            <div>the element that you want to bind event</div>
        </div>
        <!-- <div class="main">

        </div> -->
        <div>
            
            <input type="file" accept="image/*" multiple="multiple"/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        // HelloWorld
    },
    mounted() {},
    methods: {
        tap: function() {
            // 点击
            console.log("onTap");
        },
        multipointStart: function() {
            console.log("onMultipointStart");
        },
        longTap: function() {
            // 长按屏幕
            console.log("onLongTap");
        },
        swipe: function(evt) {
            console.log("swipe" + evt.direction);
            console.log("onSwipe");
        },
        pinch: function(evt) {
            console.log(evt.scale);
            console.log("onPinch");
        },
        rotate: function(evt) {
            console.log(evt.angle);
            console.log("onRotate");
        },
        pressMove: function(num, evt) {
            console.log(evt.deltaX);
            console.log(evt.deltaY);
            console.log("onPressMove with params:" + num);
        },
        multipointEnd: function() {
            console.log("onMultipointEnd");
        },
        doubleTap: function() {
            console.log("onDoubleTap");
        },
        singleTap: function() {
            console.log("onSingleTap");
        },

        touchStart: function() {
            console.log("onTouchStart");
        },
        touchMove: function() {
            console.log("onTouchMove");
        },
        touchEnd: function() {
            console.log("onTouchEnd");
        },
        touchCancel: function() {
            console.log("onTouchCancel");
        }
    }
};
</script>
<style scoped lang="scss">
.main {
    width: 6.4rem;
    height: 3.8rem;
    background: #000000;
    border-radius: .1rem;
    margin-left: .56rem;
}
</style>

