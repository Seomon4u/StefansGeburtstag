import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stefans Geburtstag</title>
        <meta name="description" content="Stefans Geburtstag" />
      </Head>

      <main className={styles.main}>
        <Image
            className={styles.img}
            src="/stefansgeburtstag.jpg"
            alt="shows the smash brothers logo for stefans party"
            width={636}
            height={318}
        />
        <h1 className={styles.title}>Location</h1>
        <p>Die Party findet im Haus von Simons Dad statt, der so nett war die Location zur Verfügung zu stellen! Danke
          an dieser Stelle!</p>
        <p>
          Adresse:<br/>
          Bitte der WhatsApp Gruppe entnehmen.<br/>
        </p>

        <p>
          Erreichbar mit der Bahn (S2, S7, REX) Richtung Mistelbach. Vom Bahnhof ist es aber noch
          ein Fußweg (ca 15-20 Minuten), deshalb am besten mit einem Auto vom Bahnhof abholen lassen beziehungsweise
          generell Fahrgemeinschaften bilden!
        </p>

        <p><b>Achtung auch auf die Bahn-Sperre zwischen Praterstern und Floridsdorf!</b></p>

        <p>
          Uhrzeit:<br/>
          15:00 - Open End<br/>
          Schlafplätze sind auch genügend vorhanden!<br/>
          Es gibt einen Pool, also Badesachen nicht vergessen!<br/>
        </p>

        <p>Bitte keine Geschenke mitbringen, eure Anwesenheit ist Geschenk genug &lt;3</p>

        <h1 className={styles.title}>Verpflegung</h1>

        <p>
          Zur Verpflegung gibt es Burger vom Grill und Cocktails. Ihr könnt auch Sachen zum Grillen mitnehmen, wie
          z.B. Würste oder Spare Ribs. Aber bitte schreibt es vorher in die Gruppe und sprecht euch ab, damit wir am
          Ende nicht zu viel haben und nichts verschwenden.
        </p>


        <h1 className={styles.title}>Smash Bros Turnier</h1>
        <p>Das Highlight des Tages wird das große Turnier der Kampfkünste in Smash Brothers!</p>
        <h2 className={styles.title2}>Crew Battle Modus</h2>
        <p>
          Es wird Smash Bros Ultimate für die Nintendo Switch gespielt, und zwar ein Turnier in einem Crew Battle
          Modus. Eine Crew besteht aus 3 Spielern. In einem Crew Battle werden 2 1vs1 Spiele und 2 2vs2 Spiele
          ausgetragen, also insgesamt 4 Spiele pro Crew Battle. Der Spieler einer Crew, welcher nicht in einem der
          beiden 1v1 Spiele gesetzt wird, muss in beiden 2vs2 Spielen gesetzt werden. Das bedeutet, dass jeder
          Spieler
          in 2 Spielen pro Crew Battle spielt. Vor einem Match muss jede Crew ihre Aufstellung festlegen, diese kann
          aber für jedes Match anders sein. Falls ein Match 2-2 endet, kommt es zu einem Tiebreaker.
        </p>

        <p>
          Im Tiebreaker wird eine Runde Apfelsaft-Pong gespielt, wobei es nur einen Becher pro Team gibt und der
          erste Treffer das Spiel entscheidet. Um zu entscheiden, wer anfängt zu werfen, wird Schere-Stein-Papier
          auf
          zwei Unterschied gespielt. Die Spieler einer Crew müssen sich beim Werfen abwechseln.
        </p>

        <p>
          Das Turnier wird in einem Double Elimination Bracket ausgetragen. Das heißt, wenn man ein Match verliert,
          hat man noch die Chance, in einem Loser’s Bracket weiterzuspielen und so bis ins Finale zu kommen. Das
          Finalteilnehmer-Team, welches aus dem Loser’s Bracket kommt, muss zwei Matches gegen den Finalteilnehmer
          aus
          dem Winner Bracket gewinnen, um das Turnier zu gewinnen.
        </p>
        <h2 className={styles.title2}>Handicap</h2>
        <p>
          Um schwächeren Spielern eine Chance zu geben und die Matches spannender zu machen, gibt es ein
          Handicap-System. Die Spieler werden in eine Tier List eingeteilt. Der stärkere Spieler muss sich am Anfang
          des Spiels ein oder mehrmals umbringen (nicht im real life ;-) ) ohne dem Gegner schaden zu machen, also
          quasi ein oder zwei Leben Vorsprung geben. Die Anzahl der Leben wird durch die Differenz der Spieler in
          der Tier List bestimmt. Beispiel: Ein S Tier(Tier 4) Spieler spielt gegen einen B Tier(Tier 2) Spieler,
          der High Tier Spieler muss 2 Leben(4-2) opfern. Im 2vs2 gilt dies auch, Beispiel: Ein S Tier und ein A
          Tier Spieler spielen gegen einen B Tier und einen C Tier: ersteres Team muss insgesamt 4 = (4+3) - (2+1) Leben
          opfern.
          Nach dem Opfern beginnt das Spiel sofort, das heißt, die Unverwundbarkeit nach dem Respawn darf ausgenutzt
          werden.
        </p>
        <h2 className={styles.title2}>Settings</h2>
        <p>
          Es ist ein Regelwerk mit dem Namen “Turnier” erstellt:<br/>
          Stocks: 4<br/>
          Match Time Limit: 20 min<br/>
          Friendly Fire: On<br/>
          Items: Low<br/>
          Stage Hazards: On<br/>
          Stage Pick: Random<br/>
        </p>

        <p>Also wie von Sakurai intended! ;-)</p>

        <p>
          PS: Es sind aber nicht alle Items und auch nicht alle Stages aktiviert. Da man die
          Item-Wahrscheinlichkeit
          nicht pro Item spezifisch einstellen kann, habe ich mich dazu entschieden, Smash Balls und Assist Trophys
          zu
          deaktivieren. 🥲
        </p>

        <h2 className={styles.title2}>Tier List</h2>
        <Image className={styles.img}
               src="/TierListVers4.png"
               alt="shows 3 tiers with different players for a tierlist in the smashbrothers tournament"
               width={1044}
               height={505}
        />
        <h2 className={styles.title2}>Turnierbaum</h2>
        <iframe src="https://challonge.com/de/m6k5bxjz/module" width="100%" height="500"></iframe>
      </main>
    </div>
  );
}
