class Icone extends React.Component {
  render() {
    return (
      <a className="icone-link" href={this.props.link} target="_blank">
        <img className={`icone-${this.props.tamanho}`} src={this.props.icone} />
      </a>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-vazio"></div>
        <div className="navbar-links">
          <a className="navbar-link">Overview</a>
          <a className="navbar-link">Repositório</a>
          <a className="navbar-link">Projetos</a>
        </div>
      </nav>
    );
  }
}

class Container extends React.Component {
  render() {
    return <section className="container">{this.props.children}</section>;
  }
}

class Foto extends React.Component {
  render() {
    return (
      <div className="foto">
        <a href={this.props.link}>
          <img className="foto-perfil" src={this.props.url} />
        </a>
      </div>
    );
  }
}

class Perfil extends React.Component {
  render() {
    return (
      <div className="perfil">
        <Foto
          link="https://github.com/lsferreira934"
          url="https://avatars.githubusercontent.com/u/56802012?v=4"
        />
        <div className="perfil-nome">
          <h2>{this.props.nome}</h2>
        </div>
        <div className="perfil-resumo">
          <p>{this.props.resumo}</p>
        </div>
      </div>
    );
  }
}

class Descricao extends React.Component {
  render() {
    return (
      <div className="descricao-container">
        <div className="descricao">
          <div className="descricao-titulo">
            <h3>{this.props.titulo}</h3>
          </div>
          <div className="descricao-texto">
            <p>{this.props.texto}</p>
          </div>
        </div>
        <div className="descricao-habilidades">
          {this.props.children}
        </div>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-links">{this.props.children}</div>
        <div className="footer-criado">
          <p>
            Criado por <span>{this.props.nome}</span>
          </p>
        </div>
      </div>
    );
  }
}

class Habilidade extends React.Component {
  render() {
    return (
      <div className="habilidade-container">
        <Icone tamanho={this.props.tamanho} icone={this.props.icone}/>
        <div className="habilidade-barraProgresso">
          <span style={{ width: `${this.props.porcentagem}%`}} ></span>
        </div>
        <p>{`${this.props.porcentagem}%`}</p>
      </div>
    );
  }
}

class Flex extends React.Component {
  render() {
    return(
      <div className={`flex-${this.props.tamanho}`}>
      </div>
    )
  }
}