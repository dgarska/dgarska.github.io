<template>
  <div></div>
</template>

<script setup>
import NoSleep from "nosleep.js";

let noSleep = null;
let isNoSleepEnabled = false;

const toggleNoSleep = () => {
  if (!noSleep) {
    noSleep = new NoSleep();
  }

  if (isNoSleepEnabled) {
    noSleep.disable();
  } else {
    noSleep.enable();
  }

  isNoSleepEnabled = !isNoSleepEnabled;
};

toggleNoSleep();

const beforeUnmount = () => {
  if (noSleep) {
    noSleep.disable();
  }
};
</script>
