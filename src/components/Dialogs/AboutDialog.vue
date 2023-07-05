<template>
  <Dialog
    titleText="About"
    @close="close()"
  >
    <div class="about-dialog-content">
      <p>
        Kinklist was created by Goctionni to help people easily and quickly communicate their
        preferences. It is open source under the MIT license. You are thus free modify source
        code in any way you wish. Credit is appreciated but not required.
        This version is a customized application tailored for me, jarpeeggee. Below is the
        github link for the original.
      </p>
      <ul>
        <li><a href="https://github.com/Goctionni/kinklist-v2" target="_blank">Github</a></li>
      </ul>
    </div>
  </Dialog>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

import Dialog from "./Dialog.vue";

@Component({
  components: {
    Dialog,
  },
})
export default class AboutDialog extends Vue {
  @Prop() message!: string;

  @Emit()
  close(): void { /* Event emitted */ }
}
</script>

<style lang="scss" scoped>
.about-dialog-content {
  width: 400px;
  width: max(400px, min(80vw, 650px));
  padding: 10px;

  p:first-child {
    margin-top: 0;
  }
}
</style>
