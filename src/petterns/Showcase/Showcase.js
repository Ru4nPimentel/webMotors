import React from 'react';
import CardCar from '../../components/CardCar/CardCar';

import useFetch from '../../hooks/useFetch';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import { Vehicles_GET } from '../../services/Api';
import './Showcase.scss';
import Loading from '../../components/Loading/Loading';

const Showcase = () => {
  const { request, loading } = useFetch();
  const [vehicles, setVehicles] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    async function consumeApi() {
      const getVehicles = Vehicles_GET(page);
      const { json } = await request(getVehicles.url, {});
      setVehicles(json);
    }
    consumeApi();
  }, [request, page]);

  function pagePrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function pageNext() {
    if (page < 3) {
      setPage(page + 1);
    }
  }

  return (
    <section className="showcase">
      <h2>Recomendados para você</h2>
      <div className="showcase_content">
        <div className="showcase_box">
          {loading ? (
            <Loading />
          ) : (
            <CardCar cardArray={vehicles} styleComponents="showcase_card" />
          )}
        </div>
        <nav className="showcase_navPage">
          <ButtonCustom
            idButton="btnPrev"
            typeButton="button"
            text="Voltar"
            eventClick={pagePrev}
            styleComponent="showcase_btn"
          />
          <ButtonCustom
            idButton="btnNext"
            typeButton="button"
            text="Proximo"
            eventClick={pageNext}
            styleComponent="showcase_btn"
          />
        </nav>
      </div>
    </section>
  );
};

export default Showcase;
