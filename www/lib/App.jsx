class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Navbar />
          <Container>
            <Flex tamanho='2'/>
            <Perfil
              nome="Leandro da Silva Ferreira"
              resumo="Full Stack Developer, Python Developer, JavaScript Developer, Front-end developer"
            />
            <Descricao
              titulo="Hello, I am Leandro, welcome to my github"
              texto="Sou formado em Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e linguagem de programação, mais especificamente JavaScript, tenho um amplo conhecimento em desenvolvimento web utilizando Bootstrap, NodeJs, Reactjs e entre outras ferramentas. Possuo conhecimento em metodologias ágeis como SCRUM e KANBAN, tenho curiosidade em aprender novas tecnologias, facilidade para trabalhar em grupo e experiência no ramo de Varejo."
            >
              <Habilidade porcentagem="80" tamanho="md" icone="./img/html5.png"/>
              <Habilidade porcentagem="50" tamanho="md" icone="./img/css3.png"/>
              <Habilidade porcentagem="80" tamanho="md" icone="./img/js.png"/>
              <Habilidade porcentagem="60" tamanho="md" icone="./img/react.png"/>
            </Descricao>
            <Flex tamanho='2' />
          </Container>
          <Footer nome="Leandro">
            <Icone
              link="https://github.com/lsferreira934"
              tamanho="sm"
              icone="./icons/github-square-brands.svg"
            />
            <Icone
              link="https://www.linkedin.com/in/lsferreira934/"
              tamanho="sm"
              icone="./icons/linkedin-brands.svg"
            />
          </Footer>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
