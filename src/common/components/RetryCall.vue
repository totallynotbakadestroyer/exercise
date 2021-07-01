<template>
  <el-dialog
    title="Loading Error"
    :visible.sync="dialogVisible"
    width="30%"
  >
    <span>An error occurred during loading. Retry?</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="handleRetry">Retry</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ['handleRetry'],
  name: 'RetryCall',
  data() {
    return {
      dialogVisible: true,
    };
  },
};
</script>

<style scoped></style>
