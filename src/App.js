import "./App.scss";
import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto"; /*npm install fontsource-roboto*/
import MenuIcon from "@material-ui/icons/Menu";

/* npm install @material-ui/system*/
/*npm install node-sass */
/*npm npm add gh-pages */

const Icon = makeStyles({
  root: {
    position: "absolute",
    backgroundColor: "#242d38",
    color: "#efd592",
    fontSize: "40px",
    right: "15px",
    top: "15px",
    padding: "20px",
    borderRadius: "50%",
    borderLine: "3px",
    borderColor: "#efd592",
  },
});

function IconStyled() {
  const classes = Icon();
  return <MenuIcon className={classes.root}></MenuIcon>;
}


function App() {
  return (
    <div className="App">
      <Box className="App-icon">
        <IconStyled />
      </Box>
      <box className="App-square"></box>
      <Box className="App-main">
        <h1 className="App-main-title">Morella</h1>
        <p className="App-main-text">
          Morella mélységesen művelt volt. Életemet merem rátenni: tehetsége
          magasabb rendű volt a közönségesnél – elméjének ereje óriás. Éreztem
          ezt, és sok dologban tanítványa lettem. De hamarosan úgy találtam,
          hogy pozsonyi nevelése folytán azokat a misztikus írásokat rakja elém,
          egész csomót, amelyeket általában a korai német irodalom puszta
          salakjának szoktunk tekinteni. Ez volt, el sem tudtam képzelni, mi
          okból, kedvence s állandó tanulmánya – s hogy idő folytán ez lett
          nekem magamnak is, a példa és szokás egyszerű, de hatékony
          befolyásának kell tulajdonítani.
        </p>
        <h3 className="App-main-more">Read more</h3>
      </Box>
    </div>
  );
}

export default App;
