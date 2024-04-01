<!-- <script setup>
import { ref, reactive, onMounted } from "vue";
import ModelosApi from "@/api/modelos";
const modelosApi = new ModelosApi();

const defaultModelo = { id: null, descricao: "" };
const modelos = ref([]);
const modelo = reactive({ ...defaultModelo });

onMounted(async () => {
  modelos.value = await modelosApi.buscarTodasAsModelos();
});

function limpar() {
  Object.assign(modelo, { ...defaultModelo });
}

async function salvar() {
  if (modelo.id) {
    await modelosApi.atualizarModelo(modelo);
  } else {
    await modelosApi.adicionarModelo(modelo);
  }
  modelos.value = await modelosApi.buscarTodasAsModelos();
  limpar();
}

function editar(modelo_para_editar) {
  Object.assign(modelo, modelo_para_editar);
}

async function excluir(id) {
  await modelosApi.excluirModelo(id);
  modelos.value = await modelosApi.buscarTodasAsModelos();
  limpar();
}
</script>

<template>
  <h1>Modelo</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="modelo.nome" placeholder="Nome" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="modelo in modelos" :key="modelo.id">
      <span @click="editar(modelo)">
        ({{ modelo.id }}) - {{ modelo.nome }} - {{ modelo.categoria }} - {{ modelo.marca }} -
      </span>
      <button @click="excluir(modelo.id)">X</button>
    </li>
  </ul>
</template>

<style></style> -->
