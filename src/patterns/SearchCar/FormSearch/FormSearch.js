import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import CheckCustom from '../../../components/CheckCustom/CheckCustom';
import ButtonCustom from '../../../components/ButtonCustom/ButtonCustom';
import InputMask from '../../../components/InputMask/InputMask';
import SelectCustom from '../../../components/SelectCustom/SelectCustom';
import dadosMock from '../../../services/json/dadosMock.json';
import './FormSearch.scss';
import useFetch from '../../../hooks/useFetch';
import { MAKE_GET, MODEL_GET, VERSION_GET } from '../../../services/Api';

const FormSearch = () => {
  const [raio, setRaio] = React.useState('');
  const [ano, setAno] = React.useState('');
  const [preco, setPreco] = React.useState('');
  const [marca, setMarca] = React.useState('');
  const [modelo, setModelo] = React.useState('');
  const [versao, setVersao] = React.useState('');

  const { request } = useFetch();
  const [selectMarca, setSelectMarca] = React.useState([]);
  const [selectModelo, setSelectModelo] = React.useState([]);
  const [selectVersao, setSelectVersao] = React.useState([]);

  React.useEffect(() => {
    async function consumeApi() {
      const getMake = MAKE_GET();
      const { json } = await request(getMake.url, {});
      setSelectMarca(json);
    }
    consumeApi();
  }, [request]);

  async function clickModel(id) {
    const getModel = MODEL_GET(id);
    const { json } = await request(getModel.url, {});
    setSelectModelo(json);
    setVersao([]);
  }

  async function clickVersao(id) {
    const getVersion = VERSION_GET(id);
    const { json } = await request(getVersion.url, {});
    setSelectVersao(json);
  }

  function clearInput() {
    setSelectModelo([]);
    setSelectVersao([]);
  }

  return (
    <form className="formSearch">
      <div className="form_typePurchase">
        <CheckCustom idCheck="autoNovo" text="Novos" />
        <CheckCustom idCheck="autoUsados" text="Usados" />
      </div>
      <div className="form_editSearch">
        <div className="form_division">
          <InputMask>
            <label htmlFor="end">
              <FaMapMarkerAlt /> Onde:
            </label>
            <input type="text" id="end" name="end" placeholder="Local" />
            <SelectCustom
              idComponent="raio"
              selectArray={dadosMock.raio}
              firstValue="Raio"
              typeValue="Value"
              value={raio}
              setValue={setRaio}
            />
          </InputMask>
          <SelectCustom
            idComponent="ano"
            selectArray={dadosMock.ano}
            firstValue="Ano Desejado"
            typeValue="Value"
            styleComponent="configSelect selectMargin"
            value={ano}
            setValue={setAno}
          />
          <SelectCustom
            idComponent="preco"
            selectArray={dadosMock.preco}
            firstValue="Faixa de Preço"
            typeValue="Value"
            styleComponent="configSelect selectMargin"
            value={preco}
            setValue={setPreco}
          />
        </div>
        <div className="form_division">
          <SelectCustom
            idComponent="Marca"
            selectArray={selectMarca}
            firstValue="Marca"
            typeValue="ID"
            styleComponent="configSelect"
            value={marca}
            setValue={setMarca}
            functionComponent={clickModel}
          />
          <SelectCustom
            idComponent="Modelo"
            selectArray={selectModelo}
            firstValue="Modelo"
            typeValue="ID"
            styleComponent="configSelect"
            value={modelo}
            setValue={setModelo}
            functionComponent={clickVersao}
          />
          <SelectCustom
            idComponent="Versao"
            selectArray={selectVersao}
            firstValue="Versão"
            typeValue="ID"
            styleComponent="configSelect fullSelect selectMargin"
            value={versao}
            setValue={setVersao}
          />
        </div>
      </div>
      <div className="form_divisionBtn">
        <div className="buttonFormat">
          <ButtonCustom
            idButton="buscaAvancada"
            typeButton="button"
            text=" > Busca Avançada"
          />
        </div>
        <div className="buttonFormat">
          <ButtonCustom
            idButton="reset"
            typeButton="reset"
            text="Limpar Filtros  "
            eventClick={clearInput}
          />
          <ButtonCustom idButton="reset" text=" Ver Ofertas" />
        </div>
      </div>
    </form>
  );
};

export default FormSearch;
