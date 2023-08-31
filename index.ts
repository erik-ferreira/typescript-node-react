type Usuario = {
  name: string
  anoDeNascimento: number
}

function calculaIdadeDoUsuario(usuario: Usuario) {
  return 2023 - usuario.anoDeNascimento
}

calculaIdadeDoUsuario({ name: "Erik", anoDeNascimento: 2002 })
