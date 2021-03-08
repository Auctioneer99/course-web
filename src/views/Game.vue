<template>
  <div id="unity-container" class="unity-desktop w-100 h-100">
    <canvas class="w-100 h-100" id="unity-canvas" tabindex="3"></canvas>
    <div id="unity-loading-bar">
      <div id="unity-logo"></div>
      <div id="unity-progress-bar-empty">
        <div id="unity-progress-bar-full"></div>
      </div>
    </div>
    <div id="unity-footer">
      <div id="unity-webgl-logo"></div>
      <!--<div id="unity-fullscreen-button"></div>-->
      <div id="unity-build-title">ClientWeb</div>
    </div>
  </div>
</template>


<script>
  export default {
    data()
    {
      return {
        instance: null,
        progressP: 0,
      }
    },
    mounted() {
      //this.loadGame();
    },
    methods: {
      loadGame() {
        var buildUrl = "Build";
        var loaderUrl = buildUrl + "/Build.loader.js";

        var config = {
          dataUrl: buildUrl + "/Build.data.unityweb",
          frameworkUrl: buildUrl + "/Build.framework.js.unityweb",
          codeUrl: buildUrl + "/Build.wasm.unityweb",
          streamingAssetsUrl: "StreamingAssets",
          companyName: "Ris",
          productName: "ClientWeb",
          productVersion: "0.1",
        };

        var container = document.querySelector("#unity-container");
        var canvas = document.querySelector("#unity-canvas");
        var loadingBar = document.querySelector("#unity-loading-bar");
        var progressBarFull = document.querySelector("#unity-progress-bar-full");
        //var fullscreenButton = document.querySelector("#unity-fullscreen-button");

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          container.className = "unity-mobile";
          config.devicePixelRatio = 1;
        } else {
          //canvas.style.width = "960px";
          //canvas.style.height = "600px";
        }
        loadingBar.style.display = "block";


        var script = document.createElement("script");
        script.src = loaderUrl;
        script.onload = () => {
          window.createUnityInstance(canvas, config, (progress) => {
            progressBarFull.style.width = 100 * progress + "%";
          }).then((unityInstance) => {
            this.instance = unityInstance
            loadingBar.style.display = "none";
          }).catch((message) => {
            alert(message);
          });
        };
        document.body.appendChild(script);
      }
    },
    fullScreen() {
      this.instance.SetFullscreen(1);
    }
  }
  
</script>

<style scoped>
#unity-container
{
  position: absolute;
  z-index: -100;
}
</style>