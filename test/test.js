const expect = require('chai').expect /* Importa la funcion expect del modulo 'chai' y la guarda en lña const expect */
const platzom = require('..').default

describe('#platzom', () => {
  it('Si la palabra termina en "ar", se le quitan esos dos caracteres.', () => {
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })

  it('Si la palabra inicia con z, se le añade "pe" al final.', ()=> {
    const translation = platzom("Zorro")
    const translation2 = platzom("Zarpar")
    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })

  it('Si la palabra traducida tiene mas 10 o mas letras, se parte a la mitad y se une con un guion medio.', ()=> {
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })

  it('Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas.', ()=> {
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })
})