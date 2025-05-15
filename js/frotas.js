// Dados simulando um banco
const dados = {
  honda: {
    scooter: ["PCX", "Elite 125", "ADV 150"],
    trail: ["XRE 190", "CRF 250", "Bros 160"]
  },
  toyota: {
    sedan: ["Corolla", "Etios"],
    suv: ["Hilux SW4", "Corolla Cross"],
    picape: ["Hilux", "Tacoma"]
  },
  ford: {
    sedan: ["Fusion", "Ka Sedan"],
    suv: ["EcoSport", "Edge"],
    picape: ["Ranger", "F-150"]
  }
};

function mostrarModelos() {
  const marcaInput = document.getElementById("marca").value.toLowerCase();
  const categoriaSelect = document.getElementById("categoria");
  const modelosSelect = document.getElementById("modelos");

  // Limpa os selects
  categoriaSelect.innerHTML = '<option value="">Selecione uma categoria</option>';
  modelosSelect.innerHTML = '<option value="">Selecione um modelo</option>';

  if (dados[marcaInput]) {
    const categorias = Object.keys(dados[marcaInput]);

    // Preenche o select de categorias
    categorias.forEach(categoria => {
      const option = document.createElement("option");
      option.value = categoria;
      option.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
      categoriaSelect.appendChild(option);
    });

    // Habilita o listener para o select de categoria
    categoriaSelect.onchange = function () {
      const categoriaSelecionada = this.value;
      modelosSelect.innerHTML = '<option value="">Selecione um modelo</option>';

      if (dados[marcaInput][categoriaSelecionada]) {
        const modelos = dados[marcaInput][categoriaSelecionada];
        modelos.forEach(modelo => {
          const option = document.createElement("option");
          option.value = modelo;
          option.textContent = modelo;
          modelosSelect.appendChild(option);
        });
      }
    };
  } else {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Marca não encontrada";
    categoriaSelect.appendChild(option);
  }
}
