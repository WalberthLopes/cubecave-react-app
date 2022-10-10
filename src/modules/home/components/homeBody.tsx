import styles from "../styles/homeBody.module.css";

export default function HomeBody() {
  return (
    <div className={styles.homeBodyContainer}>
      <div className={styles.homeBodyContent}>
        <h2>Atualização 30.09.22</h2>

        <h3>Cubecave está de volta!</h3>

        <div>
          <p>
            Após alguns meses desligado, o melhor servidor de todos os tempos
            está de volta!
          </p>

          <p>
            O servidor voltará com uma nova política de atividades baseada em
            seus players.
          </p>

          <p>
            As portas serão abertas no dia 30/09/22 e o servidor possuirá apenas
            os sistemas básicos, como home, tpa, spawn, combate, limitações,
            economia...
          </p>

          <p>
            - Mas por qual motivo não lançar o servidor completo? <br />
            Bem, seria bem simples copiar os antigos arquivos e apenas atualizar
            alguma coisa aqui e ali não é mesmo? Mas queremos seguir por outro
            caminho, e ao invés de colocarmos novos sistemas a esmo, queremos
            sentir como os players irão se adaptar, quais sistemas farão mais
            sentido e quais as melhores fromas de implementação.
          </p>

          <p>
            - Como serão os novos VIPs? <br />
            Como antes do fechamento, todas as vantagens que os VIPs possuem
            serão possíveis de serem conquistadas apenas subindo de rank.
          </p>

          <p>
            - Quais as limitações do servidor? <br />
            Infelizmente é quase impossível entregar um servidor sem limitações,
            porém queremos dar a maior liberade possível aos players. <br />
            <li>
              Villagers: 20 entidades em um raio de 256 blocos ao redor do
              player.
            </li>
            <li>
              Monstros: 10 entidades em um raio de 32 blocos ao redor do
              jogador.
            </li>
            <li>
              Animais: 20 entidades em um raio de 32 blocos ao redor do jogador.
            </li>
            <li>
              Redstone: Não será limitada, porém se auto destruirá caso gere lag
              ao servidor.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}
