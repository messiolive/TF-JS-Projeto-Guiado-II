class Livro{
  constructor(
    public id:number, 
    public titulo:string, 
    public autor:string, 
    public estaDisponivel:boolean =true
  ){}

  // --------- [Não mexer] Responsaveis por renderizar no html
criarElementoHTML(): HTMLLIElement {
  const li = document.createElement("li");
  li.innerHTML = `<span>${this.titulo}</span> (Autor: ${this.autor})`;
  li.classList.add("livro-item");
  if (!this.estaDisponivel) {
    li.classList.add("emprestado");
  }
  return li;
}
// --------- [Não mexer] Responsaveis por renderizar no html


  emprestarLivro(){
    if(this.estaDisponivel){

      this.estaDisponivel=false;
    }else{
      alert('O livro "${this.titulo}" não esta disponivel');
    }
  }

} 
















