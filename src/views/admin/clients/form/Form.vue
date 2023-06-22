<template>
    <Modal ref="modalClient" title="Novo Cliente" id-modal="formClients" size-modal="modal-lg">
        <template #body>
            <Form @click.prevent="sendForm">
                <div class="row">

                    <div class="col-8 form-group">
                        <label class="form-label">Nome do Cliente</label>
                        <Field
                            :rules="required"
                            placeholder="Digite..."
                            type="text"
                            name="name"
                            class="form-control"
                            v-model="form.name"
                        />
                        <ErrorMessage name="name"></ErrorMessage>
                    </div>

                    <div class="col-4 form-group">
                        <label class="form-label">Documento</label>
                        <input v-mask="'###.###.###-##'" placeholder="Digite..." type="text" class="form-control" v-model="form.name">
                    </div>

                    <div class="col-3 form-group">
                        <label class="form-label">Marca</label>
                        <input placeholder="Digite..." type="text" class="form-control" v-model="form.name">
                    </div>

                    <div class="col-6 form-group">
                        <label class="form-label">Carro</label>
                        <input placeholder="Digite..." type="text" class="form-control" v-model="form.name">
                    </div>

                    <div class="col-3 form-group">
                        <label class="form-label">Placa</label>
                        <input placeholder="Digite..." type="text" class="form-control" v-model="form.name">
                    </div>

                </div>

                <button type="submit" class="btn btn-success btn-sm">Salvar</button>
            </Form>
        </template>

        <template #footer>
            <button type="submit" class="btn btn-success btn-sm">Salvar</button>
        </template>
    </Modal>
</template>

<script>
    import Modal from "../../../components/Modal";
    import { Form, Field, ErrorMessage } from 'vee-validate';

    export default {
        name: 'FormClients',
        components: {
            Modal,
            Form,
            Field,
            ErrorMessage,
        },
        data () {
            return {
                form: {
                    name: '',
                    document: '',
                    car: '',
                    plate: ''
                }
            }
        },
        methods: {
            sendForm: function () {
                console.log(this.form);
                this.$refs['modalClient'].closeModal();
            },
            required: function (value) {
                if (!value) {
                    return 'Campo obrigatório.'
                }

                return true
            }
        }
    }
</script>