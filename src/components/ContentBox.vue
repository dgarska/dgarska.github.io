<template>
  <div class="relative font-serif">
    <div class="absolute top-5 left-1/3 z-10">
      <div
        class="border-4 border-yellow-300 border-dotted flex flex-col relative"
      >
        <div class="absolute -top-3.5 left-1/3 bg-white px-2 text-xl">
          Hall of Fame
        </div>

        <div class="grid grid-cols-2 p-5 gap-2">
          <div>Gesparrte Lebenszeit</div>
          <div>{{ seconds }} Sekunden</div>
          <div>Passives Einkommen</div>
          <div>
            <span class="text-green-400">{{ stealedMoney }}</span> €
          </div>
        </div>
      </div>
    </div>

    <img
      class="w-20 h-20 cover"
      ref="movingObject"
      id="movingObject"
      src="../assets/asset.png"
      alt="image"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, Ref } from "vue";
import NoSleep from "./components/NoSleep.vue";
const seconds: Ref<number> = ref(0);
const stealedMoney: Ref<number> = ref(0);
const x = ref(0);
const y = ref(0);
const xSpeed = ref(2);
const ySpeed = ref(2);
const rotationAngle = ref(0);
const movingObjectRef = ref(null);

const countSeconds = () => {
  //if window is active
  if (document.visibilityState === "visible") {
    seconds.value++;

    //12,41 per Hour calculate second
    stealedMoney.value = (seconds.value * 12.41) / 3600;
    stealedMoney.value = Math.round(stealedMoney.value * 100) / 100;
  }
  setTimeout(countSeconds, 1000);
};

setTimeout(countSeconds, 1000);

const moveObject = () => {
  const movingObject = movingObjectRef.value;

  if (!movingObject) {
    return; // Exit early if the ref is still null
  }

  x.value += xSpeed.value;
  y.value += ySpeed.value;
  rotationAngle.value += 2;

  if (x.value + movingObject.offsetWidth > window.innerWidth || x.value < 0) {
    xSpeed.value = -xSpeed.value;
  }

  if (y.value + movingObject.offsetHeight > window.innerHeight || y.value < 0) {
    ySpeed.value = -ySpeed.value;
  }

  movingObject.style.transform = `translate(${x.value}px, ${y.value}px) rotate(${rotationAngle.value}deg)`;
};

onMounted(() => {
  movingObjectRef.value = document.getElementById("movingObject");
  setInterval(moveObject, 1000 / 60);
});

onBeforeUnmount(() => {
  clearInterval(moveObject);
});
</script>
