<template>
    <div class="card">
        <div class="card-header mb-5 pb-0">
            <div class="row">
                <div class="col-6">
                    <h6>Listagem de Clientes</h6>
                </div>
                <div class="col-6 text-end">
                    <router-link to="" @click.prevent="showModal" class="btn btn-success text-white"><i class="fa fa-sharp fa-solid fa-plus mr-2"></i> Novo Cliente</router-link>
                </div>
            </div>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Cliente</th>
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center"
                            >Total de Serviços</th>
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >Status</th>
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >Ultimo Serviço</th>
                            <th class="text-secondary opacity-7"> Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="d-flex px-2 py-1">
                                    <div>
                                        <img
                                            src="../../../assets/img/team-2.jpg"
                                            class="avatar avatar-sm me-3"
                                            alt="user1"
                                        />
                                    </div>
                                    <div class="d-flex flex-column justify-content-center">
                                        <h6 class="mb-0 text-sm">Samuel Sanches</h6>
                                        <p class="text-xs text-secondary mb-0">Carro: Gol G4</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs text-center mb-0">15</p>
                            </td>
                            <td class="align-middle text-center text-sm">
                                <span class="badge badge-sm bg-gradient-success">Sem Dividas</span>
                            </td>
                            <td class="align-middle text-center">
                                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                            </td>
                            <td class="align-middle">
                                <router-link to="" class="btn text-white btn-round btn-primary"><i class="fa fa-solid fa-pen"></i></router-link>
                                <router-link to="" class="btn text-white btn-round btn-danger"><i class="fa fa-solid fa-trash"></i></router-link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex px-2 py-1">
                                    <div>
                                        <img
                                            src="../../../assets/img/team-2.jpg"
                                            class="avatar avatar-sm me-3"
                                            alt="user1"
                                        />
                                    </div>
                                    <div class="d-flex flex-column justify-content-center">
                                        <h6 class="mb-0 text-sm">Samuel Sanches</h6>
                                        <p class="text-xs text-secondary mb-0">Carro: Gol G4</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs text-center mb-0">15</p>
                            </td>
                            <td class="align-middle text-center text-sm">
                                <span class="badge badge-sm bg-gradient-danger">Possui Dividas</span>
                            </td>
                            <td class="align-middle text-center">
                                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                            </td>
                            <td class="align-middle">
                                <router-link to="" class="btn text-white btn-round btn-primary"><i class="fa fa-solid fa-pen"></i></router-link>
                                <router-link to="" class="btn text-white btn-round btn-danger"><i class="fa fa-solid fa-trash"></i></router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <transition name="bounce" mode="out-in">
            <Form ref="modalClient"></Form>
        </transition>

    </div>
</template>

<script>
import Form from "./form/Form";
import { Modal } from 'bootstrap';

export default {
    name: "ListClients",
    mounted () {
        this.myModal = new Modal(document.getElementById('exampleModal'));
    },
    data () {
        return {
            myModal: {}
        }
    },
    components: {
        Form
    },
    methods: {
        showModal: function () {
            this.myModal.show();
        }
    }
}
</script>

<style scoped>

</style>