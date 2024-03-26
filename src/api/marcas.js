import axios from "axios";
export default class MarcasApi {
  async buscarTodasAsMarcas() {
    const { data } = await axios.get("/marcas/");
    return data.results;
  }
  async adicionarCor(cor) {
    const { data } = await axios.post("/marcas/", cor);
    return data.results;
  }
  async atualizarCor(cor) {
    const { data } = await axios.put(`/marcas/${cor.id}/`, cor);
    return data.results;
  }
  async excluirCor(id) {
    const { data } = await axios.delete(`/marcas/${id}/`);
    return data.results;
  }
}
