<template>
  <div class="goodbye">
    <h1>Mission accomplished!</h1>
    <p>
      Thank you for your participation in this study.
    </p>
    <div class="pyro">
      <div class="before"></div>
      <div class="after"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewGoodbye",
  components: {},
  beforeCreate() {
    this.$store.commit("resetUser");
  }
};
</script>

<style scoped>
.goodbye {
  display: grid;
  margin: 3em auto auto;
  justify-content: center;
}


body {
  margin: 0;
  padding: 0;
  background: #000;
  overflow: hidden;
}

.pyro > .before, .pyro > .after {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
  -moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
}

.pyro > .after {
  -moz-animation-delay: 1.25s, 1.25s, 1.25s;
  -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
  -o-animation-delay: 1.25s, 1.25s, 1.25s;
  -ms-animation-delay: 1.25s, 1.25s, 1.25s;
  animation-delay: 1.25s, 1.25s, 1.25s;
  -moz-animation-duration: 1.25s, 1.25s, 6.25s;
  -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
  -o-animation-duration: 1.25s, 1.25s, 6.25s;
  -ms-animation-duration: 1.25s, 1.25s, 6.25s;
  animation-duration: 1.25s, 1.25s, 6.25s;
}

@-webkit-keyframes bang {
  to {
    box-shadow: -21px -11.6666666667px #c8ff00, 243px -269.6666666667px #ff3c00, 218px -299.6666666667px #00ff04, -176px -368.6666666667px #00f7ff, -74px -259.6666666667px #ff2f00, -227px -246.6666666667px #6a00ff, -16px 66.3333333333px #00ff0d, 206px -44.6666666667px #ff7700, -103px -195.6666666667px #00ff48, 31px -235.6666666667px #00a6ff, 13px -109.6666666667px #00ff95, 214px -301.6666666667px #00ff33, -29px 65.3333333333px #ffc800, -104px -392.6666666667px #1eff00, -160px -333.6666666667px #ffc400, -225px -282.6666666667px #fffb00, 184px -166.6666666667px #00ff15, -157px -127.6666666667px #ff6200, 107px -356.6666666667px #ff9900, -18px -237.6666666667px #ff6f00, -59px -212.6666666667px #00ff95, -221px -113.6666666667px #ff00c8, 246px -239.6666666667px #5900ff, -210px -176.6666666667px #f7ff00, 31px -156.6666666667px #006aff, -17px -46.6666666667px #ff7700, 31px -66.6666666667px #73ff00, 163px -239.6666666667px #00d0ff, 97px -106.6666666667px #00fbff, -113px -28.6666666667px #ffa200, 172px -114.6666666667px #00bbff, 138px -342.6666666667px #ff0095, -100px 65.3333333333px #00ff99, 194px -178.6666666667px #8400ff, -61px -85.6666666667px fuchsia, -128px -187.6666666667px #66ff00, 222px -235.6666666667px #00fff7, -47px -194.6666666667px #0400ff, -161px -325.6666666667px #ff00a6, 195px -132.6666666667px #00e1ff, -85px -357.6666666667px #ff6a00, 246px -409.6666666667px #e100ff, 18px 3.3333333333px #e6ff00, 22px -260.6666666667px #ff006a, 51px -49.6666666667px #00eaff, 64px -58.6666666667px red, -200px 67.3333333333px #ee00ff, -50px -238.6666666667px #ff0084, -155px -395.6666666667px #ff006f, -3px -208.6666666667px #0015ff, -154px -238.6666666667px blue;
  }
}
@-moz-keyframes bang {
  to {
    box-shadow: -21px -11.6666666667px #c8ff00, 243px -269.6666666667px #ff3c00, 218px -299.6666666667px #00ff04, -176px -368.6666666667px #00f7ff, -74px -259.6666666667px #ff2f00, -227px -246.6666666667px #6a00ff, -16px 66.3333333333px #00ff0d, 206px -44.6666666667px #ff7700, -103px -195.6666666667px #00ff48, 31px -235.6666666667px #00a6ff, 13px -109.6666666667px #00ff95, 214px -301.6666666667px #00ff33, -29px 65.3333333333px #ffc800, -104px -392.6666666667px #1eff00, -160px -333.6666666667px #ffc400, -225px -282.6666666667px #fffb00, 184px -166.6666666667px #00ff15, -157px -127.6666666667px #ff6200, 107px -356.6666666667px #ff9900, -18px -237.6666666667px #ff6f00, -59px -212.6666666667px #00ff95, -221px -113.6666666667px #ff00c8, 246px -239.6666666667px #5900ff, -210px -176.6666666667px #f7ff00, 31px -156.6666666667px #006aff, -17px -46.6666666667px #ff7700, 31px -66.6666666667px #73ff00, 163px -239.6666666667px #00d0ff, 97px -106.6666666667px #00fbff, -113px -28.6666666667px #ffa200, 172px -114.6666666667px #00bbff, 138px -342.6666666667px #ff0095, -100px 65.3333333333px #00ff99, 194px -178.6666666667px #8400ff, -61px -85.6666666667px fuchsia, -128px -187.6666666667px #66ff00, 222px -235.6666666667px #00fff7, -47px -194.6666666667px #0400ff, -161px -325.6666666667px #ff00a6, 195px -132.6666666667px #00e1ff, -85px -357.6666666667px #ff6a00, 246px -409.6666666667px #e100ff, 18px 3.3333333333px #e6ff00, 22px -260.6666666667px #ff006a, 51px -49.6666666667px #00eaff, 64px -58.6666666667px red, -200px 67.3333333333px #ee00ff, -50px -238.6666666667px #ff0084, -155px -395.6666666667px #ff006f, -3px -208.6666666667px #0015ff, -154px -238.6666666667px blue;
  }
}
@-o-keyframes bang {
  to {
    box-shadow: -21px -11.6666666667px #c8ff00, 243px -269.6666666667px #ff3c00, 218px -299.6666666667px #00ff04, -176px -368.6666666667px #00f7ff, -74px -259.6666666667px #ff2f00, -227px -246.6666666667px #6a00ff, -16px 66.3333333333px #00ff0d, 206px -44.6666666667px #ff7700, -103px -195.6666666667px #00ff48, 31px -235.6666666667px #00a6ff, 13px -109.6666666667px #00ff95, 214px -301.6666666667px #00ff33, -29px 65.3333333333px #ffc800, -104px -392.6666666667px #1eff00, -160px -333.6666666667px #ffc400, -225px -282.6666666667px #fffb00, 184px -166.6666666667px #00ff15, -157px -127.6666666667px #ff6200, 107px -356.6666666667px #ff9900, -18px -237.6666666667px #ff6f00, -59px -212.6666666667px #00ff95, -221px -113.6666666667px #ff00c8, 246px -239.6666666667px #5900ff, -210px -176.6666666667px #f7ff00, 31px -156.6666666667px #006aff, -17px -46.6666666667px #ff7700, 31px -66.6666666667px #73ff00, 163px -239.6666666667px #00d0ff, 97px -106.6666666667px #00fbff, -113px -28.6666666667px #ffa200, 172px -114.6666666667px #00bbff, 138px -342.6666666667px #ff0095, -100px 65.3333333333px #00ff99, 194px -178.6666666667px #8400ff, -61px -85.6666666667px fuchsia, -128px -187.6666666667px #66ff00, 222px -235.6666666667px #00fff7, -47px -194.6666666667px #0400ff, -161px -325.6666666667px #ff00a6, 195px -132.6666666667px #00e1ff, -85px -357.6666666667px #ff6a00, 246px -409.6666666667px #e100ff, 18px 3.3333333333px #e6ff00, 22px -260.6666666667px #ff006a, 51px -49.6666666667px #00eaff, 64px -58.6666666667px red, -200px 67.3333333333px #ee00ff, -50px -238.6666666667px #ff0084, -155px -395.6666666667px #ff006f, -3px -208.6666666667px #0015ff, -154px -238.6666666667px blue;
  }
}
@-ms-keyframes bang {
  to {
    box-shadow: -21px -11.6666666667px #c8ff00, 243px -269.6666666667px #ff3c00, 218px -299.6666666667px #00ff04, -176px -368.6666666667px #00f7ff, -74px -259.6666666667px #ff2f00, -227px -246.6666666667px #6a00ff, -16px 66.3333333333px #00ff0d, 206px -44.6666666667px #ff7700, -103px -195.6666666667px #00ff48, 31px -235.6666666667px #00a6ff, 13px -109.6666666667px #00ff95, 214px -301.6666666667px #00ff33, -29px 65.3333333333px #ffc800, -104px -392.6666666667px #1eff00, -160px -333.6666666667px #ffc400, -225px -282.6666666667px #fffb00, 184px -166.6666666667px #00ff15, -157px -127.6666666667px #ff6200, 107px -356.6666666667px #ff9900, -18px -237.6666666667px #ff6f00, -59px -212.6666666667px #00ff95, -221px -113.6666666667px #ff00c8, 246px -239.6666666667px #5900ff, -210px -176.6666666667px #f7ff00, 31px -156.6666666667px #006aff, -17px -46.6666666667px #ff7700, 31px -66.6666666667px #73ff00, 163px -239.6666666667px #00d0ff, 97px -106.6666666667px #00fbff, -113px -28.6666666667px #ffa200, 172px -114.6666666667px #00bbff, 138px -342.6666666667px #ff0095, -100px 65.3333333333px #00ff99, 194px -178.6666666667px #8400ff, -61px -85.6666666667px fuchsia, -128px -187.6666666667px #66ff00, 222px -235.6666666667px #00fff7, -47px -194.6666666667px #0400ff, -161px -325.6666666667px #ff00a6, 195px -132.6666666667px #00e1ff, -85px -357.6666666667px #ff6a00, 246px -409.6666666667px #e100ff, 18px 3.3333333333px #e6ff00, 22px -260.6666666667px #ff006a, 51px -49.6666666667px #00eaff, 64px -58.6666666667px red, -200px 67.3333333333px #ee00ff, -50px -238.6666666667px #ff0084, -155px -395.6666666667px #ff006f, -3px -208.6666666667px #0015ff, -154px -238.6666666667px blue;
  }
}
@keyframes bang {
  to {
    box-shadow: -21px -11.6666666667px #c8ff00, 243px -269.6666666667px #ff3c00, 218px -299.6666666667px #00ff04, -176px -368.6666666667px #00f7ff, -74px -259.6666666667px #ff2f00, -227px -246.6666666667px #6a00ff, -16px 66.3333333333px #00ff0d, 206px -44.6666666667px #ff7700, -103px -195.6666666667px #00ff48, 31px -235.6666666667px #00a6ff, 13px -109.6666666667px #00ff95, 214px -301.6666666667px #00ff33, -29px 65.3333333333px #ffc800, -104px -392.6666666667px #1eff00, -160px -333.6666666667px #ffc400, -225px -282.6666666667px #fffb00, 184px -166.6666666667px #00ff15, -157px -127.6666666667px #ff6200, 107px -356.6666666667px #ff9900, -18px -237.6666666667px #ff6f00, -59px -212.6666666667px #00ff95, -221px -113.6666666667px #ff00c8, 246px -239.6666666667px #5900ff, -210px -176.6666666667px #f7ff00, 31px -156.6666666667px #006aff, -17px -46.6666666667px #ff7700, 31px -66.6666666667px #73ff00, 163px -239.6666666667px #00d0ff, 97px -106.6666666667px #00fbff, -113px -28.6666666667px #ffa200, 172px -114.6666666667px #00bbff, 138px -342.6666666667px #ff0095, -100px 65.3333333333px #00ff99, 194px -178.6666666667px #8400ff, -61px -85.6666666667px fuchsia, -128px -187.6666666667px #66ff00, 222px -235.6666666667px #00fff7, -47px -194.6666666667px #0400ff, -161px -325.6666666667px #ff00a6, 195px -132.6666666667px #00e1ff, -85px -357.6666666667px #ff6a00, 246px -409.6666666667px #e100ff, 18px 3.3333333333px #e6ff00, 22px -260.6666666667px #ff006a, 51px -49.6666666667px #00eaff, 64px -58.6666666667px red, -200px 67.3333333333px #ee00ff, -50px -238.6666666667px #ff0084, -155px -395.6666666667px #ff006f, -3px -208.6666666667px #0015ff, -154px -238.6666666667px blue;
  }
}
@-webkit-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-moz-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-o-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-ms-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-webkit-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-moz-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-o-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-ms-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
</style>
