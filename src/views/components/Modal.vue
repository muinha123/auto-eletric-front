<template>
    <!-- Modal -->
    <div class="modal fade" :id="idModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" :class="sizeModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Fechar</button>
                    <slot name="footer"></slot>
                    <button v-show="false" ref="Close" type="button" data-bs-dismiss="modal">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: {
        title: {
            type: String
        },
        sizeModal: {
            type: String,
            default: '',
            required: false
        },
        idModal: {
            type: String
        }
    },
    methods: {
        closeModal: function () {
            this.$refs.Close.click();
        }
    }
}
</script>

<style scoped>

</style>