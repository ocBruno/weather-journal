<template>
    <main>
    <textarea></textarea>
        
    </main>
</template>
<script>
export default {
    name: 'Journal',
    data() {
        return {

        }
    }
}
</script>
<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3em;
}
textarea {
    background-color: rgb(242, 244, 246);
    width: 16em;
    font-family: 'Fira Sans';
    padding: 1em;
    height: 13em;
    border-radius: 1em;
}
</style>