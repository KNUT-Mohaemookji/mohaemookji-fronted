<template>
<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</template>

<script>
export default {
    props:{
        size:{
            type: Number,
            default: 2
        }
    }
}
</script>

<style scoped>
    .spinner-border{
        /* position: fixed; */
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 2rem;
        height: 2rem;
        z-index: 100;
    }
</style>