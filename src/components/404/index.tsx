import "./styles.scss";

export default function Err404() {
  return (
    <>
      <div id="oopss">
        <div id="error-text">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="404"
          />
          <span>ERROR 404</span>
          <p className="p-a">
            . A página que você procurava não foi encontrada
          </p>
          <p className="p-b">... Volte para página anterior</p>
          <a href="#" onClick={() => history.back()} className="back">
            ... Volte para página anterior
          </a>
        </div>
      </div>
    </>
  );
}
